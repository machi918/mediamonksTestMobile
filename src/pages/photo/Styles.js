import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../constants/colors';
import sizes from '../../constants/sizes';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',

        justifyContent:'center',
        alignItems:'center'
    },

    header:{
        height: (width<sizes.screen_small_max_width ? sizes.header_small_height : sizes.header_regular_height),
        width: '100%',

        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,

        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

        borderBottomWidth: 2,
        borderBottomColor: colors.transparentWhite
    },
    headerText:{
        maxWidth: '70%',
        minWidth: '70%',

        fontSize: 20,
        overflow:'hidden',

        textAlign:'center',
        color:colors.white
    },
    backButton:{
        height: sizes.back_button_height,
        width: sizes.back_button_width,
        backgroundColor: colors.transparentWhite,

        alignItems: 'center',
        justifyContent: 'center'
    },
    img:{
        minWidth:'100%',
        minHeight: 600,
        resizeMode:'contain'
    }
});

export default styles;