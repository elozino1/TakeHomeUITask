import { Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'

import Back from '../../assets/icons/back.svg'
import Bell from '../../assets/icons/bell.svg'
import BoxArrowDown from '../../assets/icons/box-arrow-down.svg'
import Button from '../../components/Button'
import Checkbox from '../../assets/icons/checkbox.svg'
import Chevrondown from '../../assets/icons/chevron-down.svg'
import Clock from '../../assets/icons/clock.svg'
import Edit from '../../assets/icons/edit.svg'
import Ellipsis from '../../assets/icons/elipsis.svg'
import ImageSvg from '../../assets/icons/image.svg'
import Label from '../../components/Label'
import Paint from '../../assets/icons/paint.svg'
import React from 'react'
import RoundBack from '../../assets/icons/round-back.svg'
import RoundForward from '../../assets/icons/round-forward.svg'
import Save from '../../assets/icons/save.svg'
import Stopwatch from '../../assets/icons/stopwatch.svg'
import UpDownArrow from '../../assets/icons/arrowdownup.svg'
import { colors } from '../../themes/colors'

const profileImage = require('../../assets/images/profileImage.png')

const Dashboard = () => {
    return (
        <SafeAreaView>
            <View style={styles.grandContainer}>
                {/* Header */}
                <View style={styles.header}>
                    <Back />
                    <Image 
                        source={profileImage}
                        style={styles.tinyImage}
                    /> 
                </View>
                {/* Title */}
                <Text style={styles.titleText}>Task Tracker</Text>
                {/* Create Task */}
                <View style={styles.header}>
                    <Text style={{textAlignVertical: 'bottom'}}>Title</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Save style={{marginHorizontal: 10, }}/>
                        <Edit />
                    </View>
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput 
                        multiline={true}
                        style={{height: 150, marginVertical: 18, marginHorizontal: 15}}
                    />
                </View>
                <View style={styles.options}>
                    <View style={{flexDirection: 'row'}}>
                        <ImageSvg sty/>
                        <Bell style={{marginHorizontal: 15, }}/>
                        <Paint />
                        <BoxArrowDown style={{marginHorizontal: 15, }}/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', marginRight: 40}}>
                            <RoundBack style={{marginHorizontal: 15, }}/>
                            <RoundForward />
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Ellipsis />
                        </View>
                    </View>
                </View>
                {/* Date and Time */}
                <View style={{paddingHorizontal: 10, marginTop: 20}}>
                    {/* Time */}
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Clock />
                            <Text style={{marginHorizontal: 15, }}>July 26, 2022</Text>
                            <Text style={{marginLeft: 5, }}>12:00 AM</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Checkbox style={{marginHorizontal: 5, }}/>
                            <Text>All day</Text>
                        </View>
                    </View>
                    {/* Repeat */}
                    <View  style={{flexDirection: 'row', alignItems: 'center', marginLeft: 35, marginVertical: 15}}>
                        <Label text='Does not repeat ' />
                        <Chevrondown />
                    </View>
                    {/* Alarm */}
                    <View  style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Stopwatch />
                            <Button label='12:00 AM' style={{marginLeft: 17}}/>
                            <Label text=' - '/>
                            <Button label='1:00 PM'/>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Button label='1hr:00:00' style={{backgroundColor: colors.orange}}/>
                        </View>
                    </View>
                </View>
                {/* Create Task Header*/}
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 35}}>
                    <Label text='Task Created'/>
                    <UpDownArrow />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    grandContainer: {
        // flex: 1,
        marginHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlignVertical: 'center'
    },
    tinyImage: {
        height: 30,
        width: 30,
        borderRadius: 30
    },
    titleText: {
        fontSize: 20,
        textAlign: 'center',
    },
    textInputContainer: {
        backgroundColor: colors.textInputColor,
        height: 150,
        borderRadius: 12,
        marginTop: 10,
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.textInputColor,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 12,
    }
})