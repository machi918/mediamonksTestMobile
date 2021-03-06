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
/**
 * @description API call to fetch allPhotos
 * @returns Response fetch containing all the Photos
 */
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
};

export const allPhotosFromAlbum = async (data) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }
    try {
        const response = await fetch(apiURL+`photos?albumId=${data}`,options);
        return response
    } 
    catch (error) {
        console.error(error)
    }
};
//-------------------------------------------------------

//---------------Users-----------------------------------
/**
 * @description API call to fetch allUsers
 * @returns Response fetch containing all the Users
 */
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
