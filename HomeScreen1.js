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


export default function HomeScreen1({ navigation }) {
    const [ps,setproduct]=React.useState([]);
    useEffect(()  =>{
      
      favourites();
     },[]);
    
     
     const favourites = async()=>{
      try{
        setproduct([]);
        for(let i=0;i<=3;i++){
      const data= await AsyncStorage.getItem(i)
      const dAta=JSON.parse(data)
      if (dAta !==null){
        setproduct(searches => [...searches, dAta])
      }
    }
       console.log(ps)
      }
       
    
    
    
      catch(e){
    console.log("error fav")
      }
    }  
  
  const removefav=async()=>{
    AsyncStorage.clear()
    setproduct(null);
    //AsyncStorage.removeItem(0);
    //favourites();
  }
  const removefave=async(key)=>{
    
    AsyncStorage.removeItem(key);
    favourites();
  }
    
    return (
      <View style={{  flex:10 ,backgroundColor:"#D3A01F"}}>
       <View style={{  flex:6 ,}}>
       <FlatList        
            data={ps}
            numColumns={1}
            
            renderItem={({item}) =>
            (
            
            <TouchableOpacity style={{borderRadius:20,alignItems:"center",backgroundColor:"#8D6C1C",marginTop:"5%" ,marginLeft:"2%",marginRight:"2%"}} onPress={() => navigation.navigate('productscreen',{data:item})}>
           <View style={{flex:5,flexDirection:"row"}}> 
            <View style={{flex:4}}>
            <Image 
        style={{width:100,height:100 ,}}
        source={{uri:item.image}}
      ></Image>
      
              <Text style={{fontWeight:'bold',color:'black',alignItems:"center"}}> {item.name} </Text>
              <Text style={{fontWeight:'bold',color:'black',alignItems:"center"}} > ${item.price} </Text>
            </View>
              
              
              
              <View style={{flex:2,}}>
  <TouchableOpacity style={{backgroundColor:"#ECF700",width:80,height:50,borderRadius:20,marginTop:10}} onPress={()=>removefave(item.key)}><h5 style={{color:"red"}} >Remove Item</h5></TouchableOpacity>
            </View>
            </View>
            </TouchableOpacity>
  
           
  
            
            
  
            )}
            />
        </View>
        <View style={{  flex:3 ,backgroundColor:""}}>
      
  
      <Button
        title="Refresh fvourites"
        onPress={() => favourites()}
        color={"#FFBA00"}
      />
      <h1></h1>
       <Button
        title="Remove All"
        onPress={() => removefav()}
        color={"#FFBA00"}
      />
  </View>
    </View>
    );
  }