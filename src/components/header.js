import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Image 
} from 'react-native'

export default function header( {title, navigation} ) {
    return (
        <View style={styles.header}>
            <Image style={ {width: 48, height: 48} } source={require('../assets/artificial-intelligence-icon.png')} />
            <Text style={styles.headerText}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#F5F0F0',
        letterSpacing: 1,
    }
})
