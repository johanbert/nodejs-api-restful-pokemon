import { serverSingleton,Server } from "../common/classes/server.common";
import { RoutesCommon } from '../common/classes/routes.common';
import UsersRoutes from '../components/users/routes/v1';
import { PokemonsRoutes } from '../components/pokemons/routes/v1';
import { LikesRoutes } from '../components/likes/routes/v1';

const server: Server = serverSingleton;
const routes: Array<RoutesCommon> = [];

routes.push(new UsersRoutes(server.app));
routes.push(new PokemonsRoutes(server.app));
routes.push(new LikesRoutes(server.app));

export default routes;