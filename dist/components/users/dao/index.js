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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../models/user.model");
const config_1 = require("../../../config");
const log = debug_1.default('app:Users-dao');
class UsersDao {
    constructor() {
        this.COLLECTION = 'users';
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        this.userSchema = new this.Schema(user_model_1.UserModel);
        this.User = mongoose_service_1.default.getMongoose().model(this.COLLECTION, this.userSchema);
        log('Created new instance of UsersDao');
    }
    addUser(userFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = shortid_1.default.generate();
            const user = new this.User(Object.assign({ _id: userId }, userFields));
            yield user.save();
            return { ok: true };
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.User.findOne({ email: email }).exec();
        });
    }
    getUserByEmailWithPassword(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.User.findOne({ email: email })
                .select('_id email +password')
                .exec();
        });
    }
    createAccessToken(email) {
        return __awaiter(this, void 0, void 0, function* () {
            let dateNow = Math.floor(Date.now() / 1000);
            return jsonwebtoken_1.default.sign({ email, iat: dateNow }, config_1.GLOBAL_CONFIG.JWT_SECRET, { expiresIn: config_1.GLOBAL_CONFIG.JWT_LIFETIME });
        });
    }
    removeUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.User.deleteOne({ _id: userId }).exec();
        });
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.User.findOne({ _id: userId }).populate('user').exec();
        });
    }
    getUsers(limit = 25, page = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.User.find()
                .limit(limit)
                .skip(limit * page)
                .exec();
        });
    }
    updateUserById(userId, userFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield this.User.findOneAndUpdate({ _id: userId }, { $set: userFields }, { new: true }).exec();
            return existingUser;
        });
    }
}
exports.default = new UsersDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jb21wb25lbnRzL3VzZXJzL2Rhby9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlHQUF3RTtBQUN4RSxzREFBOEI7QUFDOUIsa0RBQTBCO0FBQzFCLGdFQUErQjtBQUMvQixxREFBaUQ7QUFJakQsNENBQWdEO0FBRWhELE1BQU0sR0FBRyxHQUFvQixlQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFcEQsTUFBTSxRQUFRO0lBTVY7UUFMUSxlQUFVLEdBQUcsT0FBTyxDQUFDO1FBQ3JCLFdBQU0sR0FBRywwQkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUM5QyxlQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLHNCQUFTLENBQUMsQ0FBQztRQUN4QyxTQUFJLEdBQUcsMEJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFckUsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUE7SUFBQyxDQUFDO0lBRW5ELE9BQU8sQ0FBQyxVQUF5Qjs7WUFDbkMsTUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNsQyxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLGlCQUN0QixHQUFHLEVBQUUsTUFBTSxJQUNSLFVBQVUsRUFDZixDQUFDO1lBQ0gsTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbEIsT0FBTyxFQUFFLEVBQUUsRUFBRyxJQUFJLEVBQUUsQ0FBQztRQUN6QixDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsS0FBYTs7WUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RELENBQUM7S0FBQTtJQUVLLDBCQUEwQixDQUFDLEtBQWE7O1lBQzFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUM7aUJBQ3JDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztpQkFDN0IsSUFBSSxFQUFFLENBQUM7UUFDaEIsQ0FBQztLQUFBO0lBQ0ssaUJBQWlCLENBQUMsS0FBYTs7WUFDakMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDNUMsT0FBTyxzQkFBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUUsc0JBQWEsQ0FBQyxVQUFVLEVBQUMsRUFBRSxTQUFTLEVBQUUsc0JBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ2pILENBQUM7S0FBQTtJQUVLLGNBQWMsQ0FBQyxNQUFjOztZQUMvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkQsQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLE1BQWM7O1lBQzVCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEUsQ0FBQztLQUFBO0lBRUssUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUUsSUFBSSxHQUFHLENBQUM7O1lBQy9CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7aUJBQ2xCLEtBQUssQ0FBQyxLQUFLLENBQUM7aUJBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7aUJBQ2xCLElBQUksRUFBRSxDQUFDO1FBQ2hCLENBQUM7S0FBQTtJQUVLLGNBQWMsQ0FBRSxNQUFjLEVBQUUsVUFBcUM7O1lBQ3ZFLE1BQU0sWUFBWSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FDN0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQ2YsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQ3BCLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUNoQixDQUFDLElBQUksRUFBRSxDQUFDO1lBRTdCLE9BQU8sWUFBWSxDQUFDO1FBQ3hCLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxRQUFRLEVBQUUsQ0FBQyJ9