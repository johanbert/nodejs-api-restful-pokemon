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
const shortid_1 = __importDefault(require("shortid"));
const debug_1 = __importDefault(require("debug"));
const pokemon_model_1 = require("../models/pokemon.model");
const log = debug_1.default('app:pokemons-dao');
class PokemonsDAO {
    constructor() {
        this.collection = 'pokemons';
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        this.pokemonSchema = new this.Schema(pokemon_model_1.PokemonModel);
        this.Pokemon = mongoose_service_1.default.getMongoose().model(this.collection, this.pokemonSchema);
        log('Created new instance of PokemonsDao');
    }
    addPokemon(pokemonFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const pokemonId = shortid_1.default.generate();
            pokemonFields.level = (pokemonFields.level) ? pokemonFields.level : 1;
            pokemonFields.publicAccess = false; // false = private
            pokemonFields.likes = 0;
            const pokemon = new this.Pokemon(Object.assign({ _id: pokemonId }, pokemonFields));
            yield pokemon.save();
            return pokemonId;
        });
    }
    getPokemons(userId, limit = 25, page = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Pokemon.find({ $or: [{ userId: userId }, { publicAccess: true }] })
                .limit(limit)
                .skip(limit * page)
                .exec();
        });
    }
    updatePokemonById(pokemonId, pokemonFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingPokemon = yield this.Pokemon.findOneAndUpdate({ _id: pokemonId }, { $set: pokemonFields }, { new: true }).exec();
            return existingPokemon;
        });
    }
    incPokemonLikes(pokemonId, incValue) {
        return __awaiter(this, void 0, void 0, function* () {
            const pokemon = yield this.Pokemon.findOneAndUpdate({ _id: pokemonId }, { $inc: { likes: incValue } }, { new: true }).exec();
            return pokemon;
        });
    }
    removePokemonById(pokemonId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Pokemon.deleteOne({ _id: pokemonId }).exec();
        });
    }
    getPokemonById(pokemonId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Pokemon.findOne({ _id: pokemonId }).populate(this.collection).exec();
        });
    }
}
exports.default = new PokemonsDAO();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jb21wb25lbnRzL3Bva2Vtb25zL2Rhby9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlHQUF3RTtBQUN4RSxzREFBOEI7QUFDOUIsa0RBQTBCO0FBQzFCLDJEQUF1RDtBQUt2RCxNQUFNLEdBQUcsR0FBb0IsZUFBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFFdkQsTUFBTSxXQUFXO0lBTWI7UUFMUSxlQUFVLEdBQUcsVUFBVSxDQUFBO1FBQ3ZCLFdBQU0sR0FBRywwQkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUM5QyxrQkFBYSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyw0QkFBWSxDQUFDLENBQUM7UUFDOUMsWUFBTyxHQUFHLDBCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBR3ZGLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFSyxVQUFVLENBQUMsYUFBK0I7O1lBQzVDLE1BQU0sU0FBUyxHQUFHLGlCQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDckMsYUFBYSxDQUFDLEtBQUssR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLGFBQWEsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUMsa0JBQWtCO1lBQ3RELGFBQWEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8saUJBQzVCLEdBQUcsRUFBRSxTQUFTLElBQ1gsYUFBYSxFQUNsQixDQUFDO1lBQ0gsTUFBTSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDckIsT0FBTyxTQUFTLENBQUM7UUFDckIsQ0FBQztLQUFBO0lBQ0ssV0FBVyxDQUFFLE1BQWMsRUFBRSxLQUFLLEdBQUcsRUFBRSxFQUFFLElBQUksR0FBRyxDQUFDOztZQUNuRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUN6RSxLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2lCQUNsQixJQUFJLEVBQUUsQ0FBQztRQUNoQixDQUFDO0tBQUE7SUFFSyxpQkFBaUIsQ0FBRSxTQUFpQixFQUFFLGFBQThDOztZQUN0RixNQUFNLGVBQWUsR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQ3ZELEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxFQUNsQixFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDdkIsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQ2hCLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFVCxPQUFPLGVBQWUsQ0FBQztRQUMzQixDQUFDO0tBQUE7SUFDSyxlQUFlLENBQUUsU0FBaUIsRUFBRSxRQUFnQjs7WUFDdEQsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUMvQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsRUFDbEIsRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUcsUUFBUSxFQUFDLEVBQUUsRUFDN0IsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQ2hCLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFVCxPQUFPLE9BQU8sQ0FBQztRQUNuQixDQUFDO0tBQUE7SUFFSyxpQkFBaUIsQ0FBQyxTQUFpQjs7WUFDckMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdELENBQUM7S0FBQTtJQUVLLGNBQWMsQ0FBQyxTQUFpQjs7WUFDbEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckYsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLFdBQVcsRUFBRSxDQUFDIn0=