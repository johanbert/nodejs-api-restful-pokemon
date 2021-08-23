export const serverConfig = {
    bodyparser:{extended:true},
    cors:{ origin:true,credentials:true }
};

export const GLOBAL_CONFIG = {
  SERVER_PORT: Number( process.env.SERVER_PORT ) || 3000,
  JWT_SECRET : process.env.JWT_SECRET || '|I|am|A|Complex|Secret|',
  JWT_LIFETIME : Number(process.env.JWT_LIFETIME) || 60 * 1 // 1 minutes
};

export const DATABASES = {
  MONGODB:{
    SERVER: 'localhost' || process.env.DATABASES_MONGODB_SERVER,
    PORT: '27017' || process.env.DATABASES_MONGODB_PORT,
    NAME : 'test_57blocks' || process.env.DATABASES_MONGODB_NAME,
    // COLLECTIONS:{
    //   USERS: 'users',
    //   POKEMONS: 'pokemons',
    //   LIKES: 'likes'
    // }
  }
}