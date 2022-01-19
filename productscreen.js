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
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



 function productscreen ({navigation,route}){
    const dispatch = useDispatch()
    const [ps,setproduct]=React.useState(route.params.data);
    const [img,setimg]=React.useState(route.params.data.image);
    useEffect(()  =>{
      
      
     },[]);
  const  favourites= async (key,value)=>{
  try{
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  console.log("set async",key)
  }catch(e){
  console.log("error async")
  }
    }
    
    return (
      <ScrollView>
      <View style={{flexDirection:"column",backgroundColor:"#F6EA4C",flex:12}}>
  
      <View  style={{flexDirection:"row",backgroundColor:"",flex:5,}}>   
      <View style={{backgroundColor:"",flex:1,alignItems:'center',}}> 
       <TouchableOpacity onPress={()=>setimg(ps.image)}>
       <Image 
        style={{width:50,height:50,marginTop:5}}
        source={{uri:ps.image}}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setimg(ps.image1)} >
       <Image 
        style={{width:50,height:50,marginTop:5}}
        source={{uri:ps.image1}}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setimg(ps.image2)}>
       <Image 
        style={{width:50,height:50,marginTop:5}}
        source={{uri:ps.image2}}
      />
      </TouchableOpacity>
      </View>
      <View style={{backgroundColor:"",flex:4,alignItems:''}}>
      <Image 
        style={{width:245,height:170,}}
        source={{uri:img}}
      />
      </View>
      </View>
      <View style={{backgroundColor:"",flex:5,alignItems:"center",alignContent:"center",width:FullWindowOverlay}}>
      
              <Text style={{fontWeight:'bold', color:'Black',alignItems:"center",alignContent:"center",width:FullWindowOverlay,marginBottom:-30,marginLeft:10,}}><h1> {ps.name}</h1> </Text>
              <Text style={{fontWeight:"bold",marginBottom:10}}> {ps.category} </Text>
              <Text style={{color:"red",marginBottom:10,fontSize:20}}> <a style={{textDecorationLine:"line-through"}}>${ps.disprice} </a>    ${ps.price}</Text>
              
              
              
              <TouchableOpacity onPress={()=>favourites(ps.key,ps)}  style={{borderRadius:20,width:200,height:30,backgroundColor:"#FFBA00",borderColor:"black",alignContent:"center",alignItems:"center"}} ><Text style={{alignContent:"center",alignSelf:"center",marginTop:5}}>Add to Favouries</Text></TouchableOpacity>
              
              
         
          
      
        
  </View>
  <TouchableOpacity onPress={() => dispatch({ type:'ADD_TO_CART',payload:ps})}  style={{marginLeft:50,borderRadius:20,width:200,height:30,borderColor:"black",backgroundColor:"#FFBA00",alignContent:"center",alignItems:"center"}} ><Text style={{alignContent:"center",alignSelf:"center",marginTop:5}}>Add to Cart</Text></TouchableOpacity>
  <Text style={{fontWeight:"bold" ,color:"black",fontSize:20,}}>Discription</Text>
        <Text> {ps.discription} </Text>
  
    </View>
      
  </ScrollView>
  );
  }
  const mapDispatchToProps=(dispatch)=>{
      return {
          addItemToCart:(products)=>dispatch({type:'ADD_TO_CART',payload:products})
      }
  }
  export default connect(null,null)(productscreen);
  