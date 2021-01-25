
export const getGifs = async(category) => {
    const api_key = 'api_key=lN74ee1nV4Sqa8qgh1j70yPTp1uDWaxQ';
    const endpoint = 'https://api.giphy.com/v1/gifs/search';
    // el encodeURI quita espacios y formatea para que sea valido en el llamado
    const url = `${endpoint}?q=${encodeURI(category)}&limit=12&${api_key}`;
    const response = await fetch(url);
    const {data} = await response.json();
    
    const gifs = data.map(img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}