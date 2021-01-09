import {heroes} from "../data/heroes";

const getHeroById = (id) => {


  // hero.id es la extraccion de publisher
  // id solo es lo recivido en la funcion

  return heroes.filter(
    hero => hero.id === id);
}

export default getHeroById;
