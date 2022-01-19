
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
import tab1 from './tab1';
import tab2 from './tab2';
import tab3 from './tab3';
import tab4 from './tab4';
import { connect } from 'react-redux';


 function Tabs(props){
    const [cart,setcart]=React.useState(0);
    return (
      
      <Tab.Navigator  screenOptions={{ headerShown: false,tabBarStyle: {backgroundColor:'#FFBA00', position: 'absolute',bottom:15,left:10,right:10,elevation:0,borderRadius:20,height:40, shadowOffset:{height:5,width:0} },tabBarActiveTintColor: '#FFBA00',tabBarShowLabel:false}}  >
          <Tab.Screen name="Todays" component={tab1} options={{
            tabBarIcon: ({ focused }) => {
          const image = focused 
          ? require('./home1.png') 
          : require('./home.png')
          return (
              <Image 
                  source={image}
                  style={styles.bottomTabIcon}
              />
          )}           
          }}/>
         
          <Tab.Screen name="Pending" component={tab3}  options={{
            tabBarIcon: ({ focused }) => {
          const image = focused 
          ? require('./search1.png') 
          : require('./search.png')
          return (
              <Image 
                  source={image}
                  style={styles.bottomTabIcon}
              />
          )
      }             
          }}/>
  
          <Tab.Screen name="Completed" component={tab4} options={{
            tabBarIcon: ({ focused }) => {
          const image = focused 
          ? require('./heart1.png') 
          : require('./heart.png')
          return (
              <Image 
                  source={image}
                  style={styles.bottomTabIcon}
              />
          )}            
          }}/>
          <Tab.Screen name="cart" component={tab2}  options={{
             tabBarIcon: ({ focused }) => {
          const image = focused 
          ? require('./bag1.png') 
          : require('./bag.png')
          return (
              <View style={{flex:1}}>
              <View style={{flex:0.2}}>
              <Text style={{borderRadius:10,height:20,width:20,backgroundColor:"#FFFE35",marginRight:5,fontWeight:"bold", position: 'absolute', right: 3,  justifyContent: 'center',textAlign:"center"}}>{props.cartItems.length}</Text>
              </View>
              <View style={{flex:0.8}}>
              <Image 
                  source={image}
                  style={styles.bottomTabIcon}
              ></Image>
              </View>
              </View>
          )}           
          }}
          />
          
          </Tab.Navigator>
          
    );
  }
  const mapStateToProps=(state)=>{
      return{
          cartItems:state
      }
  }
  export default connect(mapStateToProps)(Tabs);