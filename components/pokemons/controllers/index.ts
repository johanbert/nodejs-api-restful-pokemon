import express from 'express';
import PokemonsService from '../services';
import debug from 'debug';
const log: debug.IDebugger = debug('app:pokemons-controller');

class PokemonsController {
    async listPokemons(req: express.Request, res: express.Response) {
        const   userId = res.locals.userId,
                limit  = (req.query.limit) ? Number(req.query.limit) : 100,
                page   = (req.query.page)  ? Number(req.query.page)  : 0;
        const pokemons = await PokemonsService.list(userId,limit, page);
        res.status(200).send(pokemons);
    }
    async createPokemon(req: express.Request, res: express.Response) {
        req.body.userId = res.locals.userId;
        const pokemonId = await PokemonsService.create(req.body);
        res.status(201).send( pokemonId );
    }
    async patchPokemon(req: express.Request, res: express.Response) {
        req.body.userId = res.locals.userId;
        const pokemon = await PokemonsService.patchById(req.body.pokemonId, req.body);
        res.status(201).send( pokemon );
    }
    async deletePokemon(req: express.Request, res: express.Response) {
        const pokemonId = await PokemonsService.deleteById(req.params.pokemonId);
        res.status(201).send( pokemonId );
    }
}

export default new PokemonsController();
