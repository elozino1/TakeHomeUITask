import React from 'react'
import { Text } from 'react-native'

const Label = ({ text, style={}, onPress = () => {} }) => {

    return (
        <Text style={style} onPress={onPress}>{text}</Text>
    )
}

export default Label