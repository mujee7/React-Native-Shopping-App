import React,{useEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from "firebase/auth"
import {auth} from "./firebase"
import {db} from "./firebase"
import {collection,getDocs,doc,setDoc} from "firebase/firestore/lite"
import { StyleSheet, Text,ScrollView, View,TextInput,SafeAreaView,NativeEventEmitter, Alert,Button,Image,svg,FlatList,TouchableOpacity,Console , SectionList, ActivityIndicator} from 'react-native';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TabBarItem from './TabbarItem';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { async } from '@firebase/util';
import { isLoading } from 'expo-font';
import { FullWindowOverlay } from 'react-native-screens';
import { color } from 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      height: 40,
      width:200,
      margin: 12,
      borderWidth: 2,
      padding: 10,
      marginLeft:80,
      marginTop:20,
      borderColor:"#FFFF00",
      backgroundColor:"#FFFF00",
      color:"black",
      alignContent:'center',
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    tinyLogo: {
      width: 50,
      height: 50,
      marginLeft:150,
      marginTop:140,
    },
    logo: {
      width: 66,
      height: 58,
    },
    svg: {
      width: 40,
      height: 40,
      marginTop:-53,
      marginLeft:40,
      backgroundColor:"#FFBA00"
      
  
    },
    bottomTabIcon:{
     width: 20,
      height: 20, 
    }
    
  });
  export default styles;