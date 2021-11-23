import { getAllPhotos, getPhotosAlbum } from "../../controllers/PhotosController";

/**
 * This is my first time using redux. Previously, I used to handle minimal user's Global Context
 * using React's API 'useContext (w/ Provider & Consumers)'. It is kwnown that it's not very useful with large and complex Apps.
 * 
 * Since the App's complexity is not very high. I opted to use Ducks methodolody.
 * Link: https://github.com/erikras/ducks-modular-redux#the-proposal
 * 
 * IMPORTANT: This particular Duck 'photosDucks' is not being used. I ran into a particular state handler problem.
 * Already tryed to Google this problem. I hope that, if a meeting with any feedback will be arranged, I could tell you the problem. 
 * 
*/

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