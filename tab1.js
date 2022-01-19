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
import HomeScreen1 from './HomeScreen1';
import HomeScreen from './HomeScreen';
import section from './section';
import productscreen from './productscreen';
import flatlist from './flatlist';
import styles from './styles';

export default function tab1({navigation}) {
    return (
      
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="HomeScreen1" component={HomeScreen1} />
          <Stack.Screen name="DashboardScreen" component={section} />
          
          <Stack.Screen name="productscreen" component={productscreen} />
          <Stack.Screen name="flatlist" component={flatlist} />
          <Stack.Screen name="section" component={section} />
        </Stack.Navigator>
    );
  }