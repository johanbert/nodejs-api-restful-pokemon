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
class PokemonsService {
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return dao_1.default.addPokemon(resource);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return dao_1.default.removePokemonById(id);
        });
    }
    list(id, limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return dao_1.default.getPokemons(id, limit, page);
        });
    }
    readById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return dao_1.default.getPokemonById(id);
        });
    }
    patchById(id, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return dao_1.default.updatePokemonById(id, resource);
        });
    }
}
exports.default = new PokemonsService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jb21wb25lbnRzL3Bva2Vtb25zL3NlcnZpY2VzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQWlDO0FBTWpDLE1BQU0sZUFBZTtJQUNYLE1BQU0sQ0FBQyxRQUEwQjs7WUFDbkMsT0FBTyxhQUFXLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLENBQUM7S0FBQTtJQUNLLFVBQVUsQ0FBQyxFQUFVOztZQUN2QixPQUFPLGFBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QyxDQUFDO0tBQUE7SUFDSyxJQUFJLENBQUMsRUFBVSxFQUFFLEtBQWEsRUFBRSxJQUFZOztZQUM5QyxPQUFPLGFBQVcsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwRCxDQUFDO0tBQUE7SUFDSyxRQUFRLENBQUMsRUFBVTs7WUFDckIsT0FBTyxhQUFXLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLENBQUM7S0FBQTtJQUNLLFNBQVMsQ0FBQyxFQUFVLEVBQUUsUUFBeUI7O1lBQ2pELE9BQU8sYUFBVyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN2RCxDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksZUFBZSxFQUFFLENBQUMifQ==