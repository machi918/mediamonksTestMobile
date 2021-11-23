import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../constants/colors';
import sizes from '../../constants/sizes';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',

        justifyContent: 'center',
        alignItems:'center',
    },
    textAlbumTitle:{
        marginTop: 10, 
        marginHorizontal: 10,

        color: colors.textColor,
        fontSize: 22
    },
    carrouselContainer:{
        width: '100%',
        height: (width<sizes.screen_small_max_width ? sizes.mainCarousel_small_height : sizes.mainCarousel_regular_height),

        alignItems: 'center',
        justifyContent: 'center',
    },
    albumComponent: {
        width: (width<sizes.screen_small_max_width ? 150 : 175),
        height: (width<sizes.screen_small_max_width ? 150 : 175),

        marginVertical: 10,
        marginHorizontal: 5,

        borderRadius: 15,
        
        justifyContent: 'flex-end',
        overflow:'hidden',
    }
});

export default styles;