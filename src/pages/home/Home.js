import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, Text, Button, FlatList, ActivityIndicator, View, TouchableOpacity, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles from './Styles';

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
    // const albumsState = useSelector(store => store.albums);
    // const albumsListState = useSelector(store => store.albums.albumsList);
    // const albumsListLoading = useSelector(store => store.albums.isLoading);
    // const asd = useSelector(store => store);


    // console.log('ITEMS EN ALBUM LISTA: ' + asd.albums.albumsList.length);
    // console.log('ITEMS EN PHOTOS LISTA: ' + asd.photos.photosList.length);
    // console.log(asd);

    const albumsState = useSelector(store => store.albums);
    // const albumsState = useSelector(store => store.albums);
    const albumsStateList= useSelector(store => store.albums.albumsList);
    const photosStateList= useSelector(store => store.albums.photosList);


    // console.log('Rendered: '+albumsStateList.length);
    // console.log('RenderedAAAA: '+photosStateList.length);
    


    
    useEffect(() => {
        const fetch = async () => {
            await dispatch(fetchAlbums());
            // setasd(albumsListState);
        };
        fetch();
        console.log('USEEFFECT DE HOME');
    }, [])



    
    return(
        <SafeAreaView style={styles.container}>
            {
                albumsState.isLoading ? <ActivityIndicator size={'large'}/> : 
                <View style={{height: '100%', width: '100%'}}>

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
                                <SingleAlbum title={item.item.title} src={photosStateList.filter(itemList => itemList.albumId == item.item.id)[0].thumbnailUrl}/>
                            </TouchableOpacity>
                    }
                    />

                </View>
            }
        </SafeAreaView>
    );

};

export default Home;