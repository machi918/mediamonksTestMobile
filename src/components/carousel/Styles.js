import { StyleSheet, Dimensions } from 'react-native';
import sizes from '../../constants/sizes';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({

    itemContainer:{
        maxWidth: (width<sizes.screen_small_max_width ? sizes.mainSingleAlbum_small_width : sizes.mainSingleAlbum_regular_width),
        marginHorizontal: 10,

        justifyContent:'center', 
        alignItems:'center',

        borderRadius: 15,
        overflow:'hidden'
    },
    componentContainer: {
        height: '90%', 
        width: (width<sizes.screen_small_max_width ? sizes.mainSingleAlbum_small_width : sizes.mainSingleAlbum_regular_width),
        marginHorizontal: 10,

        justifyContent: 'center', 
        alignItems: 'center',

        borderRadius: 15,
        overflow: 'hidden'
    }
});

export default styles;