import React,{ Component } from 'react';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
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
     <View style={style.generalBackground,{height:"7%", width: "100%"}}></View>

     <View style={style.generalBackground,{height:"8%",flexDirection:"row", width:"100%",alignItems:"center",marginLeft:"9%"}}>
        <View >
         <Text style={{fontSize:vw(14), color:"white",marginHorizontal: 45}}>About Us</Text>
        </View>  
     </View>
     
     <View style={style.conteinerUs}>

<Card1/>
<Card2/>
<Card3/>
     </View>

     <View style = {{height:"11%", width:"100%", backgroundColor:"#30444E", borderRadius: "25 25 0 0", boxShadow: "0 1 14 #19282F", flexDirection:"row", justifyContent:"space-evenly", alignItems:"center"}}>
        
        <TouchableOpacity onPress={ () => this.props.navigation.navigate("Home")} style = {style.botonHome}> 
          <Image source={require("../images/botonHome.png")} style = {style.iconoMenu} ></Image>
        </TouchableOpacity>
     </View>
       
       
       
       
     

    </View>
    );
  }
  };

  const style = StyleSheet.create({
  
  //Contenido About Us

  conteinerUs:{
    height:"74%",
    width:"82%",
    display:"flex",
    flexWrap:"wrap",
    marginLeft:"9%",
    justifyContent:"space-evenly"
  },
  aboutUs:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    backgroundColor:"#30444E",
    width:"100%",
    borderRadius:25,
    height:"23%"
  },
  imageUs:{
    width: vw(35),
    height: vh(18),
   marginLeft: 10,
   marginRight: 10,
   marginTop: 5,
   

   borderRadius: 25,
   
  
    
    
  },  

  //CSS general

  generalBackground:{
    backgroundColor: "#22343C"
  },

  //Franco menu

  botonHome:{
    backgroundColor: "#3DD598",
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems:'center',
  },

  iconoMenu:{
    width:20,
    height:20,
  },

  botonTacho:{
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems:'center',
    

  },

  botonNosotros:{
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems:'center',

  },

  iconoMenu2:{
    width:30,
    height:30,
    
  },
  })