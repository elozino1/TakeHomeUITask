import { StyleSheet, Text } from 'react-native'

import React from 'react'

const Label = ({ text, style={}, onPress}) => {

    return (
        <Text style={[styles.text, style]} onPress={onPress}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'PoppinsRegular',
    }
})

export default Label