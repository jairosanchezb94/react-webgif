export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=25&api_key=l1hs2qFu6MTU7lunYuCcasqN0hJVrOrr`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_large.url,
        }
    });

    return gifs;
  }