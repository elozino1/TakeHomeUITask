import { SafeAreaView, StyleSheet, View } from 'react-native'

import Label from './Label'
import React from 'react'
import { colors } from '../themes/colors'

const Tracker = ({height, color, number, selected}) => {
    return (
        <SafeAreaView>
            <View style={{alignItems: 'center', }}>
                <View style={selected ? styles.selected : styles.notSelected}>
                    <View style={{backgroundColor: '#979798', height: 90, width: 8, borderRadius: 10, flexDirection: 'column-reverse', alignItems: 'center',}}>
                        <View style={{backgroundColor: `${color}`, height: height, width: 10, borderRadius: 11, }}></View>
                    </View>
                </View>
                <Label 
                    text={`Task ${number}`} 
                    style={selected ? {fontSize: 8, marginTop: 8, color: colors.activeTabIconColor, fontFamily: 'PoppinsBold'} : {fontSize: 8, marginTop: 8, color: colors.lightBlack}} 
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    notSelected: {
        alignItems: 'center',
    },
    selected: {
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 8,
        backgroundColor: '#9FE2B133',
        borderRadius: 20,
        justifyContent: 'center',
        marginTop: -8,
        marginBottom: -5,
    },
})

export default Tracker