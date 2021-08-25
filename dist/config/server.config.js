"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const expressWinston = __importStar(require("express-winston"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const debug_config_1 = __importDefault(require("./debug.config"));
const server_common_1 = require("../common/classes/server.common");
const _1 = require("./");
const errorhandler_middleware_1 = __importDefault(require("../common/middlewares/errorhandler.middleware"));
const server = server_common_1.serverSingleton;
server.app.use(express_1.default.json());
server.app.use(express_1.default.urlencoded(_1.serverConfig.bodyparser));
server.app.use(cors_1.default(_1.serverConfig.cors));
server.app.use(helmet_1.default());
server.app.use(expressWinston.logger(debug_config_1.default));
server.app.use(expressWinston.errorLogger(debug_config_1.default));
server.app.use(errorhandler_middleware_1.default.badRequestHandler);
server.app.use(errorhandler_middleware_1.default.errorHandler);
server.app.get('/', (req, res) => {
    res.status(200).send(`:Server running at http://localhost:${_1.GLOBAL_CONFIG.SERVER_PORT}`);
});
exports.default = server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbmZpZy9zZXJ2ZXIuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUE4QjtBQUM5QixnRUFBa0Q7QUFDbEQsZ0RBQXdCO0FBQ3hCLG9EQUE0QjtBQUM1QixrRUFBa0Q7QUFDbEQsbUVBQXdFO0FBQ3hFLHlCQUErQztBQUMvQyw0R0FBbUY7QUFFbkYsTUFBTSxNQUFNLEdBQVUsK0JBQWUsQ0FBQztBQUV0QyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBRSxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFFLENBQUM7QUFDakMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUUsaUJBQU8sQ0FBQyxVQUFVLENBQUMsZUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFFLENBQUM7QUFDOUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUUsY0FBSSxDQUFDLGVBQVksQ0FBQyxJQUFJLENBQUMsQ0FBRSxDQUFDO0FBQzFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFFLGdCQUFNLEVBQUUsQ0FBRSxDQUFDO0FBQzNCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsc0JBQW9CLENBQUMsQ0FBRSxDQUFDO0FBQzlELE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFFLGNBQWMsQ0FBQyxXQUFXLENBQUMsc0JBQW9CLENBQUMsQ0FBRSxDQUFDO0FBQ25FLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFFLGlDQUFzQixDQUFDLGlCQUFpQixDQUFFLENBQUM7QUFDM0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUUsaUNBQXNCLENBQUMsWUFBWSxDQUFFLENBQUM7QUFFdEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7SUFDaEUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsdUNBQXVDLGdCQUFhLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztBQUM3RixDQUFDLENBQUMsQ0FBQztBQUVILGtCQUFlLE1BQU0sQ0FBQyJ9