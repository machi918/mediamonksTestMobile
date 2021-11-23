import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height: '100%',

        alignItems: 'center'
    },

    header:{
        height: 75,
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
        height: 50,
        width: 50,
        backgroundColor: colors.transparentWhite
    }
});

export default styles;