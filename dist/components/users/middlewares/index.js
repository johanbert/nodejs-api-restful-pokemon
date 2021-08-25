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
const argon2_1 = __importDefault(require("argon2"));
const services_1 = __importDefault(require("../services"));
const debug_1 = __importDefault(require("debug"));
const log = debug_1.default('app:user-middleware');
class UsersMiddleware {
    validateRequiredUserBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.body || !req.body.email || !req.body.password) {
                res.status(400).send({ errors: ['Missing required fields: email and password'] });
            }
            else {
                next();
            }
        });
    }
    validateEmailFormat(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regExp.test(String(req.body.email).toLowerCase())) {
                res.status(400).send({ errors: ['Email format incorrect, is not valid'] });
            }
            else {
                next();
            }
        });
    }
    validatePassword(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const alloweds = {
                minChars: "10",
                maxChars: "",
                uppers: "A-Z",
                lowers: "a-z",
                specials: "!@#?\\]"
            };
            let regExp = new RegExp(`(?=^.{${alloweds.minChars},${alloweds.maxChars}}$)(?=.*[${alloweds.lowers}])(?=.*[${alloweds.uppers}])(?=.*[${alloweds.specials}])`);
            if (!regExp.test(String(req.body.password))) {
                res.status(400).send({ errors: [`Password is not valid, must be contains at least ${alloweds.minChars} characters, one lowercase letter, one uppercase letter and one of the following characters: ! @ # ? ]`] });
            }
            else {
                next();
            }
        });
    }
    validateEmailDoesntExist(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = yield services_1.default.getUserByEmail(req.body.email);
            if (email) {
                res.status(400).send({ errors: ['User email already exists'] });
            }
            else {
                next();
            }
        });
    }
    validateEmailExist(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield services_1.default.getUserByEmail(req.body.email);
            if (!user) {
                res.status(400).send({ errors: ['User email doesnt exists'] });
            }
            else {
                next();
            }
        });
    }
    validateEmailAndPassword(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield services_1.default.getUserByEmailWithPassword(req.body.email);
            const passwordValidate = yield argon2_1.default.verify(user.password, req.body.password);
            if (user && passwordValidate) {
                req.body.email = user.email;
                next();
            }
            else {
                res.status(400).send({ errors: ['Invalid email or password, doesnt match'] });
            }
        });
    }
    validateUserExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield services_1.default.readById(req.params.userId);
            if (user) {
                next();
            }
            else {
                res.status(404).send({
                    errors: [`User ${req.params.userId} not found`],
                });
            }
        });
    }
}
;
exports.default = new UsersMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jb21wb25lbnRzL3VzZXJzL21pZGRsZXdhcmVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esb0RBQTRCO0FBQzVCLDJEQUFzQztBQUN0QyxrREFBMEI7QUFDMUIsTUFBTSxHQUFHLEdBQW9CLGVBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBRTFELE1BQU0sZUFBZTtJQUNYLDhCQUE4QixDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7WUFDeEcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNwRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLDZDQUE2QyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3JGO2lCQUFNO2dCQUNILElBQUksRUFBRSxDQUFDO2FBQ1Y7UUFDTCxDQUFDO0tBQUE7SUFFSyxtQkFBbUIsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1lBQzdGLE1BQU0sTUFBTSxHQUFHLHVKQUF1SixDQUFDO1lBQ3ZLLElBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFFLEVBQUc7Z0JBQ3hELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsc0NBQXNDLENBQUMsRUFBQyxDQUFDLENBQUM7YUFDN0U7aUJBQU07Z0JBQ0gsSUFBSSxFQUFFLENBQUM7YUFDVjtRQUNMLENBQUM7S0FBQTtJQUVLLGdCQUFnQixD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