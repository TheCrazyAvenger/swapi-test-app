import { Screens } from '@/constants'
import { HomeScreen } from '@/screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

const Stack = createNativeStackNavigator()

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Screens.home} component={HomeScreen} />
    </Stack.Navigator>
  )
}
