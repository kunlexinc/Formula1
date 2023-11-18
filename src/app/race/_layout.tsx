import { View, Text } from 'react-native'
import React from 'react'
import { withLayoutContext } from 'expo-router';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const TopTabs = withLayoutContext(Tab.Navigator)

const RaceLayout = () => {
  return (
    
      <TopTabs/>
    
  )
}

export default RaceLayout