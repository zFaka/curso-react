
export const getGifs = async(category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=3&api_key=b8c7QxDu9Y0pzIJYkznZEl8H0h7e7KvY`;
  const resp = await fetch(url);
  const {data} = await resp.json();

  const allGifData = data.map(gifd => {
    return {
      id: gifd.id, 
      title: gifd.title, 
      url: gifd.images?.downsized_medium.url
    }
  });
  return allGifData;
}
