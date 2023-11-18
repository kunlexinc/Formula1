import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView,Platform,  } from 'react-native';
import racesResponse from '../../assets/data/races.json'
import {Entypo} from '@expo/vector-icons';
import { Colors } from '../Constants/Colors';
import RaceListItem from '../components/RaceListItem';

import dayjs  from 'dayjs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const races = racesResponse.data.races.response

export default function App() {

  const sortedRaces = races.sort((r1,r2) =>
  dayjs(r2.date).diff(dayjs(r1.date))
  );

  

  return (
    <SafeAreaProvider style={styles.container}>
    
    <FlatList data={sortedRaces} 
    renderItem={({item, index}) => (
     <RaceListItem item={item} round={sortedRaces.length - index}/>

    )}  />
      
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
//   paddingTop: Platform.OS === "android" ? 35 : 0
    
  },
 
});

