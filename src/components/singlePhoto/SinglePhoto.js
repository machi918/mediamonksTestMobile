import React from 'react';
import { Image, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

/**
 * @param {object} item Object containing the photo data.
 * @description SinglePhoto component. Renders a single image into AlbumPage list. 
 */
const SinglePhoto = ({item}) => {
    return(
        <Image source={{uri: item.item.thumbnailUrl}} style={{resizeMode: 'contain', width: width*0.32,height: width*0.32}}/>
    )
};

export default SinglePhoto;