import React, { useEffect, useCallback } from "react";
import { Appearance } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/home/Home";
import Album from "../pages/album/Album";
import PhotoPage from "../pages/photo/PhotoPage";

//Hooks react-redux & Actions
import { useDispatch, useSelector } from 'react-redux';
import { darkTheme } from "../redux/ducks/uiDucks";

const MainNavigation = ({navigation}) => {

    const Stack = createNativeStackNavigator();

    //Dispatch declared for action calling
    const dispatch = useDispatch();

    useEffect(() => {
        //Listening the phone's theme mode
        Appearance.addChangeListener(themeChangeListener);

        //First set-up into redux store
        const initialTheme = async () => {
            await dispatch(darkTheme(Appearance.getColorScheme()))
        }
        initialTheme()
        
        return () => {
            Appearance.addChangeListener().remove()
        }
    }, []);

    /**
     * @description EventListener handler. Calls the dispatch function when the listener detects a change.
     */
    const themeChangeListener = useCallback(() => {
        dispatch(darkTheme(Appearance.getColorScheme()))
    }, []);

    return(
        <NavigationContainer>

            <Stack.Navigator initialRouteName={'Home'} screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Album" component={Album} />
                <Stack.Screen name="PhotoPage" component={PhotoPage} />
            </Stack.Navigator>
        
        </NavigationContainer>
    )

};

export default MainNavigation;