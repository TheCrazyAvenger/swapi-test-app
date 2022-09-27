import { useGetAxios } from '@/api'
import { CharacterFilmUrlItem, ErrorModal } from '@/components'
import { Colors, ICharacters } from '@/constants'
import { Card, Spinner, Typography } from '@/ui'
import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { styles } from './styles'

export const CharacterScreen = () => {
  const navigation = useNavigation<any>()
  const route = useRoute<any>()

  const { url } = route.params

  const { data, loading, refetch, error } = useGetAxios({ endpoint: url })

  if (error) return <ErrorModal refetch={refetch} />
  if (loading || !data) return <Spinner />

  const { name, birth_year, eye_color, films, gender, hair_color, height, homeworld, mass, skin_color }: ICharacters =
    data

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Typography.Title mb={30} color={Colors.yellow}>
        {name}
      </Typography.Title>
      <Typography.Default color={Colors.secondary} mb={5} ml={7}>
        Info
      </Typography.Default>
      <Card>
        <Typography.Description mb={5}>Birth year: {birth_year}</Typography.Description>
        <Typography.Description mb={5}>Eye color: {eye_color}</Typography.Description>
        <Typography.Description mb={5}>gender: {gender}</Typography.Description>
        <Typography.Description mb={5}>Hair color: {hair_color}</Typography.Description>
        <Typography.Description mb={5}>Height: {height}</Typography.Description>
        <Typography.Description mb={5}>Mass: {mass}</Typography.Description>
        <Typography.Description>Skin color: {skin_color}</Typography.Description>
      </Card>

      <Typography.Default mb={10} color={Colors.secondary}>
        Films
      </Typography.Default>
      {films.map((item, i) => (
        <CharacterFilmUrlItem isFilm url={item} key={i} />
      ))}
      <View style={{ marginBottom: 30 }} />
    </ScrollView>
  )
}
