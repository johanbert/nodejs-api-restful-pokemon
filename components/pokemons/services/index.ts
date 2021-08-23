import PokemonsDao from '../dao';
import { CRUD } from '../../../common/dto/crud.interface';
import { CreatePokemonDto } from '../dto/create.dto';
import { PutPokemonDto } from '../dto/put.dto';
import { PatchPokemonDto } from '../dto/patch.dto';

class PokemonsService implements Partial<CRUD> {
    async create(resource: CreatePokemonDto) {
        return PokemonsDao.addPokemon(resource);
    }
    async deleteById(id: string) {
        return PokemonsDao.removePokemonById(id);
    }
    async list(id: string, limit: number, page: number) {
        return PokemonsDao.getPokemons(id, limit, page);
    }
    async readById(id: string) {
        return PokemonsDao.getPokemonById(id);
    }
    async patchById(id: string, resource: PatchPokemonDto) {
        return PokemonsDao.updatePokemonById(id, resource);
    }
}

export default new PokemonsService();
