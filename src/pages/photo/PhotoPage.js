import React from 'react';
import { SafeAreaView, Text, Button, Image } from 'react-native';

import styles from './Styles';


const PhotoPage = ({navigation, route}) => {

    const {title, thumbnailUrl, url, id} = route.params;

    return(
        <SafeAreaView>
            <Text>PhotoPage: {title} </Text>
            <Image source={{uri: url}} style={{minWidth:'100%', minHeight: 600, resizeMode:'contain'}} />
            {/* <Button onPress={()=> navigation.navigate('Album')} title={"Navegar ALBUM"}/> */}
        </SafeAreaView>
    );

};

export default PhotoPage;