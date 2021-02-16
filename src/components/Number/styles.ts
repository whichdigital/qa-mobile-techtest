import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
    },
    number: {
        width: '80%',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    value: {
        borderColor: 'red',
        borderWidth: 2,
    },
    active: {
        backgroundColor: '#7ED6BE',
    },
    multiple: {
        backgroundColor: '#FEEBA7',
        borderRadius: 5,
    },
});
