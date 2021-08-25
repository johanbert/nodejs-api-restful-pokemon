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
const services_1 = __importDefault(require("../services"));
const debug_1 = __importDefault(require("debug"));
const log = debug_1.default('app:pokemons-controller');
class PokemonsController {
    listPokemons(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = res.locals.userId, limit = (req.query.limit) ? Number(req.query.limit) : 100, page = (req.query.page) ? Number(req.query.page) : 0;
            const pokemons = yield services_1.default.list(userId, limit, page);
            res.status(200).send(pokemons);
        });
    }
    createPokemon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.userId = res.locals.userId;
            const pokemonId = yield services_1.default.create(req.body);
            res.status(201).send(pokemonId);
        });
    }
    patchPokemon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.userId = res.locals.userId;
            const pokemon = yield services_1.default.patchById(req.body.pokemonId, req.body);
            res.status(201).send(pokemon);
        });
    }
    deletePokemon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pokemonId = yield services_1.default.deleteById(req.params.pokemonId);
            res.status(201).send(pokemonId);
        });
    }
}
exports.default = new PokemonsController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jb21wb25lbnRzL3Bva2Vtb25zL2NvbnRyb2xsZXJzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMkRBQTBDO0FBQzFDLGtEQUEwQjtBQUMxQixNQUFNLEdBQUcsR0FBb0IsZUFBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFFOUQsTUFBTSxrQkFBa0I7SUFDZCxZQUFZLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDMUQsTUFBUSxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQzFCLEtBQUssR0FBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQzFELElBQUksR0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakUsTUFBTSxRQUFRLEdBQUcsTUFBTSxrQkFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2hFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLENBQUM7S0FBQTtJQUNLLGFBQWEsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUMzRCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNwQyxNQUFNLFNBQVMsR0FBRyxNQUFNLGtCQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBRSxTQUFTLENBQUUsQ0FBQztRQUN0QyxDQUFDO0tBQUE7SUFDSyxZQUFZLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDMUQsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDcEMsTUFBTSxPQUFPLEdBQUcsTUFBTSxrQkFBZSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUUsT0FBTyxDQUFFLENBQUM7UUFDcEMsQ0FBQztLQUFBO0lBQ0ssYUFBYSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzNELE1BQU0sU0FBUyxHQUFHLE1BQU0sa0JBQWUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN6RSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBRSxTQUFTLENBQUUsQ0FBQztRQUN0QyxDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksa0JBQWtCLEVBQUUsQ0FBQyJ9