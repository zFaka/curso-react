/*
 *const promesa = new Promise(resolve => 
 *    resolve('https://google.com'));
 *promesa().then(console.log);
 */

const getImage = async() => {
    try {
        const apiKey = 'b8c7QxDu9Y0pzIJYkznZEl8H0h7e7KvY';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url} =  data.images.original;
        const img = document.createElement('img'); 
        img.src = url;
    } catch (error) {
        console.error(error);
    }
}
getImage();
