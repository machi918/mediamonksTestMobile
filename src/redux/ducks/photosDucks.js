import { getAllPhotos, getPhotosAlbum } from "../../controllers/PhotosController";

//Constants
const initialData = {

    photosList: [],
    isLoading: false

};

//----------------------------------------------------


//Types
const GET_PHOTOS_SUCCESS = 'GET_ALBUM_SUCCESS';
const GET_PHOTOS_LOADING = 'GET_ALBUM_LOADING';
//----------------------------------------------------

//Reducer
export default function photosReducer(state = initialData, action){
    switch (action.type) {
        case GET_PHOTOS_SUCCESS:
            return {...state, photosList: action.payload, isLoading: action.isLoading};
        case GET_PHOTOS_LOADING:
            return {...state, isLoading: action.isLoading};
        default:
            return state;
    };
};
//----------------------------------------------------
            
//Actions
export const fetchPhotosAlbum = (albumID) => async (dispatch, getState) => {

    console.log('Into fetchPhotosAlbum ACTION');
    dispatch({type: GET_PHOTOS_LOADING, isLoading: true})
    try {

        await getPhotosAlbum(albumID).then(data => {
            // console.log('DATA: ');
            // console.log(data);
            dispatch({type: GET_PHOTOS_SUCCESS, payload: data, isLoading: false})
        })
        
    } catch (error) {
        console.log(error);
    } finally{
        dispatch({type: GET_PHOTOS_LOADING, isLoading: false})
    }
};

export const fetchAllPhotos = () => async (dispatch, getState) => {

    console.log('Into fetchPhotosAlbum ACTION');
    dispatch({type: GET_PHOTOS_LOADING, isLoading: true})
    try {

        await getAllPhotos().then(data => {
            // console.log('DATA: ');
            // console.log(data);
            dispatch({type: GET_PHOTOS_SUCCESS, payload: data, isLoading: false})
        })
        
    } catch (error) {
        console.log(error);
    } finally{
        dispatch({type: GET_PHOTOS_LOADING, isLoading: false})
    }
};

   
//----------------------------------------------------