import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView,Platform } from 'react-native';
//import racesResponse from '../../assets/data/races.json'
import {Entypo} from '@expo/vector-icons'
import { Colors } from '../Constants/Colors'

//const races = racesResponse.data.races.response

export default function RaceListItem({item}: {item:(typeof races)[0]}){ 
    return(
      <View style={styles.itemContainer}>
        <View style={styles.datesContainer}>
        <Text style={styles.date}>03-05</Text>
        <Text style={styles.month}>NOV</Text>
        </View>
  
        <View style={{flex:1}}>
        <Text style={styles.round}>Round 21</Text>
         <Text style={styles.country}>{item.competition.location.country}</Text>
         <Text style={styles.description}>Formula1 {item.competition.name} 2023</Text>
        </View>
        <Entypo name="chevron-right" size={24} color={Colors.primary}/>
      </View>
  
  )}




  const styles = StyleSheet.create({
 
    itemContainer:{ 
      padding:10,
      margin:5,
      backgroundColor : 'white',
      flexDirection:'row',
      alignItems:'center',
      borderRadius:10,
     },
     datesContainer: {
      alignItems: 'center',
      borderColor: 'gainsboro', 
      borderRightWidth: 1,
      marginRight: 10,
      padding: 10,
     },
     date: {
      fontFamily: 'F1-Regular',
    },
    month: {
      backgroundColor: 'gainsboro',
      paddingVertical: 3,
      paddingHorizontal: 10,
  
      borderRadius: 10,
      overflow: 'hidden',
  
      color: 'dimgray',
      fontWeight: 'bold',
      marginTop: 5,
  
      fontFamily: 'F1-Bold',
    },
    round: {
      color: Colors.primary,
      fontFamily: 'F1-Regular',
    },
    country: {
      fontSize: 20,
      fontFamily: 'F1-Bold',
      marginVertical: 7,
    },
    description: {
      color: 'dimgray',
    },
  });
  