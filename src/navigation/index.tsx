import { Screens } from '@/constants'
import { CharacterScreen, CharactersScreen, FilmScreen, FilmsScreen, HomeScreen } from '@/screens'
import { CardStyleInterpolators, createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import React from 'react'

const Stack = createStackNavigator()

const screenOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
}

export const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName={Screens.homeScreen}>
      <Stack.Screen name={Screens.charactersScreen} component={CharactersScreen} />
      <Stack.Screen name={Screens.filmsScreen} component={FilmsScreen} />
      <Stack.Screen name={Screens.homeScreen} component={HomeScreen} />
      <Stack.Screen name={Screens.filmScreen} component={FilmScreen} />
      <Stack.Screen name={Screens.characterScreen} component={CharacterScreen} />
    </Stack.Navigator>
  )
}
