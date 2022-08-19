import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Dimensions } from 'react-native'
import React from 'react'
import { colors } from '../themes/colors'

const Button = ({ label, style = {}, textStyle, onPress = () => {} }) => {

    return (
        <TouchableOpacity style={[styles.root, style]} activeOpacity={0.7} onPress={onPress}>
            <Text style={[styles.label]}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    root: {
        borderColor: colors.black,
        borderWidth: 1.5,
        borderRadius: 5,
        padding: 7,
    },
    label: {
        fontSize: 15,
        fontWeight: '400',
    },
})

export default Button