import {heroes} from "../data/heroes";

const getHeroesByPublisher = (publisher) => {


  const validPublisher = [
    'DC Comics', 
    'Marvel Comics'];



  if (!validPublisher.includes(publisher)){
    throw new Error(
      `Publisher ${publisher} is not correct`)}



  // hero.publisher es la extraccion de publisher
  // publisher solo es lo recivido en la funcion

  return heroes.filter(
    hero => hero.publisher === publisher);
}

export default getHeroesByPublisher;
