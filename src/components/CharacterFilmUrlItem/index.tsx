import { useGetAxios } from '@/api'
import { Colors, Screens } from '@/constants'
import { Card, Typography } from '@/ui'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ActivityIndicator, TouchableOpacity } from 'react-native'

type Props = { url: string; isFilm?: boolean }

export const CharacterFilmUrlItem = ({ url, isFilm }: Props) => {
  const navigation = useNavigation<any>()

  const { data, loading, error } = useGetAxios({ endpoint: url })

  const handleGoToScreen = () => {
    navigation.replace(isFilm ? Screens.filmScreen : Screens.characterScreen, { url })
  }

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handleGoToScreen} disabled={loading || error}>
      <Card style={{ backgroundColor: Colors.yellow }}>
        {error ? (
          <Typography.Default>Something went wrong</Typography.Default>
        ) : loading || !data ? (
          <ActivityIndicator color={Colors.background} />
        ) : (
          <Typography.Default>{isFilm ? data.title : data.name}</Typography.Default>
        )}
      </Card>
    </TouchableOpacity>
  )
}
