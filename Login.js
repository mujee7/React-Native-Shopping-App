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
import App3 from './TabbarItem';

export default function App({navigation}) {
    useEffect(() =>{
    
    
    });
    const handleSignUp = async () => {
      try{
    const user = await createUserWithEmailAndPassword(auth,email,password);
    setisSignedIn(true);
    navigation.navigate(App3);
    console.log(user);
    
      }catch{
        console.log("error");
    
      }
    }
    const SignOutUser = async () => {
    signOut(auth).then((re)=>{
      setisSignedIn(false);
      navigation.navigate("App");
    })
    
    }
    
    const handleLogin = async () => {
      try{
        
        const user = await signInWithEmailAndPassword(auth,email,password);
        setisSignedIn(true);
        navigation.navigate(App3);
        console.log(user);
          }catch{
            console.log("error");
        
          }
    }
      const [text, onChangeText] = React.useState("Useless Text");
      const [isSignedIn, setisSignedIn] = React.useState("");
      const [email, setemail] = React.useState("");
      const [password, setpassword] = React.useState("");
        return (
          
        <View style={styles.container,{backgroundColor:"#F7F7A2"}} >
        <View style={ 
        {backgroundColor: "#F7F7A2",
        height:250}}>
        <Image 
            style={{width:150,height:80,marginTop:100,marginLeft:80}}
            source={{
              uri: 'https://cdn.shopify.com/s/files/1/0590/1916/5868/files/Logo_Final_D-11-11_200x@2x.png?v=1630361073',
            }}
          />
          
      </View>
      <View style={ 
        {backgroundColor: "#F7F7A2",
        height:250}}>
          
          <TextInput
            style={styles.input}
            onChangeText={email=>setemail(email)}
            value={email}
            placeholder="Email?"
          />
          
          <Image 
            style={styles.svg}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/5087/5087592.png',
            }}
          />
          
          <TextInput 
          
            style={styles.input}
            onChangeText={password=>setpassword(password)}
            value={password}
            placeholder="Passwrord?"
            
            keyboardType="numeric"
          /> 
          <Image 
            style={styles.svg}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828391.png',
            }}
          />
          
          
          
          <View style={{width:250,marginLeft:50,marginTop:20}}>    
          <Button 
            title="Sign Up"
            color="#FFBA00"
            onPress={handleSignUp}
          />
          
    <View style={{width:250,marginTop:20}}>
    <Button 
            title="log in"
            color="#FFBA00"
            onPress={handleLogin}
          />
    </View>
    <View style={{width:250,marginTop:20}}>
    <Button 
            title="Sign Out"
            color="#FFBA00"
            onPress={SignOutUser}
          />
    </View>
    </View>
    </View>
    <View style={{backgroundColor :"",height:220}}>
    <Text style={{marginLeft:100,marginTop:150,color:"white"}}>
      Not A Member? <Text style={{color:"blue"}}
      onPress={() => Alert.alert('Button with adjusted color pressed')}>Sign Up</Text>
    </Text>
        </View>
        </View>
        
      
      
      
      
        
      );
      
    }
    