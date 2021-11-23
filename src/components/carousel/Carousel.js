import React, { useRef } from 'react';
import { Animated, View, TouchableOpacity, TouchableWithoutFeedback, Dimensions } from 'react-native';

import SingleAlbum from '../singleAlbum/SingleAlbum';
import styles from './Styles';
import sizes from '../../constants/sizes';

//Hooks react-redux & Actions
import { useDispatch, useSelector } from 'react-redux';

const {height, width} = Dimensions.get('window');

const Carousel = ({navigation, albumsData}) => {

    const xScroll = useRef(new Animated.Value(0)).current;
    
    const totalItemWidth = (width < sizes.screen_small_max_width ? sizes.mainSingleAlbum_small_width : sizes.mainSingleAlbum_regular_width) + 20; 
    // + 20 because of the margin added to both sides. (10+10).

    //Dummy Spacer. Makes the album centered.
    const SPACER_SIZE = (width - totalItemWidth) / 2;

    console.log(totalItemWidth);

    //Get the state from store
    const photosStateList= useSelector(store => store.albums.photosList);

    /**
     * @description //Adds two dummy albums to the array. One to the first position and the other one to the last position. 
     */
    const data = () => {
        if (albumsData != undefined) {
            return [
                { key: "left", id: "-1" },
                ...albumsData,
                { key: "right", id: "-2" },
            ];
        }
        return [];
    };

    const handleOnPress = (item) => {
        navigation.navigate('Album', { title: item.title, idAlbum: item.id });
    };

    return(
        <View>
            <Animated.FlatList
            contentContainerStyle={{ alignItems: "center", paddingTop: 20 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            snapToInterval={totalItemWidth} //Snaps to every single item width.
            decelerationRate={0}
            bounces={false}
            data={data()}
            keyExtractor={(item) => `${item.id}`}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: xScroll } } }],{ useNativeDriver: false })}
            renderItem={({index, item}) => {
                //Albums render

                if (item.id == "-2" || item.id == "-1") {
                    return (
                        <View style={{ width: SPACER_SIZE }}>
                            {/*Dummy Item. This adds the spacing to the left and right in order to maintain centered the album and show other albums to the side.*/}
                        </View>
                    );
                }

                //Vertical Movement handlers---------
                //Multiplier handles the size that the animation uses.
                //-2 y -1 Because the SPACER displaces both sides.
                const inputRange = [
                    (index - 2) * totalItemWidth,
                    (index - 1) * totalItemWidth,
                    index * totalItemWidth,
                ];

                const translateY = xScroll.interpolate({
                    inputRange,
                    outputRange: [0, -10, 0],
                });
                //-----------------------------------

                return(
                    <TouchableWithoutFeedback onPress={()=>handleOnPress(item)} style={styles.itemContainer}>
                        <Animated.View style={[styles.componentContainer,{ transform: [{ translateY }] }]}>
                            <SingleAlbum  isTop={true}  title={item.title} src={photosStateList.filter(itemList => itemList.albumId == item.id)[0].thumbnailUrl}/>
                        </Animated.View>
                    </TouchableWithoutFeedback>
                )
            }}
            />

        </View>

    )
};

export default Carousel;