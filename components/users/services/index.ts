import UsersDao from '../dao';
import { CRUD } from '../../../common/dto/crud.interface';
import { CreateUserDto } from '../dto/create.dto';
import { PutUserDto } from '../dto/put.dto';
import { PatchUserDto } from '../dto/patch.dto';

class UsersService implements CRUD {
    async create(resource: CreateUserDto) {
        // resource.publicAccess = 1;
        return UsersDao.addUser(resource);
    }
    async deleteById(id: string) {
        return UsersDao.removeUserById(id);
    }
    async list(id: string, limit: number, page: number) {
        // return UsersDao.getUsers(limit, page);
    }
    async readById(id: string) {
        return UsersDao.getUserById(id);
    }
    async createAccessToken(email: string) {
        return UsersDao.createAccessToken(email);
    }
    async patchById(id: string, resource: PatchUserDto): Promise<any> {
        // return UsersDao.updateUserById(id, resource);
    }
    async putById(id: string, resource: PutUserDto): Promise<any> {
        // return UsersDao.updateUserById(id, resource);
    }
    async updateById(id: string, resource: CreateUserDto): Promise<any> {
        // return UsersDao.updateUserById(id, resource);
    }
    
    async getUserByEmailWithPassword(email: string) {
        return UsersDao.getUserByEmailWithPassword(email);
    }
    async getUserByEmail(email: string) {
        return UsersDao.getUserByEmail(email);
    }
}

export default new UsersService();
