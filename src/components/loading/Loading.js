import React from 'react';
import { View, ActivityIndicator, Image } from 'react-native';

import styles from './Styles';
import colors from '../../constants/colors';

/**
 * 
 * @param {Boolean} uiDark Boolean. DarkMode enabled. 
 * @description Loading Component. Shown when data is being retrieved.
 */
const Loading = ({uiDark}) => {
    return(
        <View style={[styles.container, uiDark ? {backgroundColor: colors.primaryDark} : {backgroundColor: colors.primary}]}>
            <Image source={require('../../assets/images/mmLogo.png')} style={[styles.imgLogo, uiDark ? {tintColor: colors.textColorDark} : {tintColor: colors.secondary}]} resizeMode={'contain'} />
            <ActivityIndicator size={'large'} color={uiDark ? colors.textColorDark : colors.secondary}/>
        </View>
    )
};

export default Loading;