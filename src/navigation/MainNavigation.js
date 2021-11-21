import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/home/Home";
import Album from "../pages/album/Album";
import PhotoPage from "../pages/photo/PhotoPage";


const MainNavigation = ({navigation}) => {

    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>

            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Album" component={Album} options={{ headerShown: true }} />
                <Stack.Screen name="PhotoPage" component={PhotoPage} options={{ headerShown: true }} />
            </Stack.Navigator>
        
        </NavigationContainer>

    )

};

export default MainNavigation;