"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const server_config_1 = __importDefault(require("./config/server.config"));
const routes_config_1 = __importDefault(require("./config/routes.config"));
server_config_1.default.start(routes_config_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzNCLDJFQUE0QztBQUM1QywyRUFBNEM7QUFFNUMsdUJBQU0sQ0FBQyxLQUFLLENBQUMsdUJBQU0sQ0FBQyxDQUFDIn0=