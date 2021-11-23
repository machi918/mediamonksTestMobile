import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './Styles';

/**
 * @param {} Atributes title: String, src: String, isTop: Boolean 
 * @description SingleAlbum component. Renders every album from HomePage. Receives title: String, src: String and isTop: boolean params.
 */
const SingleAlbum = ({title, src, isTop}) => {
    return(
        <ImageBackground
        source={{uri :src }}
        style={{width: '100%', height: '100%', justifyContent: 'flex-end'}}
        >
            <View style={styles.textContainer}>
                <Text style={[styles.title, isTop ? {fontSize: 20}:{fontSize: 14}]}>{title}</Text>
            </View>
        </ImageBackground>
    )
};

export default SingleAlbum;