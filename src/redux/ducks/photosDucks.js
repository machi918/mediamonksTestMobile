import { getAllPhotos, getPhotosAlbum } from "../../controllers/PhotosController";

//Constants
const initialPhotoData = {

    photosList: [],
    isLoading: false,
    fetched: false

};

//----------------------------------------------------


//Types
const GET_PHOTOS_SUCCESS = 'GET_ALBUM_SUCCESS';
const GET_PHOTOS_LOADING = 'GET_ALBUM_LOADING';
//----------------------------------------------------

//Reducer
export default function photosReducer(state = initialPhotoData, action){
    switch (action.type) {
        case GET_PHOTOS_SUCCESS:
            return {...state, photosList: action.payload, isLoading: action.isLoading, fetched: action.fetched};
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
            dispatch({type: GET_PHOTOS_SUCCESS, payload: data, isLoading: false, fetched: true})
        })
        
    } catch (error) {
        console.log(error);
    } finally{
        dispatch({type: GET_PHOTOS_LOADING, isLoading: false})
    }
};

export const fetchAllPhotos = () => async (dispatch, getState) => {

    dispatch({type: GET_PHOTOS_LOADING, isLoading: true})
    
    if(!getState().photos.fetched){
        try {
            console.log('Into fetchAllPhotos ACTION');

            await getAllPhotos().then(data => {
                dispatch({type: GET_PHOTOS_SUCCESS, payload: data, isLoading: false, fetched: true})
            })
            
        } catch (error) {
            console.log(error);
        } finally{
            dispatch({type: GET_PHOTOS_LOADING, isLoading: false})
        }
    }
};

   
//----------------------------------------------------