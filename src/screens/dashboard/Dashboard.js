import { FlatList, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, TextInput, View } from 'react-native'

import Back from '../../assets/icons/back.svg'
import Bell from '../../assets/icons/bell.svg'
import BoxArrowDown from '../../assets/icons/box-arrow-down.svg'
import Button from '../../components/Button'
import Checkbox from '../../assets/icons/checkbox.svg'
import Chevrondown from '../../assets/icons/chevron-down.svg'
import Clock from '../../assets/icons/clock.svg'
import Delete from '../../assets/icons/delete.svg'
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
import Tracker from '../../components/Tracker'
import UpDownArrow from '../../assets/icons/arrowdownup.svg'
import { colors } from '../../themes/colors'
import { data } from '../../utils/utils'

const profileImage = require('../../assets/images/profileImage.png')

const Dashboard = () => {
    const render = ({item}) => (
        <View
            style={{flexDirection: 'row', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    paddingHorizontal: 10, 
                    marginTop: 10,
                    borderRadius: 10,
                    backgroundColor: 'pink',
                    height: 60,
                }}
        >
            <View style={{flexDirection: 'row', alignItems: 'center', width: '78%'}}>
                <Checkbox />
                <Label text={item} style={{marginLeft: 10, fontSize: 12, color: colors.lightBlack}}/>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Edit style={{marginRight: 10}}/>
                <Delete />
            </View>
        </View>
    )
    return (
        <SafeAreaView style={{backgroundColor: colors.white}}>
            <StatusBar backgroundColor={colors.white} style={{paddingTop: StatusBar.currentHeight, }} barStyle='dark-content'/>
            <ScrollView style={styles.grandContainer} showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <Back />
                    <Image 
                        source={profileImage}
                        style={styles.tinyImage}
                    /> 
                </View>
                {/* Title */}
                <Label text='Task Tracker' style={styles.titleText} />
                {/* Create Task */}
                <View style={styles.header}>
                    <View style={{flexDirection: 'row'}}>
                        <Label style={{textAlignVertical: 'bottom', marginRight: 3, fontSize: 18, color: colors.textBlack,}} text='Title'/>
                        <TextInput width='65%' style={{borderLeftWidth: 0.5}}/>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Save style={{marginHorizontal: 10, }}/>
                        <Edit />
                    </View>
                </View>
                <View style={styles.textInputContainer}>
                    <TextInput 
                        multiline={true}
                        style={{height: 120, marginVertical: 18, marginHorizontal: 15, fontFamily: 'PoppinsRegular', fontWeight: 'normal'}}
                    />
                </View>
                <View style={styles.options}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <ImageSvg sty/>
                        <Bell style={{marginHorizontal: 15, }}/>
                        <Paint />
                        <BoxArrowDown style={{marginHorizontal: 15, }}/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'row', marginRight: 40, alignItems: 'center'}}>
                            <RoundBack style={{marginHorizontal: 15, }}/>
                            <RoundForward />
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
                            <Label style={{marginHorizontal: 15, fontSize: 14, color: colors.textBlack,}} text='July 26, 2022' />
                            <Label style={{marginLeft: 5, fontSize: 14, color: colors.textBlack,}} text='12:00 AM' />
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <Checkbox style={{marginHorizontal: 5, }}/>
                            <Label text='All day' style={{fontSize: 14, color: colors.textBlack,}}/>
                        </View>
                    </View>
                    {/* Repeat */}
                    <View  style={{flexDirection: 'row', alignItems: 'center', marginLeft: 35, marginVertical: 15}}>
                        <Label text='Does not repeat ' style={{fontSize: 14, color: colors.textBlack,}}/>
                        <Chevrondown />
                    </View>
                    {/* Alarm */}
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Stopwatch />
                            <Button label='12:00 AM' style={{marginLeft: 17,}}/>
                            <Label text=' - ' style={{color: colors.textBlack, fontFamily: 'HelveticaNowDisplay'}}/>
                            <Button label='1:00 PM'/>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Button label='1hr:00:00' style={{backgroundColor: colors.orange}}/>
                        </View>
                    </View>
                </View>
                {/* Create Task Header*/}
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 35, }}>
                    <Label text='Task Created' style={{fontSize: 18}} />
                    <UpDownArrow />
                </View>
                {/* Tasks */}
                <View height={200} style={{marginTop: 5}}>
                    <FlatList 
                        data={data}
                        renderItem={render}
                    />
                </View>
                <View style={styles.tracker}>
                    <Tracker height={30} color={colors.textInputColor} number={1} selected={false}/>
                    <Tracker height={40} color={colors.lavenderBlue} number={2} selected={false}/>
                    <Tracker height={50} color={colors.orange} number={3} selected={false}/>
                    <Tracker height={30} color={colors.yellow} number={4} selected={false}/>
                    <Tracker height={60} color={colors.blue} number={5} selected={false}/>
                    <Tracker height={70} color={colors.green} number={6} selected={true}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    grandContainer: {
        // flex: 1,
        marginHorizontal: 20, 
        marginBottom: 30,
        paddingTop: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlignVertical: 'center',
        marginHorizontal: 10
    },
    tinyImage: {
        height: 30,
        width: 30,
        borderRadius: 30
    },
    titleText: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'PoppinsSemiBold',
        marginTop: -10,
        color: colors.textBlack,
    },
    textInputContainer: {
        backgroundColor: colors.textInputColor,
        height: 120,
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
    },
    tracker: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
})