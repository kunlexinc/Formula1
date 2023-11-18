import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable, View, FlatList, SafeAreaView,Platform } from 'react-native';
import {Link} from 'expo-router'
import racesResponse from '../../assets/data/races.json'
import {Entypo} from '@expo/vector-icons'
import { Colors } from '../Constants/Colors'
import dayjs  from 'dayjs';


const races = racesResponse.data.races.response

export default function RaceListItem({item,round}:{item:(typeof races)[0], round: number}){ 
    return(
     <Link href={'/race'} asChild>
     <Pressable style={styles.itemContainer}>
        <View style={styles.datesContainer}>
        <Text style={styles.date}>{dayjs(item.date).subtract(2,'days').format('MMM')}-{dayjs(item.date).format('DD')}</Text>
        <Text style={styles.month}>{dayjs(item.date).format('MMM')}</Text>
        </View>
  
        <View style={{flex:1}}>
        <Text style={styles.round}>Round {round}</Text>
         <Text style={styles.country}>{item.competition.location.country}</Text>
         <Text style={styles.description}>Formula1 {item.competition.name} {item.season}</Text>
       
        </View>
        <Entypo name="chevron-right" size={24} color={Colors.primary}/>
      </Pressable>
      </Link>
  
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
      fontFamily: 'F1-Black',
      marginVertical: 7,
    },
    description: {
      color: 'dimgray',
    },
  });
  