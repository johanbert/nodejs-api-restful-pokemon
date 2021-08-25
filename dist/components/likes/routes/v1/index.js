"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikesRoutes = void 0;
const routes_common_1 = require("../../../../common/classes/routes.common");
const controllers_1 = __importDefault(require("../../controllers"));
const middlewares_1 = __importDefault(require("../../middlewares"));
const middlewares_2 = __importDefault(require("../../../pokemons/middlewares"));
const jwt_middleware_1 = __importDefault(require("../../../../common/middlewares/jwt.middleware"));
class LikesRoutes extends routes_common_1.RoutesCommon {
    constructor(app) {
        super(app, 'LikesRoutes');
    }
    configureRoutes() {
        this.app
            .route(`/api/v1/likes`)
            .all(jwt_middleware_1.default.validateJWTNeeded, jwt_middleware_1.default.validateJWTUserID)
            .get(controllers_1.default.listLikes)
            .post(middlewares_1.default.validatePostRequiredFields, middlewares_2.default.validatePokemonExists, middlewares_1.default.validatePublicAccess, middlewares_1.default.filterPostBodyFields, controllers_1.default.toogleLike);
        return this.app;
    }
}
exports.LikesRoutes = LikesRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL2xpa2VzL3JvdXRlcy92MS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw0RUFBc0U7QUFDdEUsb0VBQWdEO0FBQ2hELG9FQUFnRDtBQUNoRCxnRkFBOEQ7QUFDOUQsbUdBQTBFO0FBRzFFLE1BQWEsV0FBWSxTQUFRLDRCQUFZO0lBQ3pDLFlBQVksR0FBd0I7UUFDaEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0QsZUFBZTtRQUNYLElBQUksQ0FBQyxHQUFHO2FBQ0gsS0FBSyxDQUFDLGVBQWUsQ0FBQzthQUN0QixHQUFHLENBQ0Esd0JBQWEsQ0FBQyxpQkFBaUIsRUFDL0Isd0JBQWEsQ0FBQyxpQkFBaUIsQ0FDbEM7YUFDQSxHQUFHLENBQ0EscUJBQWUsQ0FBQyxTQUFTLENBQzVCO2FBQ0EsSUFBSSxDQUNELHFCQUFlLENBQUMsMEJBQTBCLEVBQzFDLHFCQUFrQixDQUFDLHFCQUFxQixFQUN4QyxxQkFBZSxDQUFDLG9CQUFvQixFQUNwQyxxQkFBZSxDQUFDLG9CQUFvQixFQUNwQyxxQkFBZSxDQUFDLFVBQVUsQ0FDN0IsQ0FBQztRQUVOLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0NBQ0o7QUF4QkQsa0NBd0JDIn0=