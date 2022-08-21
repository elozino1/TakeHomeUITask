import BottomTab from './src/navigation/BottomTab'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from "@use-expo/font";

const Stack = createNativeStackNavigator();

const customFonts = {
  PoppinsRegular: require('./src/assets/fonts/Poppins-Regular.ttf'),
  PoppinsBold: require('./src/assets/fonts/Poppins-Bold.ttf'),
  PoppinsSemiBold: require('./src/assets/fonts/Poppins-SemiBold.ttf'),
  HelveticaNowDisplay: require('./src/assets/fonts/HelveticaNowDisplay.ttf'),
}

export default function App() {
  const [isLoaded] = useFonts(customFonts);

  if (!isLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BottomTab" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
