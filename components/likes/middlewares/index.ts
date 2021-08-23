import express from 'express';
import LikesService from "../services";

class LikesMiddleware{

    async validatePostRequiredFields(req: express.Request, res: express.Response, next: express.NextFunction) {
        const alloweds = {
            minChars : "1",
            maxChars : "25", 
            uppers: "A-Z",
            lowers: "a-z",
            numbers: "0-9",
        }
        let regExp = new RegExp(`(?=^.{${alloweds.minChars},${alloweds.maxChars}}$)(?=.*[${alloweds.lowers}${alloweds.uppers}${alloweds.numbers}])`)
        if (req.body.pokemonId && !regExp.test( String(req.body.pokemonId) ) ) 
            res.status(400).send({ errors: [`pokemonId is not valid, can't be empty or white spaces`] })
        else 
            next();
        // if (req.body.active !== true && req.body.active !== false) 
        //     res.status(400).send({ errors: [`active is not valid, must be boolean: true or false`] })
    }

    async filterPostBodyFields(req: express.Request, res: express.Response, next: express.NextFunction) {
        const pokemonId = req.body.pokemonId;
                // active = req.body.active;
        req.body = {};
        if (pokemonId)  req.body.pokemonId = pokemonId;
        // if (active)  req.body.active = active;        
        next();
    }
    
    async validatePublicAccess(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (!res.locals.publicAccess)
            res.status(400).send({ errors: ['You cant give like or dislike to private pokemons'] });
        else
            next()
    }
    // async validateLikeOrDislike(req: express.Request, res: express.Response, next: express.NextFunction) {
    //     const like = await LikesService.read(req.body.userId, req.body.pokemonId)
    //     if (!like && !req.body.active)
    //         return res.status(400).send({ errors: ['You cant switch to Dislike if you never did Like'] });
    //     if (like && like.active && req.body.active)
    //         return res.status(400).send({ errors: ['You cant switch to Like if you didnt Dislike'] });
    //     else{
    //         let incValue =  (!like.active && req.body.active) ? 1 :  -1;
    //         next()
    //     }
    // }

}
export default new LikesMiddleware;