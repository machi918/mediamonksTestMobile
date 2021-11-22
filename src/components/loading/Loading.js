import React from 'react';
import { View, ActivityIndicator, Image } from 'react-native';

import styles from './Styles';
import colors from '../../constants/colors';

const Loading = ({uiDark}) => {
    return(
        <View style={[styles.container, uiDark ? {backgroundColor: colors.primaryDark} : {backgroundColor: colors.primary}]}>
            <Image source={require('../../assets/images/mmLogo.png')} style={[styles.imgLogo, uiDark ? {tintColor: colors.textColorDark} : {tintColor: colors.black}]} resizeMode={'contain'} />
            <ActivityIndicator size={'large'} color={uiDark ? colors.textColorDark : colors.black}/>
        </View>
    )
};

export default Loading;
