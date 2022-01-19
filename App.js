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
import App from './Login';
import HomeScreen from './HomeScreen';
import section from './section';
import flatlist from './flatlist';
import App3 from './TabbarItem';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function MyDrawer() {
  return (
    
    <NavigationContainer >
    
    <Drawer.Navigator initialRouteName="App" drawerContentOptions={{
          activeTintColor: '#e91e63',
        
     
       }}>
       
       <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="section" component={section} />
        <Drawer.Screen name="App" component={App}options={{
      headerShown:false
           }} />
        <Drawer.Screen name="flatlist" component={flatlist} />
        <Drawer.Screen name="App3" component={App3} options={{
      
          headerStyle: {
            backgroundColor:"#FFBA00",
           
          },
          headerTitle: (props) => ( // App Logo
      <Image
        style={{ width: 200, height: 50 , alignContent:'center' }}
        source={{
              uri: 'https://cdn.shopify.com/s/files/1/0590/1916/5868/files/Logo_Final_D-11-11_200x@2x.png?v=1630361073',
            }}
            resizeMode='contain'
      />
    ),
            
         
           }}
            
          />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}


//custom tab bar code




  
const DATA=[
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Arindka',
    key:4,
    lastname:'Last Name',
    flag:true,
    data:[{key:0, title:'Deebacha'}, {key:1, title:'chapter'}],
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Arindka Taruf',
    key:5,
    lastname:'Last Name',
    data:[{key:0, title:'Mukhtalif Nam'}, {key:1, title:'Tree'}],
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Arind Kay Murakabad',
    key:6,
    lastname:'Last Name',
    data:[{key:0, title:'Arind Kay mu'}],
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Arind Kay Ilaqe',
    key:6,
    lastname:'Last Name',
    data:[{key:0, title:'Arind Kay Ilaqa'},{key:1,title:'ilaqa jat'}],
  },
  ];

const DATA1=[
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Andarain',
      key:4,
      lastname:'Last Name',
      flag:true,
      data:[{key:0, title:'Andarain Deebacha'}, {key:1, title:'chapter Andarain'}],
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Andarain Taruf',
      key:5,
      lastname:'Last Name',
      data:[{key:0, title:'Andarain Mukhtalif Nam'}, {key:1, title:'Andarain Tree'}],
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Andarain Kay Murakabad',
      key:6,
      lastname:'Last Name',
      data:[{key:0, title:'Andarain Kay mu'}],
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Andarain Kay Ilaqe',
      key:6,
      lastname:'Last Name',
      data:[{key:0, title:'Andarain Kay Ilaqa'},{key:1,title:'Andarain jat'}],
    },
    ];
 
    



