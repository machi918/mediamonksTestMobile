import { allPhotos, allPhotosFromAlbum } from "../services/Apiroutes";

export const getAllPhotos = async () => {
    const response = await allPhotos();
    if(response.status === 200){
        const json = await response.json();
        return json;
    }else{
        console.log('Response code @ getAllPhotos: ' + response.status);
        return response.status
    }
};

export const getPhotosAlbum = async (data) => {
    const response = await allPhotosFromAlbum(data);
    if(response.status === 200){
        const json = await response.json();
        return json;
    }else{
        console.log('Response code @ getPhotosAlbum: ' + response.status);
        return response.status
    }
};