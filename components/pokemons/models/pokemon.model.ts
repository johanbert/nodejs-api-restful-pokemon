export const PokemonModel = {
    _id: String,
    name: String,
    level: Number,
    type: String,
    userId: String,
    likes: Number,
    publicAccess: Boolean // false=public, true=?private
}