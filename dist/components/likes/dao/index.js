"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_service_1 = __importDefault(require("../../../common/services/mongoose.service"));
const debug_1 = __importDefault(require("debug"));
const like_model_1 = require("../models/like.model");
const dao_1 = __importDefault(require("../../pokemons/dao/"));
const log = debug_1.default('app:likes-dao');
class LikesDAO {
    constructor() {
        this.collection = 'likes';
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        this.likeSchema = new this.Schema(like_model_1.LikeModel);
        this.Like = mongoose_service_1.default.getMongoose().model(this.collection, this.likeSchema);
        log('Created new instance of LikesDao');
    }
    createOrUpdateLike(likeFields) {
        return __awaiter(this, void 0, void 0, function* () {
            let like = yield this.getLike(likeFields.userId, likeFields.pokemonId);
            let active = false;
            let incValue = -1;
            if (!like || !like.active) {
                active = true;
                incValue = 1;
            }
            const existingLike = yield this.Like.findOneAndUpdate({ userId: likeFields.userId, pokemonId: likeFields.pokemonId }, { $set: { active: active } }, { new: true, upsert: true }).exec();
            const likes = yield dao_1.default.incPokemonLikes(likeFields.pokemonId, incValue);
            return { pokemon: likes, like: existingLike };
        });
    }
    getLikes(userId, limit = 25, page = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Like.find({ userId: userId }, { publicAccess: false })
                .limit(limit)
                .skip(limit * page)
                .exec();
        });
    }
    getLike(userId, pokemonId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Like.findOne({ userId: userId, pokemonId: pokemonId }).populate('User').exec();
        });
    }
}
exports.default = new LikesDAO();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2xpa2VzL2Rhby9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlHQUF3RTtBQUN4RSxrREFBMEI7QUFDMUIscURBQWlEO0FBRWpELDhEQUE4QztBQUM5QyxNQUFNLEdBQUcsR0FBb0IsZUFBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRXBELE1BQU0sUUFBUTtJQU1WO1FBTFEsZUFBVSxHQUFHLE9BQU8sQ0FBQTtRQUNwQixXQUFNLEdBQUcsMEJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDOUMsZUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxzQkFBUyxDQUFDLENBQUM7UUFDeEMsU0FBSSxHQUFHLDBCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXJFLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFBO0lBQUMsQ0FBQztJQUVuRCxrQkFBa0IsQ0FBRSxVQUF5Qjs7WUFDL0MsSUFBSSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDdkIsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDZCxRQUFRLEdBQUcsQ0FBQyxDQUFDO2FBQ2hCO1lBQ0QsTUFBTSxZQUFZLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUNqRCxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsU0FBUyxFQUFFLEVBQzlELEVBQUUsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQzVCLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQzlCLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDVCxNQUFNLEtBQUssR0FBRyxNQUFNLGFBQVcsQ0FBQyxlQUFlLENBQUUsVUFBVSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUUsQ0FBQztZQUVsRixPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLENBQUM7UUFDbEQsQ0FBQztLQUFBO0lBRUssUUFBUSxDQUFFLE1BQWMsRUFBRSxLQUFLLEdBQUcsRUFBRSxFQUFFLElBQUksR0FBRyxDQUFDOztZQUNoRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUcsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDO2lCQUM5RCxLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2lCQUNsQixJQUFJLEVBQUUsQ0FBQztRQUNoQixDQUFDO0tBQUE7SUFFSyxPQUFPLENBQUMsTUFBYyxFQUFFLFNBQWlCOztZQUMzQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUYsQ0FBQztLQUFBO0NBRUo7QUFFRCxrQkFBZSxJQUFJLFFBQVEsRUFBRSxDQUFDIn0=