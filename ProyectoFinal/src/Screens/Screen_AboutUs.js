import React,{ Component } from 'react';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import {styles} from '../style/style';
import{
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,

} from "react-native";

import {Card2} from '../Components/Card2';
import {Card1} from '../Components/Card1';
import {Card3} from '../Components/Card3';
export  class Screen_AboutUS extends Component {


  render(){

    return (
    <View style={{flex:1, backgroundColor: "#22343C"}}>  

      {/* ESPACIO PARA BARRA IPHONE X */}
      <View style={styles.generalBackground,{height:"7%", width: "100%"}}></View>

      {/* TITULO SOBRE NOSOTROS */}
     <View style={styles.generalBackground,{height:"8%",flexDirection:"row", width:"100%",alignItems:"center",marginLeft:"9%"}}>
        <View >
         <Text style={{fontSize:vw(14), color:"white",marginHorizontal: 45}}>About Us</Text>
        </View>  
     </View>

     {/* ACA VAN LAS TARJETAS DE NOSOTROS*/}
     <View style={styles.conteinerUs}>
        <Card1/>
        <Card2/>
        <Card3/>
     </View>

      {/* FOOTER  */}
    <View style = {{height:"12%", width:"100%", backgroundColor:"#30444E", borderRadius: "25 25 0 0", boxShadow: "0 1 14 #19282F", flexDirection:"row", justifyContent:"space-evenly", alignItems:"center"}}>
        <TouchableOpacity onPress={ () => this.props.navigation.navigate("Home")} style = {styles.botonHome}> 
            <Image source={require("../assets/images/botonHome.png")} style = {styles.iconoMenu} ></Image>
        </TouchableOpacity>
    </View>
       
       
       
       
     

    </View>
    );
  }
  };

