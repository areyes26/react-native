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
export  class Card2 extends Component {


position = new Animated.Value(0);
rotation = new Animated.Value(0);

topDown2 = () => {
  Animated.parallel([ 
Animated.timing(this.rotation, {
  toValue: 1,
  duration:1000, 
  useNativeDriver: true
})

]).start();
}



  render(){

const rotA = this.rotation.interpolate({
  inputRange: [0,1],
  outputRange: ['0deg', '180deg']
})
const rotB = this.rotation.interpolate({
  inputRange: [0,1],
  outputRange: ['180deg', '0deg']
})
    return (
    

{/* TARJETA CHACO */},
<View  style={{flex : 1}}> 
       
       <Animated.View  style={{
         marginTop: 20,
         marginHorizontal: 75,
         backgroundColor:"#30444E",
         width:"70%",
         borderRadius:25,
         height:"80%", 
          transform: [{translateY: this.position}, {rotateX: rotA}],
          backfaceVisibility: false,
        
          }}>
         <Image source={require("../images/chacoperfil.png")} style = {style.imageUs} ></Image>
         <TouchableOpacity  style={{flex: 1}}  onPress={this.topDown2}></TouchableOpacity>
       </Animated.View>
      

      
       <Animated.View style={{
        marginTop: 20,
        position: 'absolute',
        marginHorizontal: 50,
        marginRight: 200,
         backgroundColor:"#39444E",
         width:"70%",
         borderRadius:25,
         height:"80%", 
          transform: [{translateY: this.position}, {rotateX: rotB}],
          backfaceVisibility: false,
         
          }}>
          <TouchableOpacity  style={{flex:1 , flexDirection: 'column',
        alignItems: 'center',
       justifyContent: 'center',}}  onPress={this.topDown2}>
           <Text style={{color:"white", fontSize:vw(6)}}>Franco Mendelsohn</Text>
           
           <Image source={require("../images/puntoOnline.png")} style = {{width:vw(2), height:vw(2)}} ></Image> 
           <Text style={{color:"#96A7AF", fontSize:vw(3.4)}}>  fmendelsohn@udesa.edu.ar</Text>
        
           <Text style={{color:"#96A7AF", fontSize:vw(4)}}>Product Manager </Text>
           </TouchableOpacity>
       </Animated.View>
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