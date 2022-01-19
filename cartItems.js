
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

const cartItems=(state=[],action)=>{
    var action1='a'   
    switch (action.type)
    {
        // case 'ADD_TO_CART':
        //     console.log('mujee');
        //     try{
        //     console.log(state[0].key);
        //     }
        //     catch{
        //         console.log('first error')
        //     }
        //     console.log('mujee1');
        //     console.log(action.payload.key)
        //     return [...state,action.payload]
    case 'ADD_TO_CART':{
        for( var i=0;i<=state.length-1;i++){
        if (state[i].key===action.payload.key)
        {
            try{
            console.log('same key');
            console.log(action1);
            action1='b'
            console.log(action1);
            
        }
            catch{
                console.log('same key found');
            }
        }
      } 
        switch(action1){
          case 'a':
            console.log('case 1')
              return [...state,action.payload]
        case 'b':
            console.log('case 2')
            return [...state]
      }
    }
case 'REMOVE_FROM_CART':
            return [state.filter(cartItem=>cartItem.id !==action.payload.i)]
    }
    return state
}
export default cartItems;