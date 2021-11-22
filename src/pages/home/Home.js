import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, Text, FlatList, View, TouchableOpacity, Dimensions, Button } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './Styles';
import Loading from '../../components/loading/Loading';

import SingleAlbum from '../../components/singleAlbum/SingleAlbum';

//Hooks react redux
import { useDispatch, useSelector } from 'react-redux';
//Actions
import { fetchAlbums } from '../../redux/ducks/albumsDucks';


const {height, width} = Dimensions.get('window');

const Home = ({navigation}) => {
    
    const carouselRef = useRef(null);

    // declaramos displach para llamar a la acción o acciones
    const dispatch = useDispatch();

    //Get the state from store
    const albumsState = useSelector(store => store.albums);
    const albumsStateList= useSelector(store => store.albums.albumsList);
    const photosStateList= useSelector(store => store.albums.photosList);
    
    useEffect(() => {
        const fetch = async () => {
            await dispatch(fetchAlbums());
        };
        fetch();
        console.log('USEEFFECT DE HOME');
    }, [])

    const handleClick = async () => {
        try {
            await AsyncStorage.removeItem('albums');
            await AsyncStorage.removeItem('photos');
          } catch(e) {
            // remove error
            console.log('ME ROMPI EN HOME');
          }
    }

    return(
        <SafeAreaView style={styles.container}>
            {
                albumsState.isLoading ? <Loading/> : 
                <View style={{height: '100%', width: '100%'}}>
                    <Button title={'asdasdasdas'} onPress={() => handleClick()}/>

                    <Text style={{marginTop: 15, marginHorizontal: 10, color: 'black'}}>My First 5 Albums</Text>
                    <View style={{width: '100%', height: 225, alignItems: 'center', justifyContent: 'center'}}>
                        <Carousel
                        ref={carouselRef}
                        layout={'default'}
                        data={albumsStateList.slice(0,5)}
                        sliderWidth={width}
                        itemWidth = {width*0.8}
                        renderItem={(item) => 
                            <TouchableOpacity onPress={() => navigation.navigate('Album', { title: item.item.title, idAlbum: item.item.id })} style={styles.albumComponentMain}>
                                        <SingleAlbum title={item.item.title} src={photosStateList.filter(itemList => itemList.albumId == item.item.id)[0].thumbnailUrl}/>
                            </TouchableOpacity>
                        }
                        />
                    </View>

                    <Text style={{marginBottom: 5, marginHorizontal: 10, color: 'black'}}>All Albums</Text>

                    <FlatList 
                    style={{height: '70%'}}
                    data={albumsStateList.slice(5)}

                    numColumns={2}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{ alignItems:'center' }}
                    columnWrapperStyle={{flexWrap: 'wrap'}}
                    renderItem={item => 
                            <TouchableOpacity onPress={() => navigation.navigate('Album', { title: item.item.title, idAlbum: item.item.id })} style={styles.albumComponent}>
                                <SingleAlbum title={item.item.title} src={photosStateList.filter(itemList => itemList.albumId == item.item.id)[0].thumbnailUrl} />
                            </TouchableOpacity>
                    }
                    />

                </View>
            }
        </SafeAreaView>
    );

};

export default Home;