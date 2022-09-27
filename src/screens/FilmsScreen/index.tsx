import { useGetAxios } from '@/api'
import { ErrorModal, FilmCharacterItem } from '@/components'
import { Colors, Endpoints, IFilms, Screens } from '@/constants'
import { Spinner, Typography } from '@/ui'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { styles } from './styles'

export const FilmsScreen = () => {
  const navigation = useNavigation<any>()

  const handleGoToFilm = (url: string) => navigation.navigate(Screens.filmScreen, { url })

  const { data, loading, refetch, error } = useGetAxios({ endpoint: Endpoints.films })

  if (error) return <ErrorModal refetch={refetch} />
  if (loading || !data) return <Spinner />

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Typography.Title mb={30} color={Colors.yellow}>
        Films
      </Typography.Title>
      {data?.results?.map((item: IFilms, i: number) => (
        <FilmCharacterItem isFilm key={i} data={item} onPress={() => handleGoToFilm(item.url)} />
      ))}
      <View style={{ marginBottom: 30 }} />
    </ScrollView>
  )
}
