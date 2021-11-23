import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

//Reducer imports
import albumsReducer from '../ducks/albumsDucks';
import photosReducer from '../ducks/photosDucks';
import uiReducer from '../ducks/uiDucks';

//Creating the rootReducer
const rootReducer = combineReducers({

    albums : albumsReducer,
    photos: photosReducer, //Deprecated, see photoDucks & ReadMe files
    ui: uiReducer,

});

//Creating the store
export default function generateStore(){
    const store = createStore(rootReducer, applyMiddleware(thunk));
    return store
};