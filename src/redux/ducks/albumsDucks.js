import { getAllAlbums } from "../../controllers/AlbumsController";

//Constants
const initialData = {

    albumsList: [],
    isLoading: false

};

//----------------------------------------------------


//Types
const GET_ALBUM_SUCCESS = 'GET_ALBUM_SUCCESS';
const GET_ALBUM_LOADING = 'GET_ALBUM_LOADING';
//----------------------------------------------------

//Reducer
export default function albumsReducer(state = initialData, action){
    switch (action.type) {
        case GET_ALBUM_SUCCESS:
            return {...state, albumsList: action.payload, isLoading: action.isLoading};
        case GET_ALBUM_LOADING:
            return {...state, isLoading: action.isLoading};
        default:
            return state;
    };
};
//----------------------------------------------------
            
//Actions
export const fetchAlbums = () => async (dispatch, getState) => {

    console.log('Into fetchAlbums ACTION');
    dispatch({type: GET_ALBUM_LOADING, isLoading: true})
    try {

        await getAllAlbums().then(data => {
            dispatch({type: GET_ALBUM_SUCCESS, payload: data, isLoading: false})
        })
        
    } catch (error) {
        console.log(error);
    } finally{
        dispatch({type: GET_ALBUM_LOADING, isLoading: false})
    }
};

   
//----------------------------------------------------










