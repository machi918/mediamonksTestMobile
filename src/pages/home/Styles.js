import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../constants/colors';

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
        fontSize: 18
    },

    carrouselContainer:{
        width: '100%',
        height: 225,
        alignItems: 'center',
        justifyContent: 'center',

    },
    albumComponentMain:{

        width: width*0.8,
        height: 200,

        backgroundColor: 'rgba(0,0,0,0.2)',
        marginVertical: 5,

        justifyContent: 'flex-end',

        borderRadius: 10,
        overflow:'hidden',

    },
    albumComponentMainText: {

        color: colors.white

    },
    albumComponent: {
        width: 175,
        height: 175,

        backgroundColor: 'rgba(0,0,0,0.2)',
        marginVertical: 10,
        marginHorizontal: 5,

        overflow:'hidden',

        borderRadius: 15,

        justifyContent: 'flex-end'
    },
    albumComponentText: {
        
        color: colors.white
    }


});

export default styles;