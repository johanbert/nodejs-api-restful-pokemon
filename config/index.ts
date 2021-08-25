export const serverConfig = {
    bodyparser:{extended:true},
    cors:{ origin:true,credentials:true }
};

export const GLOBAL_CONFIG = {
  SERVER_PORT: Number( process.env.SERVER_PORT ) || 3000,
  JWT_SECRET : process.env.JWT_SECRET || '|I|am|A|Complex|Secret|',
  JWT_LIFETIME : Number(process.env.JWT_LIFETIME) || 60 * 1 // 1 minutes
};

export const DBS = {
  MONGODB:{
    HOST: process.env.DBS_MONGODB_HOST || 'mongodb',
    SERVER: process.env.DBS_MONGODB_SERVER || 'localhost',
    PORT: process.env.DBS_MONGODB_PORT || '27017',
    NAME : process.env.DBS_MONGODB_NAME || 'test_57blocks',
    // COLLECTIONS:{
    //   USERS: 'users',
    //   POKEMONS: 'pokemons',
    //   LIKES: 'likes'
    // }
  }
}