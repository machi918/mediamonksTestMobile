import { allAlbums } from "../services/Apiroutes";

/**
 * 
 * @description Gets all available albums. Returns status code if not succeed.
 */
export const getAllAlbums = async () => {
    const response = await allAlbums();
    if(response.status === 200){
        const json = await response.json();
        return json;
    }else{
        console.log('Response code @ getAllAlbums: ' + response.status);
        return response.status
    }
}