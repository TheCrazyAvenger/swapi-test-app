import { Colors } from '@/constants'
import React from 'react'
import { ActivityIndicator } from 'react-native'
import { styles } from './styles'

export const Spinner = () => {
  return <ActivityIndicator size={'large'} style={styles.container} color={Colors.yellow} />
}
