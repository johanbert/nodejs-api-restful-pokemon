"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_common_1 = require("../../../../common/classes/routes.common");
const controllers_1 = __importDefault(require("../../controllers"));
const middlewares_1 = __importDefault(require("../../middlewares"));
class UsersRoutes extends routes_common_1.RoutesCommon {
    constructor(app) {
        super(app, 'UsersRoutes');
    }
    configureRoutes() {
        this.app
            .route(`/api/v1/users`)
            .all(middlewares_1.default.validateRequiredUserBodyFields, middlewares_1.default.validateEmailFormat, middlewares_1.default.validatePassword, middlewares_1.default.validateEmailDoesntExist)
            .post(controllers_1.default.createUser);
        this.app.route(`/api/v1/users/login`)
            .all(middlewares_1.default.validateRequiredUserBodyFields, middlewares_1.default.validateEmailFormat, middlewares_1.default.validatePassword, middlewares_1.default.validateEmailExist, middlewares_1.default.validateEmailAndPassword)
            .post(controllers_1.default.logIn);
        return this.app;
    }
}
exports.default = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3VzZXJzL3JvdXRlcy92MS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRFQUFzRTtBQUN0RSxvRUFBZ0Q7QUFDaEQsb0VBQWdEO0FBR2hELE1BQXFCLFdBQVksU0FBUSw0QkFBWTtJQUNqRCxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNELGVBQWU7UUFDWCxJQUFJLENBQUMsR0FBRzthQUNILEtBQUssQ0FBQyxlQUFlLENBQUM7YUFDdEIsR0FBRyxDQUNBLHFCQUFlLENBQUMsOEJBQThCLEVBQzlDLHFCQUFlLENBQUMsbUJBQW1CLEVBQ25DLHFCQUFlLENBQUMsZ0JBQWdCLEVBQ2hDLHFCQUFlLENBQUMsd0JBQXdCLENBQzNDO2FBQ0EsSUFBSSxDQUNELHFCQUFlLENBQUMsVUFBVSxDQUM3QixDQUFDO1FBRU4sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUM7YUFDaEMsR0FBRyxDQUFDLHFCQUFlLENBQUMsOEJBQThCLEVBQy9DLHFCQUFlLENBQUMsbUJBQW1CLEVBQ25DLHFCQUFlLENBQUMsZ0JBQWdCLEVBQ2hDLHFCQUFlLENBQUMsa0JBQWtCLEVBQ2xDLHFCQUFlLENBQUMsd0JBQXdCLENBQ3ZDO2FBQ0osSUFBSSxDQUFDLHFCQUFlLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFaEMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7Q0FDSjtBQTVCRCw4QkE0QkMifQ==