import { Card, Typography } from '@/ui'
import React from 'react'
import { TouchableOpacity } from 'react-native'

type Props = {
  data: any
  onPress: () => void
  isFilm?: boolean
}

export const FilmCharacterItem = ({ data, onPress, isFilm }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <Card>
        <Typography.Default>{isFilm ? data.title : data.name}</Typography.Default>
      </Card>
    </TouchableOpacity>
  )
}
