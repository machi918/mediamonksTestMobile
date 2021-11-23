/**
 * This is my first time using redux. Previously, I used to handle minimal user's Global Context
 * using React's API 'useContext (w/ Provider & Consumers)'. It is kwnown that it's not very useful with large and complex Apps.
 * 
 * Since the App's complexity is not very high. I opted to use Ducks methodolody.
 * Link: https://github.com/erikras/ducks-modular-redux#the-proposal
 * 
*/

//Constants
const initialData = {

    isDarkMode: false,

};

//----------------------------------------------------

//Types
const CHANGE_THEME_MODE = 'CHANGE_THEME_MODE';
//----------------------------------------------------

//Reducer
export default function uiReducer(state = initialData, action){
    switch (action.type) {
        case CHANGE_THEME_MODE:
            return {...state, isDarkMode: action.payload};
        default:
            return state;
    };
};
//----------------------------------------------------
            
//Actions
export const darkTheme = (themeMode) => async (dispatch,getState) => {
    if(themeMode == 'light'){
        dispatch({type: CHANGE_THEME_MODE, payload: false})
    }else{
        dispatch({type: CHANGE_THEME_MODE, payload: true})
    }
};