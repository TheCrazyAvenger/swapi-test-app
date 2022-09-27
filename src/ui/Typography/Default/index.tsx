import { Colors } from '@/constants'
import { getOffset } from '@/helpers'
import { TextPropsTypes } from '@/ui'
import React from 'react'
import { Text as RNText } from 'react-native'
import { styles } from './styles'

export const Default: React.FC<TextPropsTypes> = ({
  children,
  style,
  color,
  size = 18,
  lineH = 22,
  textAlign = 'auto',
  ...rest
}) => {
  return (
    <RNText
      style={[
        styles.text,
        {
          color: color ?? Colors.text,
          fontSize: size,
          lineHeight: lineH,
          textAlign: textAlign,
        },
        style,
        getOffset(rest),
      ]}
      {...rest}
    >
      {children}
    </RNText>
  )
}
