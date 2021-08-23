export interface CreatePokemonDto {
    name: string,
    level: number,
    type: string,
    userId: number,
    likes: number,
    publicAccess: boolean
}