import express from 'express';
import LikesService from '../services';
import debug from 'debug';
const log: debug.IDebugger = debug('app:likes-controller');

class LikesController {
    async listLikes(req: express.Request, res: express.Response) {
        const   userId = res.locals.userId,
                limit  = (req.query.limit) ? Number(req.query.limit) : 100,
                page   = (req.query.page)  ? Number(req.query.page)  : 0;
        const likes = await LikesService.list(userId, limit, page);
        log('likes',likes)
        res.status(200).send(likes);
    }
    async toogleLike(req: express.Request, res: express.Response) {
        req.body.userId = res.locals.userId
        const likeId = await LikesService.patch(req.body);
        res.status(201).send( likeId );
    }
}

export default new LikesController();
