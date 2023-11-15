import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView,Platform } from 'react-native';
import racesResponse from './assets/data/races.json'
import {Entypo} from '@expo/vector-icons';
import { Colors } from './src/Constants/Colors';
import RaceListItem from './src/components/RaceListItem';

const races = racesResponse.data.races.response

export default function App() {

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

