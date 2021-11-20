import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',

        justifyContent: 'center',
        alignItems: 'center',
    },

    albumComponentMain:{

        width: '80%',
        height: 200,

        backgroundColor: 'violet',
        marginVertical: 5

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
        padding: 10,

        borderRadius: 15,

        // alignItems: 'flex-end'
        justifyContent: 'flex-end'
    },
    albumComponentText: {
        color: 'white'
    }


});

export default styles;