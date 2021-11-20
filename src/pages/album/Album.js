import React, { useEffect } from 'react';
import { SafeAreaView, Text, Button, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';

import styles from './Styles';

//Hooks react redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotosAlbum, fetchAllPhotos } from '../../redux/ducks/photosDucks';

const {height, width} = Dimensions.get('window');


const Album = ({navigation, route}) => {

    const { title, idAlbum } = route.params;

    // declaramos displach para llamar a la acción o acciones
    const dispatch = useDispatch();

    const photosState = useSelector(store => store.photos);

    const handleOnPressFetch = async () => {
        console.log('Botón presionado');
    }

    useEffect(() => {
        const fetch = async () => {
            await dispatch(fetchAllPhotos());
        }

        fetch();

    }, [idAlbum])

    return(
        <SafeAreaView>
            <Text>Album: {title} </Text>
            <Text>ID: {idAlbum} </Text>
            <FlatList
            data={photosState.photosList.filter(item => item.albumId == idAlbum)}
            numColumns={3}
            contentContainerStyle={{alignItems: 'center'}}
            renderItem={item => {
                return (

                    <TouchableOpacity onPress={()=> navigation.navigate('PhotoPage', {title: item.item.title, id: item.item.id, url: item.item.url, thumbnailUrl: item.item.thumbnailUrl})}
                    
                    style={{margin: width*0.005}}
                    >
                        <Image source={{uri: item.item.thumbnailUrl}} style={{resizeMode: 'contain', width: width*0.32,height: width*0.32}} onProgress={() => <Text>Cargando....</Text>}/>
                    </TouchableOpacity>
                    )
            }}
            
            />
        </SafeAreaView>
    );

};

export default Album;