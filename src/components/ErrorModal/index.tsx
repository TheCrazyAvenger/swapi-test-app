import { Colors } from '@/constants'
import React from 'react'
import { Button, View } from 'react-native'
import { Typography } from '../../ui/Typography'
import { styles } from './styles'

type Props = {
  refetch: () => any
}

export const ErrorModal = ({ refetch }: Props) => {
  return (
    <View style={styles.container}>
      <Typography.Subtitle textAlign={'center'} mb={15} color={Colors.yellow}>
        Something went wrong
      </Typography.Subtitle>
      <Button title={'Retry'} onPress={refetch} />
    </View>
  )
}
