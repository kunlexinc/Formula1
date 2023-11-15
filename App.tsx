import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView,Platform, ActivityIndicator } from 'react-native';
import racesResponse from './assets/data/races.json'
import {Entypo} from '@expo/vector-icons';
import { Colors } from './src/Constants/Colors';
import RaceListItem from './src/components/RaceListItem';
import { useFonts } from 'expo-font';



const races = racesResponse.data.races.response

export default function App() {

  const [fontsLoaded] = useFonts({
    'F1-Black': require('./assets/fonts/Formula1-Black.ttf'),
    'F1-Bold': require('./assets/fonts/Formula1-Bold_web.ttf'),
    'F1-Italic': require('./assets/fonts/Formula1-Italic.ttf'),
    'F1-Regular': require('./assets/fonts/Formula1-Regular-1.ttf'),
    'F1-Wide': require('./assets/fonts/Formula1-Wide.ttf'),
  });


  if(!fontsLoaded){
    return < ActivityIndicator/>
  }

  return (
    <SafeAreaView style={styles.container}>
    
    <FlatList data={races} 
    renderItem={({item}) => (
     <RaceListItem item={item}/>

    )}  />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    paddingTop: Platform.OS === "android" ? 35 : 0
    
  },
 
});

