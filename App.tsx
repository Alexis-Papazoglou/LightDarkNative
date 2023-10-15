import React from 'react'
import {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native';
import {styles} from "./AppStyles"

export default function App(): JSX.Element{
  const [colorScheme, setcolorScheme] = useState('dark')
  const [textState,setTextState] = useState('White')

  function handlePress(){
    setTextState(prevState => (
      prevState === 'White' ? 'Dark' : 'White'
    ))
    setcolorScheme(prevS => (prevS==='dark' ? 'white' : 'dark'))
  }

  return (
    <View style={colorScheme==='dark' ? styles.whiteContainer : styles.darkContainer}>
      <StatusBar style={colorScheme==='dark' ? 'dark' : 'light'}></StatusBar>
      <Text style={colorScheme==='dark' ? styles.darkText : styles.whiteText}>{textState}</Text>
      <TouchableOpacity style={colorScheme==='dark' ? styles.whiteBtn : styles.darkBtn} onPress={handlePress}>
        <Text style={colorScheme==='dark' ? styles.whiteText : styles.darkText}>Click me!</Text>
      </TouchableOpacity>
    </View>
  );
}
