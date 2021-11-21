import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',

        justifyContent: 'center',
        alignItems:'center'

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
        color: 'white'
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
        color: 'white'
    }


});

export default styles;