import React from 'react';
import { View, Image, Text, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

const SinglePhoto = ({item}) => {

    return(

        <Image source={{uri: item.item.thumbnailUrl}} style={{resizeMode: 'contain', width: width*0.32,height: width*0.32}}/>

    )
};

export default SinglePhoto;