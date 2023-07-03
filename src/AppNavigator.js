import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllNotes from './screens/AllNotes'
import AddNotes from './screens/AddNotes'

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='AllNotes' component={AllNotes} options={{headerShown: false}}/>
            <Stack.Screen name='AddNotes' component={AddNotes} options={{headerShown: true}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator