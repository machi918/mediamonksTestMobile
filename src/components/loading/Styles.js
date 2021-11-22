import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',

        justifyContent:'center',
        alignItems:'center'
    },
    imgLogo:{
        tintColor: colors.black,
        marginVertical: 20,

        width: '70%',
        height: 100,
    }
});

export default styles;