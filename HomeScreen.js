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

export default function HomeScreen({navigation}) {
    const [loading,setloading]=React.useState(true);
    const [banners,setbanners]=React.useState([]);
    const [ps,setproduct]=React.useState([]);
    const [img,setimg]=React.useState(require('./heart.png'));
    const [press,setpress]=React.useState(true);
    useEffect(()  =>{
      getBanner();
      getData();
     },[]);
     const getData= async() =>{
      const products= collection(db,'products');
      const productsSnapshot= await getDocs(products);
      const productsList=productsSnapshot.docs.map(doc=> doc.data());
      setproduct(productsList);
      console.log(productsList);
      
     
     }
     const getBanner= async() =>{
      const banner= collection(db,'banner');
      const bannerSnapshot= await getDocs(banner);
      const bannerList= bannerSnapshot.docs.map(doc=> doc.data());
      setbanners(bannerList);
      console.log(bannerList);
      console.log(loading);
      setloading(false);
      console.log(loading);
     }
     let renderPhotoTypes = () => {
      let type = [];
  
      banners.map( ( item )=> {
        type.push(
          <View >
            <TouchableOpacity>
              
                <View>
                  <Image style={{width:310,height:200}} source={{uri:item.image1}}/>
                </View>
            </TouchableOpacity>
          </View>
        );
      } );
  
      return type;
    };
  function onPress(){
    if(press){
   setimg(require('./heart1.png'))
   setpress(false);}
   else{
    setimg(require('./heart.png'))
    setpress(true);
  
   }
  
  }
    return (
      loading===true?
      (<View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#F5F26E"}}> 
      <ActivityIndicator size="large"></ActivityIndicator> 
      </View>):(
      
        <View style={{flexDirection:"column",backgroundColor:"#EF9B0F",flex:10}}>
        <View style={{backgroundColor:'orange',flex:1.2}}>
        {renderPhotoTypes() }
        </View>
    <View style={{backgroundColor:'#F7F7A2',flex:3}}>
    <FlatList 
            
              data={ps}
              numColumns={2}
              renderItem={({item}) =>
              
              <TouchableOpacity style={{borderRadius:20,width:'45% ',height:"92%",alignItems:"center",backgroundColor:"#D0B014",marginTop:"5%" ,marginLeft:"2%",marginRight:"2%"}} onPress={() => navigation.navigate('productscreen',{data:item})}>
                <TouchableOpacity onPress={()=>onPress()}>
                <Image style={{width:20,height:20,marginLeft:100,}}
          source={img} ></Image></TouchableOpacity>
                <Image 
          style={{width:100,height:100 ,}}
          source={{uri:item.image}}
        ></Image>
                <Text style={{fontWeight:'bold',color:'black',alignItems:"center"}}> {item.name} </Text>
                <Text style={{fontWeight:'bold',color:'black',alignItems:"center"}} >$ {item.price} </Text>
                
                
                
                
              </TouchableOpacity>
              
    
            }
              />
              </View>
  <View style={{backgroundColor:'pink'}}>
  
  </View>
              
      </View>)
      
        
  
    );
          
  }
  
  