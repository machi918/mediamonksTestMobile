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