import React from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import styles from './Styles';

const SingleAlbum = ({title, username, length, src}) => {
    return(
        <ImageBackground
        source={{uri :src }}
        style={{width: '100%', height: '100%'}}
        >
            <View style={{justifyContent: 'flex-end', width: '100%', height: '100%', padding: 10}}>
                <Text style={styles.title}>{title}</Text>
                <Text>asdasdasd</Text>
                <Text>22222</Text>
            </View>
        </ImageBackground>
    )
};

export default SingleAlbum;