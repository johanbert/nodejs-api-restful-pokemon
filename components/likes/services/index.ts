import LikesDao from '../dao';
import { CRUD } from '../../../common/dto/crud.interface';
import { CreateLikeDto } from '../dto/create.dto';

class LikesService implements Partial<CRUD> {
    async list(id:string, limit: number, page: number) {
        return LikesDao.getLikes(id, limit, page);
    }
    async patch(resource: CreateLikeDto) {
        return LikesDao.createOrUpdateLike(resource);
    }
    async read(userId: string, pokemonId: string) {
        return LikesDao.getLike(userId, pokemonId);
    }
}

export default new LikesService();
