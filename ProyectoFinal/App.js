
import React,{ Component } from 'react';
import{
  Text,
  View,
  Button,
  Image,
  StyleSheet,

} from "react-native";
export default class App extends Component {

  render(){
    return (
    <View style={{flex:1, backgroundColor: "#22343C"}}>  
     <View style={style.generalBackground,{height:"4%", width: "100%",}}></View>

     <View style={style.generalBackground,{height:"10%",flexDirection:"row", }}>
        <View style={style.botonMas}>
          <Button color="#3DD598" title="+" style={style.botonesGeneral}></Button>
        </View>
        <View style={style.buscador}>
          <Button color="#3DD598" title="buscador" style={style.botonesGeneral}></Button>
        </View>
        <View style={style.filtros}>
          <Button color="#3DD598" title="F" style={style.botonesGeneral}></Button>
        </View>  
     </View>

     <View style={style.generalBackground,{height:"8%",flexDirection:"row", justifyContent:"space-evenly"}}>
        <View style={style.botonesCategorias}>
          <Button color="#3DD598" title="All" style={style.botonesGeneral}></Button>
        </View>
        <View style={style.botonesCategorias}>
          <Button color="#3DD598" title="Edad" style={style.botonesGeneral}></Button>
        </View>
        <View style={style.botonesCategorias}>
          <Button color="#3DD598" title="A to Z" style={style.botonesGeneral}></Button>
        </View>
        <View style={style.botonesCategorias}>
          <Button color="#3DD598" title="Z to A" style={style.botonesGeneral}></Button>
        </View>
     </View>

     <View style={{ height:"66.5%", width: "100%",}}>
      /*Aca Va lo de las tarjetas */

     </View>

     <View style={style.generalBackground,{backgroundColor: "#30444E", height:"11.5%", width: "100%", flexDirection: "row", justifyContent: "space-evenly", borderTopLeftRadius: "25px", borderTopRightRadius: "25px" }}>
       <Button color="#3DD598" title= "Hola" style={{width:"20%"}}></Button>
       <Button color="#3DD598" title={<Image style={{width: 66,height: 58}} source={require("./assets/Path.png")}/>} style={{width:"20%"}}></Button>
       <Button color="#3DD598" title= "Hola" style={{width:"%"}}></Button>
       
     </View>

    </View>
    );
  }
  };

  const style = StyleSheet.create({
  botonesCategorias:{
    height:"100%",
    justifyContent:"center",
  },
  botonMas:{
    width:"9.5%",
    marginLeft:"7.7%",
    height:"100%",
    justifyContent:"center"
  },
  buscador:{
    width:"49%",
    marginLeft:"11.3%",
    height:"100%",
    justifyContent:"center"
  },
  filtros:{
    width:"13%",
    marginLeft:"4%",
    height:"100%",
    justifyContent:"center"
  },
  botonesGeneral:{
    height:"6%"
  },
  generalBackground:{
    backgroundColor: "#22343C"
  }
  })