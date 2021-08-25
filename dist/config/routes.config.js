"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_common_1 = require("../common/classes/server.common");
const v1_1 = __importDefault(require("../components/users/routes/v1"));
const v1_2 = require("../components/pokemons/routes/v1");
const v1_3 = require("../components/likes/routes/v1");
const server = server_common_1.serverSingleton;
const routes = [];
routes.push(new v1_1.default(server.app));
routes.push(new v1_2.PokemonsRoutes(server.app));
routes.push(new v1_3.LikesRoutes(server.app));
exports.default = routes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbmZpZy9yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUVBQXlFO0FBRXpFLHVFQUF3RDtBQUN4RCx5REFBa0U7QUFDbEUsc0RBQTREO0FBRTVELE1BQU0sTUFBTSxHQUFXLCtCQUFlLENBQUM7QUFDdkMsTUFBTSxNQUFNLEdBQXdCLEVBQUUsQ0FBQztBQUV2QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksWUFBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxtQkFBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxnQkFBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBRXpDLGtCQUFlLE1BQU0sQ0FBQyJ9