export const generateImageUrl = (url) => {
    if(url.includes("https://")){
        return url;
    } else{
        return import.meta.env.VITE_API_BASE_URL + url;
    }
}