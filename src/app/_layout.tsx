import { Stack } from 'expo-router';
import {ActivityIndicator}  from 'react-native'
import { useFonts } from 'expo-font';


export default function Layout() {
    const [fontsLoaded] = useFonts({
        'F1-Black': require('../../assets/fonts/Formula1-Black.ttf'),
        'F1-Bold': require('../../assets/fonts/Formula1-Bold_web.ttf'),
        'F1-Italic': require('../../assets/fonts/Formula1-Italic.ttf'),
        'F1-Regular': require('../../assets/fonts/Formula1-Regular-1.ttf'),
        'F1-Wide': require('../../assets/fonts/Formula1-Wide.ttf'),
      });
    
    
      if(!fontsLoaded){
        return < ActivityIndicator/>
      }
  
  
  
    return <Stack />;
}