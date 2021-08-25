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
class LikesService {
    list(id, limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return dao_1.default.getLikes(id, limit, page);
        });
    }
    patch(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return dao_1.default.createOrUpdateLike(resource);
        });
    }
    read(userId, pokemonId) {
        return __awaiter(this, void 0, void 0, function* () {
            return dao_1.default.getLike(userId, pokemonId);
        });
    }
}
exports.default = new LikesService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2xpa2VzL3NlcnZpY2VzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQThCO0FBSTlCLE1BQU0sWUFBWTtJQUNSLElBQUksQ0FBQyxFQUFTLEVBQUUsS0FBYSxFQUFFLElBQVk7O1lBQzdDLE9BQU8sYUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlDLENBQUM7S0FBQTtJQUNLLEtBQUssQ0FBQyxRQUF1Qjs7WUFDL0IsT0FBTyxhQUFRLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakQsQ0FBQztLQUFBO0lBQ0ssSUFBSSxDQUFDLE1BQWMsRUFBRSxTQUFpQjs7WUFDeEMsT0FBTyxhQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMvQyxDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksWUFBWSxFQUFFLENBQUMifQ==