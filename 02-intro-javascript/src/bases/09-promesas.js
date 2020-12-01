//import {getHeroById, getHeroByOwner} from './bases/08-imprt-xprt';
import {getHeroById} from './bases/08-imprt-xprt';

/*
 *const promesa = new Promise((resolve, reject)=>{
 *    setTimeout(()=>{
 *        const heroe = getHeroById(2);
 *        reject(heroe);
 *        const heroes = getHeroByOwner('DC');
 *        resolve(heroes);
 *        //resolve();
 *        //console.log('3sc');
 *    }, 1000);
 *});
 *
 *promesa.then((fromPromesa)=>{
 *    console.log(`el heroe ${fromPromesa}`);
 *})
 *    .catch(err=>console.log(err));
 */
const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const heroe = getHeroById(id);
            if (heroe) {
                resolve(heroe);
            } else {
                reject(`no se pudo encontrar ese heroe`);
            }
        }, 1000);
    });       
}
getHeroByIdAsync(4)
    .then(console.log)
    .catch(console.error);
