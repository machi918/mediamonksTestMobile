import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',

        justifyContent:'center',
        alignItems:'center'
    },

    header:{
        height: 75,
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
        height: 50,
        width: 50,
        backgroundColor: colors.transparentWhite
    },

    img:{
        minWidth:'100%',
        minHeight: 600,
        resizeMode:'contain'
    }

});

export default styles;