import { PutPokemonDto } from './put.dto';

export interface PatchPokemonDto extends Partial<PutPokemonDto> {}
