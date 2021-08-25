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
const services_1 = __importDefault(require("../services/"));
class PokemonsMiddleware {
    validatePostRequiredFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body || !req.body.name && !req.body.type)
                res.status(400).send({ errors: ['Missing required fields: name and type'] });
            else
                next();
        });
    }
    validatePatchRequiredFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const alloweds = {
                minChars: "2",
                maxChars: "20",
                uppers: "A-Z",
                lowers: "a-z",
            };
            let regExp = new RegExp(`(?=^.{${alloweds.minChars},${alloweds.maxChars}}$)(?=.*[${alloweds.lowers}${alloweds.uppers}])`);
            if (req.body.name && !regExp.test(String(req.body.name)))
                res.status(400).send({ errors: [`Name is not valid, must be contains at least ${alloweds.minChars} chars, max ${alloweds.maxChars} chars, and can't be white spaces`] });
            if (req.body.type && !regExp.test(String(req.body.type)))
                res.status(400).send({ errors: [`Type is not valid, must be contains at least ${alloweds.minChars} chars, max ${alloweds.maxChars} chars, and can't be white spaces`] });
            if (req.body.level)
                if (Number(req.body.level) < 1 && Number(req.body.level) > 100)
                    res.status(400).send({ errors: [`Level must be between 1 and 100`] });
                else
                    next();
        });
    }
    validateEmptyParams(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.params.pokemonId)
                res.status(400).send({ errors: [`Missing required params: pokemonId`] });
            else
                next();
        });
    }
    validatePokemonExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const pokemon = yield services_1.default.readById(req.body.pokemonId);
            if (!pokemon) {
                res.status(400).send({ errors: ['pokemonId doesnt exists'] });
            }
            else {
                res.locals.publicAccess = pokemon.publicAccess;
                req.body.userId = pokemon.userId;
                next();
            }
        });
    }
    validatePokemonOwner(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (res.locals.userId != req.body.userId)
                res.status(400).send({ errors: ['You dont have permissions to that pokemonId'] });
            else
                next();
        });
    }
    validateDeletePokemonExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const pokemon = yield services_1.default.readById(req.params.pokemonId);
            if (!pokemon) {
                res.status(400).send({ errors: ['pokemonId doesnt exists'] });
            }
            else {
                res.locals.publicAccess = pokemon.publicAccess;
                req.body.userId = pokemon.userId;
                next();
            }
        });
    }
    validateDeletePokemonOwner(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (res.locals.userId != req.body.userId)
                res.status(400).send({ errors: ['You dont have permissions to that pokemonId'] });
            else
                next();
        });
    }
    filterBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const pokemonId = req.body.pokemonId, name = req.body.name, level = req.body.level, type = req.body.type;
            req.body = {};
            if (pokemonId)
                req.body.pokemonId = pokemonId;
            if (name)
                req.body.name = name;
            if (level)
                req.body.level = level;
            if (type)
                req.body.type = type;
            next();
        });
    }
    filterPatchBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const name = req.body.name, level = req.body.level, type = req.body.type;
            req.body = {};
            if (name)
                req.body.name = name;
            if (level)
                req.body.level = level;
            if (type)
                req.body.type = type;
            next();
        });
    }
}
;
exports.default = new PokemonsMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jb21wb25lbnRzL3Bva2Vtb25zL21pZGRsZXdhcmVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNERBQTJDO0FBQzNDLE1BQU0sa0JBQWtCO0lBQ2QsMEJBQTBCLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCOztZQUNwRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJO2dCQUM3QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLHdDQUF3QyxDQUFDLEVBQUUsQ0FBQyxDQUFBOztnQkFFNUUsSUFBSSxFQUFFLENBQUM7UUFDZixDQUFDO0tBQUE7SUFDSywyQkFBMkIsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1lBQ3JHLE1BQU0sUUFBUSxHQUFHO2dCQUNiLFFBQVEsRUFBRyxHQUFHO2dCQUNkLFFBQVEsRUFBRyxJQUFJO2dCQUNmLE1BQU0sRUFBRSxLQUFLO2dCQUNiLE1BQU0sRUFBRSxLQUFLO2FBQ2hCLENBQUE7WUFDRCxJQUFJLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxTQUFTLFFBQVEsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLFFBQVEsWUFBWSxRQUFRLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFBO1lBQ3pILElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFFO2dCQUN0RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcs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