import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, } from 'react-native'

import Cross from '../assets/icons/cross.svg'
import DashboardStack from '../screens/dashboard/Dashboard'
import Home from '../assets/icons/home.svg'
import Notification from '../assets/icons/notification.svg'
import NotificationsStack from '../screens/notifications/Notifications'
import React from 'react'
import Search from '../assets/icons/search.svg'
import SearchStack from '../screens/search/Search'
import Settings from '../assets/icons/settings.svg'
import SettingsStack from '../screens/settings/Settings'
import { colors } from '../themes/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.activeTabIconColor,
        tabBarInactiveTintColor: colors.inactiveTabIconColor,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          height: Platform.OS =="android"? 60: 85,
          borderTopColor: '#FFFFFF'
        },
        tabBarItemStyle: {
          marginBottom: 10
        },
        tabBarLabelStyle: {
          color: '#000000',
          fontSize: 12,
          fontWeight: '400',
          lineHeight: 20,
        },
        tabBarIconStyle:{
          marginTop: Platform.OS =="android"? 10: 5,
        }
        
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardStack} options={{
        title: 'Home',
        tabBarIcon:
          ({ focused }) => (<Home style={focused ? { color: colors.activeTabIconColor }
            : { color: colors.inactiveTabIconColor }} />)
      }} />

      <Tab.Screen name="Search" component={SearchStack}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => (<Search style={focused ? { color: colors.activeTabIconColor }
            : { color: colors.inactiveTabIconColor }} />)
        }} />

      <Tab.Screen name="Add" component={DashboardStack} options={{
        title: 'Home',
        tabBarButton: () =>
        (<TouchableOpacity style={styles.centerAdd} activeOpacity={0.6}>
          <Cross />
        </TouchableOpacity>)
      }} />


      <Tab.Screen name="Notifications" component={NotificationsStack}
        options={{
          title: 'Notifications', tabBarIcon:
            ({ focused }) => (<Notification style={focused ? { color: colors.activeTabIconColor }
              : { color: colors.inactiveTabIconColor }} />)
        }} />

      <Tab.Screen name="Settings" component={SettingsStack}
        options={{
          title: 'Settings',
          tabBarIcon:
            ({ focused }) => (<Settings style={focused ? { color: colors.activeTabIconColor }
              : { color: colors.inactiveTabIconColor }} />)
        }} />

    </Tab.Navigator>
  )
}

export default BottomTabStack

const styles = StyleSheet.create({
  centerAdd: {
    backgroundColor: colors.floatingButtonGreen,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -28,
  },
  create: {
    color: colors.activeTabIconColor,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
  }
})

