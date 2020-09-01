import React from 'react'
import { 
  View,
  Text,
  Button,
  StyleSheet 
} from 'react-native'
import SelectFeatureButton from '../components/selectFeatureButton'

export default function HomeScreen( {navigation} ){
    return (
      <View style={styles.container}>
        <View style={ {flex: 0.5} }>
          <Text style={styles.fontTitle}>SELECT FEATURE AI</Text>
        </View>
        <View style={ {flex: 6} }>
          <SelectFeatureButton title="Face Detect" navigation={navigation} routeName="FaceDetect"/>
          <SelectFeatureButton title="Object Detect" navigation={navigation} routeName="ObjectDetect"/>
          <SelectFeatureButton title="Chat Bot" navigation={navigation} routeName="ChatBot"/>
        </View>
        <View style={ {flex: 0.5} }>
          <Text style={styles.fontFoot}>Coming more soon</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  fontTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10
  },
  fontFoot: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 40
  },
  ButtonLayout: {
    flex: 2,
  }
})