import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

//Reducer imports
import albumsReducer from '../ducks/albumsDucks';

//Creating the rootReducer
const rootReducer = combineReducers({

    albums : albumsReducer

});

//Creating the store
export default function generateStore(){
    const store = createStore(rootReducer, applyMiddleware(thunk));
    return store
};