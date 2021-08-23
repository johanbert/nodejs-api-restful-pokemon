import mongooseService from '../../../common/services/mongoose.service';
import debug from 'debug';
import { LikeModel } from '../models/like.model';
import { CreateLikeDto } from '../dto/create.dto';
import PokemonsDao from "../../pokemons/dao/";
const log: debug.IDebugger = debug('app:likes-dao');

class LikesDAO {
    private collection = 'likes'
    private Schema = mongooseService.getMongoose().Schema;
    private likeSchema = new this.Schema(LikeModel);
    private Like = mongooseService.getMongoose().model(this.collection, this.likeSchema);

    constructor() { log('Created new instance of LikesDao') }
   
    async createOrUpdateLike( likeFields: CreateLikeDto ) {
        let like = await this.getLike(likeFields.userId, likeFields.pokemonId);
        let active = false;
        let incValue = -1;
        if (!like || !like.active ){
            active = true;
            incValue = 1;
        }
        const existingLike = await this.Like.findOneAndUpdate(
            { userId: likeFields.userId, pokemonId: likeFields.pokemonId },
            { $set: { active: active } },
            { new: true, upsert: true }
        ).exec();
        const likes = await PokemonsDao.incPokemonLikes( likeFields.pokemonId, incValue );

        return { pokemon: likes, like: existingLike };
    }

    async getLikes( userId: string, limit = 25, page = 0) {
        return this.Like.find({  userId: userId }, { publicAccess: false })
            .limit(limit)
            .skip(limit * page)
            .exec();
    }

    async getLike(userId: string, pokemonId: string) {
        return this.Like.findOne({ userId: userId, pokemonId:pokemonId }).populate('User').exec();
    }

}

export default new LikesDAO();
