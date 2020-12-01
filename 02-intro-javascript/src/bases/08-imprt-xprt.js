//import { heroes } from "./data/heroes";
// export const heroes = [ 
//import nombreQueQuieras, {owners} from "./data/heroes";
//import {heroes, owners} from "../data/heroes";
import {heroes} from "../data/heroes";

//console.log();

//console.log(heroes);

const getHeroById = (hid) => {
    return heroes.find((heroe) => heroe.id === hid);
    //return nombreQueQuieras.find((heroe) => heroe.id === hid);
}
//console.log(getHeroById(3));

const getHeroByOwner = (owner) => {
    return heroes.filter((heroe) => heroe.owner === owner);
    //return nombreQueQuieras.filter((heroe) => heroe.owner === owner);
}
//console.log(getHeroByOwner('DC'));
export {getHeroById, getHeroByOwner};
