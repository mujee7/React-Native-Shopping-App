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

export default function HomeScreen2({navigation}) {

    const[text,settext]=React.useState()
    const [loading,setloading]=React.useState(true);
      const [banners,setbanners]=React.useState([]);
      const [ps,setproduct]=React.useState([]);
      const [img,setimg]=React.useState(require('./heart.png'));
      const [press,setpress]=React.useState(true);
      useEffect(()  =>{
        
        getData();
       },[]);
       const getData= async() =>{
        const products= collection(db,'products');
        const productsSnapshot= await getDocs(products);
        const productsList=productsSnapshot.docs.map(doc=> doc.data());
        setproduct(productsList);
        
        console.log(productsList);
        setloading(false);
       
       }
      const searchUser=(text)=>{
        setbanners(ps.filter(i=>i.name.toLowerCase().includes(text.toLowerCase())));
      }
       
    
    
      return (
        <View style={{ flex: 10,}}>
        <View style={{ flex: 1,flexDirection:'row' }}>
        <View style={{ flex: 0.2, alignItems: 'flex-end', justifyContent: 'flex-end',flexDirection:'row' }}>
        <Image 
        style={{width:20,height:20,marginBottom:30}}
        source={require('./search.png')}
      />
        </View>
          <View style={{ flex: 0.8, alignItems: 'flex-start', justifyContent: 'flex-start',flexDirection:'row' }}>
          <TextInput 
            style={{width:200,height:35,borderRadius:20}}
            onChangeText={text=>searchUser(text)}
            value={text}
            placeholder="Products"
            
            
          /> 
          </View>
          </View>
    <View style={{ flex: 8,backgroundColor:"orange" }}>
    <FlatList 
              
              data={banners}
              numColumns={1}
              renderItem={({item}) =>
              
              <TouchableOpacity style={{width:'100% ',height:"92%",alignItems:"center",backgroundColor:"#AD903A",}} onPress={() => navigation.navigate('productscreen',{data:item})}>
                <TouchableOpacity onPress={()=>navigation.navigate('App3',{data:item})}>
                <Image style={{width:20,height:20,marginLeft:100,}}
          source={img} ></Image></TouchableOpacity>
                <Image 
          style={{width:100,height:100 ,}}
          source={{uri:item.image}}
        ></Image>
                <Text style={{fontWeight:'bold',color:'black',alignItems:"center"}}> {item.name} </Text>
                <Text style={{fontWeight:'bold',color:'black',alignItems:"center"}} > ${item.price} </Text>
                
                
                
                
              </TouchableOpacity>
              
    
            }
              />
    </View>
        </View>
      );
    }
    