import React from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';

import styles from './Styles';

const Loading = () => {

    return(

        <View style={styles.container}>
            <Image source={require('../../assets/images/mmLogo.png')} style={styles.imgLogo} resizeMode={'contain'} />
            <ActivityIndicator size={'large'} color={'black'}/>


        </View>

    )


};

export default Loading;
