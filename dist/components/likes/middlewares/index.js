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
Object.defineProperty(exports, "__esModule", { value: true });
class LikesMiddleware {
    validatePostRequiredFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const alloweds = {
                minChars: "1",
                maxChars: "25",
                uppers: "A-Z",
                lowers: "a-z",
                numbers: "0-9",
            };
            let regExp = new RegExp(`(?=^.{${alloweds.minChars},${alloweds.maxChars}}$)(?=.*[${alloweds.lowers}${alloweds.uppers}${alloweds.numbers}])`);
            if (req.body.pokemonId && !regExp.test(String(req.body.pokemonId)))
                res.status(400).send({ errors: [`pokemonId is not valid, can't be empty or white spaces`] });
            else
                next();
            // if (req.body.active !== true && req.body.active !== false) 
            //     res.status(400).send({ errors: [`active is not valid, must be boolean: true or false`] })
        });
    }
    filterPostBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const pokemonId = req.body.pokemonId;
            // active = req.body.active;
            req.body = {};
            if (pokemonId)
                req.body.pokemonId = pokemonId;
            // if (active)  req.body.active = active;        
            next();
        });
    }
    validatePublicAccess(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!res.locals.publicAccess)
                res.status(400).send({ errors: ['You cant give like or dislike to private pokemons'] });
            else
                next();
        });
    }
}
exports.default = new LikesMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jb21wb25lbnRzL2xpa2VzL21pZGRsZXdhcmVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR0EsTUFBTSxlQUFlO0lBRVgsMEJBQTBCLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCOztZQUNwRyxNQUFNLFFBQVEsR0FBRztnQkFDYixRQUFRLEVBQUcsR0FBRztnQkFDZCxRQUFRLEVBQUcsSUFBSTtnQkFDZixNQUFNLEVBQUUsS0FBSztnQkFDYixNQUFNLEVBQUUsS0FBSztnQkFDYixPQUFPLEVBQUUsS0FBSzthQUNqQixDQUFBO1lBQ0QsSUFBSSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsU0FBUyxRQUFRLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxRQUFRLFlBQVksUUFBUSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFBO1lBQzVJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFFO2dCQUNoRSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLHdEQUF3RCxDQUFDLEVBQUUsQ0FBQyxDQUFBOztnQkFFNUYsSUFBSSxFQUFFLENBQUM7WUFDWCw4REFBOEQ7WUFDOUQsZ0dBQWdHO1FBQ3BHLENBQUM7S0FBQTtJQUVLLG9CQUFvQixDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7WUFDOUYsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDN0IsNEJBQTRCO1lBQ3BDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2QsSUFBSSxTQUFTO2dCQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMvQyxpREFBaUQ7WUFDakQsSUFBSSxFQUFFLENBQUM7UUFDWCxDQUFDO0tBQUE7SUFFSyxvQkFBb0IsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1lBQzlGLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFlBQVk7Z0JBQ3hCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsbURBQW1ELENBQUMsRUFBRSxDQUFDLENBQUM7O2dCQUV4RixJQUFJLEVBQUUsQ0FBQTtRQUNkLENBQUM7S0FBQTtDQWFKO0FBQ0Qsa0JBQWUsSUFBSSxlQUFlLENBQUMifQ==