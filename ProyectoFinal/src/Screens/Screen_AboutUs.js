import React,{ Component } from 'react';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import{
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,

} from "react-native";
export  class Screen_AboutUS extends Component {

  render(){
    return (
    <View style={{flex:1, backgroundColor: "#22343C"}}>  
     <View style={style.generalBackground,{height:"5%", width: "100%"}}></View>

     <View style={style.generalBackground,{height:"8%",flexDirection:"row", width:"100%",alignItems:"center",marginLeft:"9%"}}>
        <View style={{fontSize:vh(30), color:"white"}}>
         <Text> About Us </Text>
        </View>  
     </View>
     


     <View style={style.conteinerUs}>

{/* TARJETA ARI */}
      <View style={style.aboutUs}>
        
          <View class="fotoPerfil" style={{width:"25%",}}>
            <Image source={require("../images/ariPerfil.jpeg")} style = {style.imageUs} ></Image>
          </View>

          <View style={{width:"60%",justifyContent:"center"}}>
            <View Class="infoNosotros" style={{justifyContent:"space-evenly", height:"60%"}}> 
              <Text style={{color:"white", fontSize:vw(4.5)}}>Ariel Reyes</Text>
              <View style={{flexDirection:"row", alignItems:"center"}}>
              <Image source={require("../images/puntoOnline.png")} style = {{width:vw(2), height:vw(2)}} ></Image> 
              <Text style={{color:"#96A7AF", fontSize:vw(3.4)}}>  areyesabarca@udesa.edu.ar</Text>
            </View>
              <Text style={{color:"#96A7AF", fontSize:vw(4)}}>CEO</Text>
            </View>
          </View>

      </View>

{/* TARJETA CHACO */}
      <View style={style.aboutUs}>
        
        <View class="fotoPerfil" style={{width:"25%", }}>
          <Image source={require("../images/chacoperfil.png")} style = {style.imageUs} ></Image>
        </View>

        <View style={{width:"60%",justifyContent:"center"}}>
            <View Class="infoNosotros" style={{justifyContent:"space-evenly", height:"60%"}}> 
              <Text style={{color:"white", fontSize:vw(4.5)}}>Franco Mendelsohn</Text>
              <View style={{flexDirection:"row", alignItems:"center"}}>
              <Image source={require("../images/puntoOnline.png")} style = {{width:vw(2), height:vw(2)}} ></Image> 
              <Text style={{color:"#96A7AF", fontSize:vw(3.4)}}>  fmendelsohn@udesa.edu.ar</Text>
            </View>
              <Text style={{color:"#96A7AF", fontSize:vw(4)}}>Producto Manager</Text>
            </View>
          </View>

      </View>

{/* TARJETA NICO */}
      <View style={style.aboutUs}>
        
        <View class="fotoPerfil" style={{width:"25%",}}>
          <Image source={require("../images/nicoPerfil.png")} style = {style.imageUs} ></Image>
        </View>

        <View style={{width:"60%",justifyContent:"center"}}>
            <View Class="infoNosotros" style={{justifyContent:"space-evenly", height:"60%"}}> 
              <Text style={{color:"white", fontSize:vw(4.5)}}>Nicolas Cappone</Text>
              <View style={{flexDirection:"row", alignItems:"center"}}>
              <Image source={require("../images/puntoOnline.png")} style = {{width:vw(2), height:vw(2)}} ></Image> 
              <Text style={{color:"#96A7AF", fontSize:vw(3.4)}}>  ncaponne@udesa.edu.ar</Text>
            </View>
              <Text style={{color:"#96A7AF", fontSize:vw(4)}}>Desarollo Web</Text>
            </View>
          </View>

      </View>


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
    height:"76%",
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
    flex:1,
    width:null,
    height:null,
    resizeMode:"contain",
    
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