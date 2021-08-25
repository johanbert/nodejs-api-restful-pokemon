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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../../config/");
const services_1 = __importDefault(require("../../components/users/services"));
class JwtMiddleware {
    validateJWTUserID(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield services_1.default.getUserByEmailWithPassword(res.locals.jwt.email);
            if (user) {
                res.locals = {
                    userId: user._id,
                    email: user.email,
                };
                next();
            }
            else {
                return res.status(400).send({ errors: ['Invalid token user'] });
            }
        });
    }
    validateJWTNeeded(req, res, next) {
        if (req.headers['authorization']) {
            try {
                const authorization = req.headers['authorization'].split(' ');
                if (authorization[0] !== 'Bearer')
                    return res.status(401).send({ errors: ['You are not authorized'] });
                else {
                    res.locals.jwt = jsonwebtoken_1.default.verify(authorization[1], config_1.GLOBAL_CONFIG.JWT_SECRET); //as Jwt;
                    next();
                }
            }
            catch (err) {
                return res.status(403).send({ errors: [err] });
            }
        }
        else {
            return res.status(401).send({ errors: ['You are not authorized'] });
        }
    }
}
exports.default = new JwtMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0Lm1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21tb24vbWlkZGxld2FyZXMvand0Lm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxnRUFBK0I7QUFDL0IsMENBQThDO0FBQzlDLCtFQUEyRDtBQUUzRCxNQUFNLGFBQWE7SUFFVCxpQkFBaUIsQ0FBRSxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1lBQzVGLE1BQU0sSUFBSSxHQUFRLE1BQU0sa0JBQVksQ0FBQywwQkFBMEIsQ0FBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUUsQ0FBQztZQUN4RixJQUFJLElBQUksRUFBRTtnQkFDTixHQUFHLENBQUMsTUFBTSxHQUFHO29CQUNULE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRztvQkFDaEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2lCQUNwQixDQUFDO2dCQUNGLElBQUksRUFBRSxDQUFDO2FBQ1Y7aUJBQU07Z0JBQ0gsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ25FO1FBQ0wsQ0FBQztLQUFBO0lBRUQsaUJBQWlCLENBQUUsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCO1FBQ3RGLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUM5QixJQUFJO2dCQUNBLE1BQU0sYUFBYSxHQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMxRSxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRO29CQUM3QixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsd0JBQXdCLENBQUMsRUFBRSxDQUFFLENBQUM7cUJBQ3JFO29CQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLHNCQUFHLENBQUMsTUFBTSxDQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxzQkFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFBLENBQUMsU0FBUztvQkFDbEYsSUFBSSxFQUFFLENBQUM7aUJBQ1Y7YUFDSjtZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNWLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDbEQ7U0FDSjthQUFNO1lBQ0gsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLHdCQUF3QixDQUFDLEVBQUUsQ0FBRSxDQUFDO1NBQ3pFO0lBQ0wsQ0FBQztDQUNKO0FBRUQsa0JBQWUsSUFBSSxhQUFhLEVBQUUsQ0FBQyJ9