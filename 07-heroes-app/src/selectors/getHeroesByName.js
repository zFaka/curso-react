import {heroes} from '../data/heroes';

const getHeroeByName = (name='') => {
  if(name===''){return []}
  name = name.toLocaleLowerCase()
  return heroes.filter(
    hero => hero.superhero.toLocaleLowerCase()
    .includes(name))}

export default getHeroeByName;
