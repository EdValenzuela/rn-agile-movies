import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width

export const globalStyles = StyleSheet.create({
    textHeader :{
        marginVertical: 20,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        color: 'black'
    },
    containerItem:{
        width: windowWidth * 0.4,
        margin: 10,
        backgroundColor: 'blue'
    },
    img:{
        width: '100%',
        height: 250,
    }
});