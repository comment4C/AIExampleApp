import React from 'react'
import { 
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native'

export default function SelectFeatureButtonn( {title, navigation, routeName} ){
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate( {routeName} )} style={styles.button}>
                <View style={ {alignItems: 'center'}}>
                    <Text style={styles.buttonText}>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    button: {
        width: '87%',
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 50,
        borderColor: "#171D67",
        borderWidth: 2 
    },
    buttonText: {
        color: "#000",
        fontSize: 20,
        fontWeight: 'bold'
    }
  });