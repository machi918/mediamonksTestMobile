import React from 'react';
import { SafeAreaView, Text, FlatList, Image, TouchableOpacity, Dimensions, View } from 'react-native';

import styles from './Styles';
import colors from '../../constants/colors';

//Hooks react-redux
import { useDispatch, useSelector } from 'react-redux';

const {height, width} = Dimensions.get('window');

/**
 * 
 * @description AlbumPage. Contains all the albums and they are displayed to the user.
 */
const Album = ({navigation, route}) => {
    const { title, idAlbum } = route.params;

    //Get the state from store
    const photosState = useSelector(store => store.albums);
    const isDarkMode = useSelector(store => store.ui.isDarkMode );

    /**
     * @param {object} item Photo Object
     * @description Navigates to the selected PhotoPage.
    */
    const handleClickPhoto = (item) => {
        navigation.navigate('PhotoPage', {title: item.item.title, id: item.item.id, url: item.item.url, thumbnailUrl: item.item.thumbnailUrl})
    };

    const handleGoBack = () => {
        navigation.pop();
    }

    //UI Renders------------------------------------------------------

    return(
        <SafeAreaView style={[styles.container, isDarkMode ? {backgroundColor: colors.primaryDark} : {backgroundColor: colors.primary}]}>

            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={()=>handleGoBack()}>
                    <Text>BACK</Text>
                    {/* HERE GOES THE ICON */}
                </TouchableOpacity>
                <Text style={styles.textHeader}>{title}</Text>
            </View>

            <FlatList
            ListHeaderComponent={()=><View style={{resizeMode: 'contain', width: width*0.2,height: width*0.2}}></View>}
            initialNumToRender={25} //Performance boost on initial render
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