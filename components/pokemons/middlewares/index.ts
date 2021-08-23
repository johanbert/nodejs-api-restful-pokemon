import express from 'express';
import PokemonsService from "../services/";
class PokemonsMiddleware {
    async validatePostRequiredFields(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (!req.body || !req.body.name && !req.body.type) 
            res.status(400).send({ errors: ['Missing required fields: name and type'] })
        else 
            next();
    }
    async validatePatchRequiredFields(req: express.Request, res: express.Response, next: express.NextFunction) {
        const alloweds = {
            minChars : "2",
            maxChars : "20", 
            uppers: "A-Z",
            lowers: "a-z",
        }
        let regExp = new RegExp(`(?=^.{${alloweds.minChars},${alloweds.maxChars}}$)(?=.*[${alloweds.lowers}${alloweds.uppers}])`)
        if (req.body.name && !regExp.test( String(req.body.name) ) ) 
            res.status(400).send({ errors: [`Name is not valid, must be contains at least ${alloweds.minChars} chars, max ${alloweds.maxChars} chars, and can't be white spaces`] })
        if (req.body.type && !regExp.test( String(req.body.type) ) ) 
            res.status(400).send({ errors: [`Type is not valid, must be contains at least ${alloweds.minChars} chars, max ${alloweds.maxChars} chars, and can't be white spaces`] })
        if (req.body.level)
            if (Number(req.body.level) < 1 && Number(req.body.level) > 100 )
                res.status(400).send({ errors: [`Level must be between 1 and 100`] })
        else
            next();
    }
    
    async validateEmptyParams(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (!req.params.pokemonId)
            res.status(400).send({ errors: [`Missing required params: pokemonId`] })
        else
            next();
    }

    async validatePokemonExists(req: express.Request, res: express.Response, next: express.NextFunction) {
        const pokemon = await PokemonsService.readById(req.body.pokemonId);
        if (!pokemon) {
            res.status(400).send({ errors: ['pokemonId doesnt exists'] });
        } else {
            res.locals.publicAccess = pokemon.publicAccess
            req.body.userId = pokemon.userId
            next();
        }
    }
    async validatePokemonOwner(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (res.locals.userId != req.body.userId)
            res.status(400).send({ errors: ['You dont have permissions to that pokemonId'] });
        else
            next()
    }
    async validateDeletePokemonExists(req: express.Request, res: express.Response, next: express.NextFunction) {
        const pokemon = await PokemonsService.readById(req.params.pokemonId);
        if (!pokemon) {
            res.status(400).send({ errors: ['pokemonId doesnt exists'] });
        } else {
            res.locals.publicAccess = pokemon.publicAccess
            req.body.userId = pokemon.userId
            next();
        }
    }
    async validateDeletePokemonOwner(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (res.locals.userId != req.body.userId)
            res.status(400).send({ errors: ['You dont have permissions to that pokemonId'] });
        else
            next()
    }
    async filterBodyFields(req: express.Request, res: express.Response, next: express.NextFunction) {
        const pokemonId = req.body.pokemonId,
            name = req.body.name,
            level = req.body.level,
            type = req.body.type;
        req.body = {};
        if (pokemonId)  req.body.pokemonId = pokemonId;
        if (name)  req.body.name = name;
        if (level)  req.body.level = level;
        if (type)  req.body.type = type;
        next();
    }
    async filterPatchBodyFields(req: express.Request, res: express.Response, next: express.NextFunction) {
        const name = req.body.name,
        level = req.body.level,
        type = req.body.type;
        req.body = {};
        if (name)  req.body.name = name;
        if (level)  req.body.level = level;
        if (type)  req.body.type = type;
        next();
    }
};
export default new PokemonsMiddleware();
        