import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './Styles';

const SingleAlbum = ({title, username, length, src, isTop}) => {
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