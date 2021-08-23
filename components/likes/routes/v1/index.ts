import {RoutesCommon} from '../../../../common/classes/routes.common';
import LikesController from '../../controllers';
import LikesMiddleware from '../../middlewares';
import PokemonsMiddleware from '../../../pokemons/middlewares'
import JwtMiddleware from '../../../../common/middlewares/jwt.middleware';
import express from 'express';

export class LikesRoutes extends RoutesCommon {
    constructor(app: express.Application) {
        super(app, 'LikesRoutes');
    }
    configureRoutes() {
        this.app
            .route(`/api/v1/likes`)
            .all( 
                JwtMiddleware.validateJWTNeeded,
                JwtMiddleware.validateJWTUserID
            )
            .get(
                LikesController.listLikes
            )
            .post(
                LikesMiddleware.validatePostRequiredFields,
                PokemonsMiddleware.validatePokemonExists,
                LikesMiddleware.validatePublicAccess,
                LikesMiddleware.filterPostBodyFields,
                LikesController.toogleLike
            );

        return this.app;
    }
}