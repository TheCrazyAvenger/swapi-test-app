import { HomeMenuItem } from '@/components'
import { Colors, Screens } from '@/constants'
import { Typography } from '@/ui'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'

export const HomeScreen = () => {
  const navigation = useNavigation<any>()

  const handleGoToCharacters = () => {
    navigation.navigate(Screens.charactersScreen)
  }
  const handleGoToFilms = () => {
    navigation.navigate(Screens.filmsScreen)
  }

  return (
    <View style={styles.container}>
      <Typography.Title mb={10} color={Colors.yellow}>
        SWAPI
      </Typography.Title>
      <Typography.Subtitle color={Colors.yellow}>The Star Wars API</Typography.Subtitle>

      <View style={styles.menuContainer}>
        <HomeMenuItem title='Characters' onPress={handleGoToCharacters} />
        <HomeMenuItem title='Films' onPress={handleGoToFilms} />
      </View>
    </View>
  )
}
