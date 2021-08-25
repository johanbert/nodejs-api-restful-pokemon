"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverSingleton = exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const config_1 = require("../../config");
const debug_1 = __importDefault(require("debug"));
const debugLog = debug_1.default('app');
class Server {
    constructor() {
        this.app = express_1.default();
        this.port = config_1.GLOBAL_CONFIG.SERVER_PORT;
    }
    start(routes) {
        this.app.listen(this.port, () => {
            debugLog(`::Server running at http://localhost:${this.port}`);
            routes.forEach((route) => {
                debugLog(`Routes configured for: ${route.getName()}`);
            });
        });
    }
}
exports.Server = Server;
exports.serverSingleton = new Server();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmNvbW1vbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbW1vbi9jbGFzc2VzL3NlcnZlci5jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0RBQThCO0FBQzlCLHlDQUE2QztBQUU3QyxrREFBMEI7QUFFMUIsTUFBTSxRQUFRLEdBQW9CLGVBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQyxNQUFhLE1BQU07SUFJZjtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsaUJBQU8sRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsc0JBQWEsQ0FBQyxXQUFXLENBQUM7SUFDMUMsQ0FBQztJQUNELEtBQUssQ0FBRSxNQUEyQjtRQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUUsRUFBRTtZQUM1QixRQUFRLENBQUMsd0NBQXdDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzlELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFtQixFQUFFLEVBQUU7Z0JBQ25DLFFBQVEsQ0FBQywwQkFBMEIsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMxRCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBaEJELHdCQWdCQztBQUNZLFFBQUEsZUFBZSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUMifQ==