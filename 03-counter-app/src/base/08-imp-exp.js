// import { heroes } from './data/heroes';
// import { heroes } from './data/heroes';
// import heroes, { owners } from '../data/heroes';
import fromHeroes from '../data/heroes';

export const getHeroeById = (id) => fromHeroes.find( (jsonheroe) => jsonheroe.id === id );

// find?, filter
export const getHeroesByOwner = (owner) => fromHeroes.filter( (jsonheroe) => jsonheroe.owner === owner );
