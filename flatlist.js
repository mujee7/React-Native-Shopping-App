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
import styles from './styles';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


export default function flatlist({navigation}){
    return(
      <View >
      
    <FlatList
              
              data={DATA}
              numColumns={1}
              renderItem={({item}) =>
              
              <TouchableOpacity  style={{backgroundColor:'green', padding:10, marginBottom:5}} onPress={() => navigation.navigate('section')}>
                <Text style={{fontWeight:'bold', color:'white'}}> {item.name} </Text>
                <Text> {item.price} </Text>
                <Text> {item.key} </Text>
                
              </TouchableOpacity>
              
    
            }
              />
      </View>
      
    );
    
    
    }// case 'ADD_TO_CART':
    // for( const i=0;i<=state.length;i++){
    //     if (state[i].key===action.payload.id)
    //     {
    //         setaction('b');
    //     }
    //   } 
    //   switch(action1){
    //       case 'a':
    //           return [...state,action.payload]
    //   }