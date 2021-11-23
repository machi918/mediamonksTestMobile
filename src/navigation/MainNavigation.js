import React, { useEffect, useCallback } from "react";
import { Appearance } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/home/Home";
import Album from "../pages/album/Album";
import PhotoPage from "../pages/photo/PhotoPage";


//Hooks react redux
import { useDispatch, useSelector } from 'react-redux';
//Actions
import { darkTheme } from "../redux/ducks/uiDucks";

const MainNavigation = ({navigation}) => {

    const Stack = createNativeStackNavigator();

    // declaramos displach para llamar a la acción o acciones
    const dispatch = useDispatch();

    useEffect(() => {
        Appearance.addChangeListener(themeChangeListener);
        const initialTheme = async () => {
            await dispatch(darkTheme(Appearance.getColorScheme()))
        }
        initialTheme()
        return () => {
            Appearance.addChangeListener().remove()
        }
    }, []);

    const themeChangeListener = useCallback(() => {
        dispatch(darkTheme(Appearance.getColorScheme()))
    }, []);

    return(
        <NavigationContainer>

            <Stack.Navigator initialRouteName={'Home'} screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home}  />
                <Stack.Screen name="Album" component={Album}  />
                <Stack.Screen name="PhotoPage" component={PhotoPage} />
            </Stack.Navigator>
        
        </NavigationContainer>
    )

};

export default MainNavigation;