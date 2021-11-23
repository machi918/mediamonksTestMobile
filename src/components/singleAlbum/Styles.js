import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    title:{
        overflow: 'hidden',
        color: 'white',
    },
    textContainer:{
        justifyContent: 'center',
        width: '100%',
        height: '40%',
        padding: 10,
        backgroundColor: colors.transparentBlack,
    }
});

export default styles;