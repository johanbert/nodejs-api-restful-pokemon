import {RoutesCommon} from '../../../../common/classes/routes.common';
import PokemonsController from '../../controllers';
import PokemonsMiddleware from '../../middlewares';
import JwtMiddleware from '../../../../common/middlewares/jwt.middleware';
import express from 'express';

export class PokemonsRoutes extends RoutesCommon {
    constructor(app: express.Application) {
        super(app, 'PokemonsRoutes');
    }
    configureRoutes() {
        this.app
            .route(`/api/v1/pokemons`)
            .all( 
                JwtMiddleware.validateJWTNeeded,
                JwtMiddleware.validateJWTUserID
            )
            .post( 
                PokemonsMiddleware.validatePostRequiredFields,
                PokemonsMiddleware.filterBodyFields,
                PokemonsController.createPokemon 
                )
            .patch( 
                PokemonsMiddleware.validatePatchRequiredFields,
                PokemonsMiddleware.validatePokemonExists,
                PokemonsMiddleware.validatePokemonOwner,
                PokemonsMiddleware.filterBodyFields,
                PokemonsController.patchPokemon 
            )
            .get( PokemonsController.listPokemons )
        this.app
            .route(`/api/v1/pokemons/:pokemonId`)
            .all( 
                JwtMiddleware.validateJWTNeeded,
                JwtMiddleware.validateJWTUserID
            )
            .delete( 
                PokemonsMiddleware.validateEmptyParams,
                PokemonsMiddleware.validateDeletePokemonExists,
                PokemonsMiddleware.validateDeletePokemonOwner,
                PokemonsController.deletePokemon 
            );
        return this.app;
    }
}