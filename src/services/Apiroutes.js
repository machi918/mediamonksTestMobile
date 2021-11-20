const apiURL = 'https://jsonplaceholder.typicode.com/';

//---------------Albums-----------------------------------
/**
 * @description API call to fetch allAlbums
 * @returns Response fetch containing all the Albums
 */
export const allAlbums = async () =>{
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }
    try {
        const response = await fetch(apiURL+'albums',options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}
//-------------------------------------------------------

//---------------Photos----------------------------------
export const allPhotos = async () =>{
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }
    try {
        const response = await fetch(apiURL+'photos',options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}
//-------------------------------------------------------

//---------------Users-----------------------------------
export const allUsers = async () =>{
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }
    try {
        const response = await fetch(apiURL+'users',options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
}
//-------------------------------------------------------
