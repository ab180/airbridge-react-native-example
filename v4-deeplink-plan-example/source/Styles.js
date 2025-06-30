import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
    centeredView: {
        flex: 1, 
        justifyContent: 'center', 
        alignContent: 'center', 
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalView: {
        padding: 12,
        margin: 16,
        backgroundColor: 'white',
        borderRadius: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }, 
    h2: {
        fontWeight: '900',
        fontSize: 18,
    },
})
