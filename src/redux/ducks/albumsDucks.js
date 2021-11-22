import AsyncStorage from '@react-native-async-storage/async-storage';

import { getAllAlbums } from "../../controllers/AlbumsController";
import { getAllPhotos } from "../../controllers/PhotosController";

//Constants
const initialData = {

    albumsList: [],
    isLoading: false,
    photosList: []

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
            return {...state, albumsList: action.payload, isLoading: action.isLoading, photosList: action.lista};
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
    
        const jsonValueAlbums = await AsyncStorage.getItem('albums');
        if(jsonValueAlbums != null){
            console.log('STORAGE DE ALBUM CON COSAS');
            const jsonValuePhotos = await AsyncStorage.getItem('photos');
            console.log('STORAGE DE PHOTOS CON COSAS');
            if(jsonValuePhotos != null){
                dispatch({type: GET_ALBUM_SUCCESS, payload: await JSON.parse(jsonValueAlbums), isLoading: false, lista: await JSON.parse(jsonValuePhotos)});
                return
            }

        }else{
            console.log('STORAGE DE ALBUM VACIO');
        }
        
        const res = await getAllAlbums();
        const res2 = await getAllPhotos();
        
        if(res != undefined){
            if(res2 != undefined){
                try {
                    await AsyncStorage.setItem('albums', JSON.stringify(res));
                    await AsyncStorage.setItem('photos', JSON.stringify(res2));

                    dispatch({type: GET_ALBUM_SUCCESS, payload: res, isLoading: false, lista: res2})
                } catch (e) {
                    console.log('ERROR @ SET ASYNC ITEMS');
                }
            }
        }

    } catch (error) {
        console.log(error);
    } finally{
        dispatch({type: GET_ALBUM_LOADING, isLoading: false})
    }
};
   
//----------------------------------------------------