import { allPhotos } from "../services/Apiroutes";

export const getAllPhotos = async () => {
    const response = await allPhotos();
    if(response.status === 200){
        const json = await response.json();
        return json;
    }else{
        console.log('Response code @ getAllPhotos: ' + response.status);
        return response.status
    }
}