import mongooseService from '../../../common/services/mongoose.service';
import shortid from 'shortid';
import debug from 'debug';
import { PokemonModel } from '../models/pokemon.model';
import { CreatePokemonDto } from '../dto/create.dto';
import { PatchPokemonDto } from '../dto/patch.dto';
import { PutPokemonDto } from '../dto/put.dto';

const log: debug.IDebugger = debug('app:pokemons-dao');

class PokemonsDAO {   
    private collection = 'pokemons'
    private Schema = mongooseService.getMongoose().Schema;
    private pokemonSchema = new this.Schema(PokemonModel);
    private Pokemon = mongooseService.getMongoose().model(this.collection, this.pokemonSchema);

    constructor() {
        log('Created new instance of PokemonsDao');
    }

    async addPokemon(pokemonFields: CreatePokemonDto) {
        const pokemonId = shortid.generate();
        pokemonFields.level = (pokemonFields.level) ? pokemonFields.level : 1; 
        pokemonFields.publicAccess = false; // false = private
        pokemonFields.likes = 0;
        const pokemon = new this.Pokemon({
            _id: pokemonId,
            ...pokemonFields,
        });
        await pokemon.save();
        return pokemonId;
    } 
    async getPokemons( userId: string, limit = 25, page = 0) {
        return this.Pokemon.find({ $or:[{ userId: userId }, { publicAccess: true }] })
            .limit(limit)
            .skip(limit * page)
            .exec();
    }

    async updatePokemonById( pokemonId: string, pokemonFields: PatchPokemonDto | PutPokemonDto ) {
        const existingPokemon = await this.Pokemon.findOneAndUpdate(
            { _id: pokemonId },
            { $set: pokemonFields },
            { new: true }
        ).exec();

        return existingPokemon;
    }
    async incPokemonLikes( pokemonId: string, incValue: number) {
        const pokemon = await this.Pokemon.findOneAndUpdate(
            { _id: pokemonId },
            { $inc: { likes : incValue} },
            { new: true }
        ).exec();

        return pokemon;
    }

    async removePokemonById(pokemonId: string) {
        return this.Pokemon.deleteOne({ _id: pokemonId }).exec();
    }

    async getPokemonById(pokemonId: string) {
        return this.Pokemon.findOne({ _id: pokemonId }).populate(this.collection).exec();
    }
}

export default new PokemonsDAO();
