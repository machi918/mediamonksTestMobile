import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../constants/colors';
import sizes from '../../constants/sizes';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height: '100%',

        alignItems: 'center'
    },

    header:{
        height: (width<sizes.screen_small_max_width ? sizes.header_small_height : sizes.header_regular_height),
        width: '100%',

        backgroundColor: colors.transparentBlack,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,

        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',

        position: 'absolute',
        zIndex: 100,

        overflow: 'scroll'
    },
    textHeader: {
        width: '70%',
        color: colors.white,
        fontSize: 20,
        textAlign: 'center'
    },
    backButton:{
        height: sizes.back_button_height,
        width: sizes.back_button_width,
        backgroundColor: colors.transparentWhite,

        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;