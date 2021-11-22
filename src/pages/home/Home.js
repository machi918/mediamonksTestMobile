import React, { useEffect, useRef } from 'react';
import { SafeAreaView, Text, FlatList, View, TouchableOpacity, Dimensions, Button } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import styles from './Styles';
import colors from '../../constants/colors';
import Loading from '../../components/loading/Loading';
import SingleAlbum from '../../components/singleAlbum/SingleAlbum';

//Hooks react redux & Actions
import { useDispatch, useSelector } from 'react-redux';
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
    const isDarkMode = useSelector(store => store.ui.isDarkMode );
    
    useEffect(() => {
        const fetch = async () => {
            await dispatch(fetchAlbums());
        };
        fetch();
    }, []);

    const handleClick = async () => {
        try {
            // await AsyncStorage.removeItem('albums');
            // await AsyncStorage.removeItem('photos');
        } catch(e) {
            // remove error
            console.log('ME ROMPI EN HOME');
        }
    }

    const handleOnClickAlbum = (item) => {
        navigation.navigate('Album', { title: item.item.title, idAlbum: item.item.id });
    }

    return(
        <SafeAreaView style={[styles.container, isDarkMode ? {backgroundColor: colors.primaryDark} : {backgroundColor: colors.primary}]}>
            {
                albumsState.isLoading ? <Loading uiDark={isDarkMode}/> : 

                <View style={{height: '100%', width: '100%'}}>
                    <Button title={'Reset Storage'} onPress={() => handleClick()}/>

                    <Text style={[styles.textAlbumTitle, isDarkMode ? {color:colors.textColorDark}:{}]}>My First 5 Albums</Text>
                    <View style={[styles.carrouselContainer, isDarkMode ? {backgroundColor: colors.primaryDark} : {backgroundColor: colors.primary}]}>
                        <Carousel
                        ref={carouselRef}
                        layout={'default'}
                        data={albumsStateList.slice(0,5)}
                        sliderWidth={width}
                        itemWidth = {width*0.8}
                        renderItem={(item) => 
                            <TouchableOpacity onPress={() => handleOnClickAlbum(item)} style={styles.albumComponentMain}>
                                <SingleAlbum title={item.item.title} src={photosStateList.filter(itemList => itemList.albumId == item.item.id)[0].thumbnailUrl}/>
                            </TouchableOpacity>
                        }
                        />
                    </View>

                    <Text style={[styles.textAlbumTitle, isDarkMode ? {color:colors.textColorDark}:{}]}>All Albums</Text>

                    <FlatList 
                    style={{height: '70%'}}
                    data={albumsStateList.slice(5)}

                    numColumns={2}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{ alignItems:'center' }}
                    columnWrapperStyle={{flexWrap: 'wrap'}}
                    renderItem={item => 
                        <TouchableOpacity onPress={() => handleOnClickAlbum(item)} style={styles.albumComponent}>
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