import { Card, Typography } from '@/ui'
import React from 'react'
import { TouchableOpacity } from 'react-native'

type Props = {
  title: string
  onPress: () => void
}

export const HomeMenuItem = ({ title, onPress }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <Card>
        <Typography.Default>{title}</Typography.Default>
      </Card>
    </TouchableOpacity>
  )
}
