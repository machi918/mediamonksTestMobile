import React from 'react';
import { SafeAreaView, Text, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';

import styles from './Styles';
import colors from '../../constants/colors';

//Hooks react redux
import { useDispatch, useSelector } from 'react-redux';

const {height, width} = Dimensions.get('window');


const Album = ({navigation, route}) => {

    const { title, idAlbum } = route.params;

    // declaramos displach para llamar a la acción o acciones
    const dispatch = useDispatch();

    //Get the state from store
    const photosState = useSelector(store => store.albums);
    const isDarkMode = useSelector(store => store.ui.isDarkMode );

    const handleClickPhoto = (item) => {
        navigation.navigate('PhotoPage', {title: item.item.title, id: item.item.id, url: item.item.url, thumbnailUrl: item.item.thumbnailUrl})
    };

    return(
        <SafeAreaView style={[styles.container, isDarkMode ? {backgroundColor: colors.primaryDark} : {backgroundColor: colors.primary}]}>
            <Text style={{color: 'black'}}>Album: {title} </Text>
            <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={photosState.photosList.filter(item => item.albumId == idAlbum)}
            numColumns={3}
            contentContainerStyle={{alignItems: 'center'}}
            renderItem={item => {
                return (
                    <TouchableOpacity onPress={()=> handleClickPhoto(item)} style={{margin: width*0.005}}>
                        <Image source={{uri: item.item.thumbnailUrl}} style={{resizeMode: 'contain', width: width*0.32,height: width*0.32}} onProgress={() => <Text>Cargando....</Text>}/>
                    </TouchableOpacity>
                )
            }}
            
            />
        </SafeAreaView>
    );
};

export default Album;