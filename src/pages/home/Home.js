import React, { useEffect } from 'react';
import { SafeAreaView, Text, FlatList, View, TouchableOpacity, Dimensions, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './Styles';
import Carousel from '../../components/carousel/Carousel';
import colors from '../../constants/colors';
import Loading from '../../components/loading/Loading';
import SingleAlbum from '../../components/singleAlbum/SingleAlbum';

//Hooks react-redux & Actions
import { useDispatch, useSelector } from 'react-redux';
import { fetchAlbums } from '../../redux/ducks/albumsDucks';

const {height, width} = Dimensions.get('window');

const Home = ({navigation}) => {

    //Dispatch declared for action calling
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
            await AsyncStorage.removeItem('albums');
            await AsyncStorage.removeItem('photos');
            console.log('Storage limpiado');
        } catch(e) {
            // remove error
            console.log(e);
            console.log('HandleClick errer @ Home');
        }
    };

    const handleOnClickAlbum = (item) => {
        navigation.navigate('Album', { title: item.item.title, idAlbum: item.item.id });
    };

    //UI Renders------------------------------------------------------

    return(
        <SafeAreaView style={[styles.container, isDarkMode ? {backgroundColor: colors.primaryDark} : {backgroundColor: colors.primary}]}>
            {albumsState.isLoading ? <Loading uiDark={isDarkMode}/> : 

                <View style={{height: '100%', width: '100%'}}>
                    <Button title={'Reset Storage'} onPress={() => handleClick()}/>
                    <Text style={[styles.textAlbumTitle, isDarkMode ? {color:colors.textColorDark}:{}]}>My First 5 Albums</Text>

                    <View style={[styles.carrouselContainer, isDarkMode ? {backgroundColor: colors.primaryDark} : {backgroundColor: colors.primary}]}>
                        <Carousel 
                        navigation={navigation}
                        albumsData={albumsStateList.slice(0,5)}
                        />
                    </View>

                    <Text style={[styles.textAlbumTitle, isDarkMode ? {color:colors.textColorDark}:{}]}>All Albums</Text>

                    <FlatList 
                    style={{height: '70%'}}
                    data={albumsStateList.slice(5)}
                    initialNumToRender={25} //Performance boost on initial render
                    numColumns={2}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{ alignItems:'center' }}
                    columnWrapperStyle={{flexWrap: 'wrap'}}
                    renderItem={item => 
                        <TouchableOpacity onPress={() => handleOnClickAlbum(item)} style={styles.albumComponent}>
                            <SingleAlbum title={item.item.title} src={photosStateList.filter(itemList => itemList.albumId == item.item.id)[0].thumbnailUrl} isTop={false} />
                        </TouchableOpacity>
                    }
                    />
                </View>
            }
        </SafeAreaView>
    );

};

export default Home;