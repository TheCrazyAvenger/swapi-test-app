import { useGetAxios } from '@/api'
import { ErrorModal, FilmCharacterItem } from '@/components'
import { Colors, Endpoints, ICharacters, Screens } from '@/constants'
import { Spinner, Typography } from '@/ui'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { styles } from './styles'

export const CharactersScreen = () => {
  const navigation = useNavigation<any>()
  const handleGoToCharacter = (url: string) => navigation.navigate(Screens.characterScreen, { url })

  const { data, loading, refetch, error } = useGetAxios({ endpoint: Endpoints.people })

  if (error) return <ErrorModal refetch={refetch} />
  if (loading || !data) return <Spinner />

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Typography.Title mb={30} color={Colors.yellow}>
        Characters
      </Typography.Title>
      {data?.results?.map((item: ICharacters, i: number) => (
        <FilmCharacterItem key={i} data={item} onPress={() => handleGoToCharacter(item.url)} />
      ))}
      <View style={{ marginBottom: 30 }} />
    </ScrollView>
  )
}
