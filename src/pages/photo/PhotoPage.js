import React, { useState, useRef, useEffect } from 'react';
import { Text, Image, TouchableWithoutFeedback, TouchableOpacity,Animated, View } from 'react-native';

import styles from './Styles';
import colors from '../../constants/colors';

//Hooks react redux
import { useDispatch, useSelector } from 'react-redux';


const PhotoPage = ({navigation, route}) => {
    const {title, thumbnailUrl, url, id} = route.params;

    //Get the state from store
    const isDarkMode = useSelector(store => store.ui.isDarkMode );


    const fadeAnim = useRef(new Animated.Value(1)).current; //Opacity reference Animation
    const fadeBackground = useRef(new Animated.Value(1)).current; //Background Color w/ interpolation reference Animation

    const [topLayer,setTopLayer] = useState(true); //If true, header's opacity is 1
    const [topBackLayer,setBackLayer] = useState(true); //If true, background page color, defaults to UI theme.
    const [touched, setTouched] = useState(true); //If true, back button is available

    useEffect(() => {
        
        //The first time the user enters, after 1 second, it hides the top layer.
        const timer = setInterval(()=>{
            handleTouchDisplay();
            clearInterval(timer);
            setTouched(false);
        },1250);

        return () => {
            clearInterval(timer);
        }
    }, []);

    /**
     * @description Handles the animations variables.
     */
    const handleTouchDisplay = ()=>{
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: topLayer ? 0 : 1,
                duration: 250,
                useNativeDriver: true
            }).start(({ finished })=>{
            }),
            Animated.timing(fadeBackground, {
                toValue: topBackLayer ? 0 : 1,
                duration: 250,
                useNativeDriver: false
            }).start(({ finished })=>{
            }),
        ]).start(()=>{
            setTopLayer(!topLayer);
            setTouched(!touched);
            setBackLayer(!topBackLayer);
        });
    }

    //BackgroundColor of the page interpolation---------
    const boxInterpolation =  fadeBackground.interpolate({
        inputRange: [0, 1],
        outputRange:[ colors.black, colors.white]
      })

    const animatedStyle = {
        backgroundColor: boxInterpolation
    }
    //--------------------------------------------------

    const handleGoBack = () => {
        if(touched){
            navigation.pop();
        }
    }

    //UI Renders------------------------------------------------------

    const topLayerRender = () => {
        return(
            <Animated.View
            style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 100, opacity: fadeAnim}}
            >
            <View style={[styles.header, isDarkMode ? {backgroundColor: colors.primaryDark}: {backgroundColor: colors.transparentBlack}]}>
                <TouchableOpacity style={styles.backButton} onPress={()=>handleGoBack()}>
                    <Text>BACK</Text>
                </TouchableOpacity>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </Animated.View>
        )
    };
    
    return(
        <TouchableWithoutFeedback onPress={()=>handleTouchDisplay()} style={{backgroundColor: 'red', width:'100%', height: '100%'}}>
            <Animated.View style={[{...styles.container, ...animatedStyle}, isDarkMode ? {backgroundColor: colors.primaryDark}: {}]}>
                    <View>
                        <Image source={{uri: url}} style={styles.img} />
                    </View>
                    {topLayerRender()}
            </Animated.View>
        </TouchableWithoutFeedback>
    );

};

export default PhotoPage;