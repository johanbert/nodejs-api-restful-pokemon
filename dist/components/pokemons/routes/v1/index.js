"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonsRoutes = void 0;
const routes_common_1 = require("../../../../common/classes/routes.common");
const controllers_1 = __importDefault(require("../../controllers"));
const middlewares_1 = __importDefault(require("../../middlewares"));
const jwt_middleware_1 = __importDefault(require("../../../../common/middlewares/jwt.middleware"));
class PokemonsRoutes extends routes_common_1.RoutesCommon {
    constructor(app) {
        super(app, 'PokemonsRoutes');
    }
    configureRoutes() {
        this.app
            .route(`/api/v1/pokemons`)
            .all(jwt_middleware_1.default.validateJWTNeeded, jwt_middleware_1.default.validateJWTUserID)
            .post(middlewares_1.default.validatePostRequiredFields, middlewares_1.default.filterBodyFields, controllers_1.default.createPokemon)
            .patch(middlewares_1.default.validatePatchRequiredFields, middlewares_1.default.validatePokemonExists, middlewares_1.default.validatePokemonOwner, middlewares_1.default.filterBodyFields, controllers_1.default.patchPokemon)
            .get(controllers_1.default.listPokemons);
        this.app
            .route(`/api/v1/pokemons/:pokemonId`)
            .all(jwt_middleware_1.default.validateJWTNeeded, jwt_middleware_1.default.validateJWTUserID)
            .delete(middlewares_1.default.validateEmptyParams, middlewares_1.default.validateDeletePokemonExists, middlewares_1.default.validateDeletePokemonOwner, controllers_1.default.deletePokemon);
        return this.app;
    }
}
exports.PokemonsRoutes = PokemonsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3Bva2Vtb25zL3JvdXRlcy92MS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw0RUFBc0U7QUFDdEUsb0VBQW1EO0FBQ25ELG9FQUFtRDtBQUNuRCxtR0FBMEU7QUFHMUUsTUFBYSxjQUFlLFNBQVEsNEJBQVk7SUFDNUMsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNELGVBQWU7UUFDWCxJQUFJLENBQUMsR0FBRzthQUNILEtBQUssQ0FBQyxrQkFBa0IsQ0FBQzthQUN6QixHQUFHLENBQ0Esd0JBQWEsQ0FBQyxpQkFBaUIsRUFDL0Isd0JBQWEsQ0FBQyxpQkFBaUIsQ0FDbEM7YUFDQSxJQUFJLENBQ0QscUJBQWtCLENBQUMsMEJBQTBCLEVBQzdDLHFCQUFrQixDQUFDLGdCQUFnQixFQUNuQyxxQkFBa0IsQ0FBQyxhQUFhLENBQy9CO2FBQ0osS0FBSyxDQUNGLHFCQUFrQixDQUFDLDJCQUEyQixFQUM5QyxxQkFBa0IsQ0FBQyxxQkFBcUIsRUFDeEMscUJBQWtCLENBQUMsb0JBQW9CLEVBQ3ZDLHFCQUFrQixDQUFDLGdCQUFnQixFQUNuQyxxQkFBa0IsQ0FBQyxZQUFZLENBQ2xDO2FBQ0EsR0FBRyxDQUFFLHFCQUFrQixDQUFDLFlBQVksQ0FBRSxDQUFBO1FBQzNDLElBQUksQ0FBQyxHQUFHO2FBQ0gsS0FBSyxDQUFDLDZCQUE2QixDQUFDO2FBQ3BDLEdBQUcsQ0FDQSx3QkFBYSxDQUFDLGlCQUFpQixFQUMvQix3QkFBYSxDQUFDLGlCQUFpQixDQUNsQzthQUNBLE1BQU0sQ0FDSCxxQkFBa0IsQ0FBQyxtQkFBbUIsRUFDdEMscUJBQWtCLENBQUMsMkJBQTJCLEVBQzlDLHFCQUFrQixDQUFDLDBCQUEwQixFQUM3QyxxQkFBa0IsQ0FBQyxhQUFhLENBQ25DLENBQUM7UUFDTixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztDQUNKO0FBdENELHdDQXNDQyJ9