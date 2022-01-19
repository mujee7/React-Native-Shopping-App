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
import NumericInput from 'react-native-numeric-input';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

 function HomeScreen3(props) {
    const[number,setnumber]=React.useState()
    const [data, setdata] = React.useState(props.cartItems);
    const [price, setprice] = React.useState(0);
    const [quantity, setquantity] = React.useState(0);
    const dispatch = useDispatch()
    useEffect(()  =>{
      
      setvalue();
    },[]);

    const setvalue=()=>{
     for(var i=0;i<=data.length-1;i++)
     {
         setprice(price+data[i].price)
     }

    }
    const onchangevalue=(number,item)=>{
        for(var i=0;i<=data.length-1;i++){
            if (item.key===data[i].key)
            {
                data[i].price==item.price*number;
            }
    
        }
    setvalue();
    console.log(data)
    }
    return (
      <View style={{flex:10,backgroundColor:"#E8A034",}}>
      <View>     CartScreen
     </View>
     <View>
     <FlatList
              
              data={props.cartItems}
              numColumns={1}
              renderItem={({item}) =>
              
              <TouchableOpacity style={{borderRadius:50,alignItems:"center",backgroundColor:"#E4E5AC",marginTop:"5%" ,marginLeft:"2%",marginRight:"2%"}} >
           <View style={{flex:5,flexDirection:'row'}}> 
            <View style={{flex:3}}>
            <Image 
        style={{width:100,height:100 ,}}
        source={{uri:item.image}}
      ></Image>
      
              <Text style={{fontWeight:'bold',color:'black',alignItems:"center"}}> {item.name} </Text>
              <Text style={{fontWeight:'bold',color:'black',alignItems:"center"}} >$ {item.price} </Text>
            </View>
              
              
            
              <View style={{flex:2,}}>
              <View style={{flex:1,}}>
  <TouchableOpacity style={{backgroundColor:"#FFBA00",width:80,height:50,borderRadius:20,marginTop:10}} onPress={() => dispatch({ type:'ADD_TO_CART',payload:item})} ><h5 style={{color:"black",fontWeight:"bold"}} >Remove Item</h5></TouchableOpacity>
            </View>
            <View style={{flex:1,}}>
            <TextInput 
            style={{width:40,height:40,backgroundColor:"white",borderRadius:20}}
            onChangeText={number=>onchangevalue(number,item)}
            placeholder="1"
            value={number}
            keyboardType="numeric"
          /> 
            </View>
            </View>
            </View>
            </TouchableOpacity>
              
              
    
            }
              />
              </View>
              <View>
                  <Text>Total Price= ${price}</Text>
              </View>
  </View>
    );
  }
  const mapStateToProps=(state)=>{
    console.log('hi');
    console.log(state);
    return{
        cartItems:state
    }
}
export default connect(mapStateToProps,null)(HomeScreen3);