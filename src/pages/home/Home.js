import React, { useEffect } from 'react';
import { SafeAreaView, Text, Button, FlatList, ActivityIndicator, View, TouchableOpacity } from 'react-native';
import styles from './Styles';

import SingleAlbum from '../../components/singleAlbum/SingleAlbum';

//Hooks react redux
import { useDispatch, useSelector } from 'react-redux';
//Actions
import { fetchAlbums } from '../../redux/ducks/albumsDucks';


const Home = ({navigation}) => {

    // declaramos displach para llamar a la acción o acciones
    const dispatch = useDispatch();

    //Get the state from store
    const albumsState = useSelector(store => store.albums);

    const handleOnPressFetch = async () => {
        console.log('Botón presionado');

        // await dispatch(fetchAlbums());
    }

    useEffect(() => {
        
        const fetch = async () => {
            await dispatch(fetchAlbums());

        };
        fetch();
    }, [])

    return(
        <SafeAreaView style={styles.container}>
            {
                albumsState.isLoading ? <ActivityIndicator size={'large'}/> : 
                <View>

            <FlatList 
            data={albumsState.albumsList}
            numColumns={2}
            contentContainerStyle={{alignItems:'center', backgroundColor:'green'}}
            columnWrapperStyle={{flexWrap: 'wrap'}}
            renderItem={item => {
                    
                    if(item.item.id < 5){
                        return(
                            <TouchableOpacity onPress={() => navigation.navigate('Album', { title: item.item.title, idAlbum: item.item.id })} style={styles.albumComponentMain}>
                                <SingleAlbum title={item.item.title}/>
                            </TouchableOpacity>
                        )
                    }else{

                        
                        //SACAR ELSE
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Album', { title: item.item.title, idAlbum: item.item.id })} style={styles.albumComponent}>
                                <SingleAlbum title={item.item.title}/>
                            </TouchableOpacity>
                        )
                    }
            }}
            />

            </View>
        }
        </SafeAreaView>
    );

};

export default Home;