import { useGetAxios } from '@/api'
import { CharacterFilmUrlItem, ErrorModal } from '@/components'
import { Colors, IFilms } from '@/constants'
import { Spinner, Typography } from '@/ui'
import { useRoute } from '@react-navigation/native'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { styles } from './styles'

export const FilmScreen = () => {
  const route = useRoute<any>()

  const { url } = route.params

  const { data, loading, refetch, error } = useGetAxios({ endpoint: url })

  if (error) return <ErrorModal refetch={refetch} />
  if (loading || !data) return <Spinner />

  const { characters, director, opening_crawl, producer, release_date, title }: IFilms = data

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Typography.Title mb={10} color={Colors.yellow}>
        {title}
      </Typography.Title>
      <Typography.Subtitle mb={10} color={Colors.yellow}>
        {director}/{producer}
      </Typography.Subtitle>
      <Typography.Subtitle color={Colors.yellow} mb={10}>
        Release Date: {release_date}
      </Typography.Subtitle>
      <Typography.Default mb={30} color={Colors.secondary}>
        {opening_crawl}
      </Typography.Default>

      <Typography.Default mb={10} color={Colors.secondary}>
        Characters
      </Typography.Default>
      {characters.map((item, i) => (
        <CharacterFilmUrlItem url={item} key={i} />
      ))}
      <View style={{ marginBottom: 30 }} />
    </ScrollView>
  )
}
