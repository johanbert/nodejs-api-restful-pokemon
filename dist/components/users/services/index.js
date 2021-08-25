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
const dao_1 = __importDefault(require("../dao"));
class UsersService {
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return dao_1.default.addUser(resource);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return dao_1.default.removeUserById(id);
        });
    }
    list(id, limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return dao_1.default.getUsers(limit, page);
        });
    }
    readById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return dao_1.default.getUserById(id);
        });
    }
    createAccessToken(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return dao_1.default.createAccessToken(email);
        });
    }
    getUserByEmailWithPassword(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return dao_1.default.getUserByEmailWithPassword(email);
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return dao_1.default.getUserByEmail(email);
        });
    }
}
exports.default = new UsersService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jb21wb25lbnRzL3VzZXJzL3NlcnZpY2VzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQThCO0FBTTlCLE1BQU0sWUFBWTtJQUNSLE1BQU0sQ0FBQyxRQUF1Qjs7WUFDaEMsT0FBTyxhQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7S0FBQTtJQUNLLFVBQVUsQ0FBQyxFQUFVOztZQUN2QixPQUFPLGFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkMsQ0FBQztLQUFBO0lBQ0ssSUFBSSxDQUFDLEVBQVUsRUFBRSxLQUFhLEVBQUUsSUFBWTs7WUFDOUMsT0FBTyxhQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQyxDQUFDO0tBQUE7SUFDSyxRQUFRLENBQUMsRUFBVTs7WUFDckIsT0FBTyxhQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7S0FBQTtJQUNLLGlCQUFpQixDQUFDLEtBQWE7O1lBQ2pDLE9BQU8sYUFBUSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLENBQUM7S0FBQTtJQUNLLDBCQUEwQixDQUFDLEtBQWE7O1lBQzFDLE9BQU8sYUFBUSxDQUFDLDBCQUEwQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RELENBQUM7S0FBQTtJQUNLLGNBQWMsQ0FBQyxLQUFhOztZQUM5QixPQUFPLGFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLFlBQVksRUFBRSxDQUFDIn0=