
import React,{ Component } from 'react';
import{
  Text,
  View,
  Button,
  Image,

} from "react-native";
export default class App extends Component {

  render(){
    return (
    <View style={{flex:1, backgroundColor: "#22343C"}}>  
     <View style={{backgroundColor: "#22343C", height:"4%", width: "100%",}}></View>

     <View style={{backgroundColor: "blue", height:"10%",flexDirection:"row", }}>
        <View style={{width:"9.5%", marginLeft:"7.7%", height:"100%",justifyContent:"center"}}>
          <Button color="#3DD598" title="+" style={{height:"6%", }}></Button>
        </View>
        <View style={{width:"49%",marginLeft:"11.3%", height:"100%",justifyContent:"center" }}>
          <Button color="#3DD598" title="buscador" style={{height:"6%", }}></Button>
        </View>
        <View style={{width:"13%",marginLeft:"4%", height:"100%" ,justifyContent:"center"}}>
          <Button color="#3DD598" title="F" style={{height:"6%", }}></Button>
        </View>  
     </View>

     <View style={{backgroundColor: "yellow", height:"8%",flexDirection:"row", justifyContent:"space-evenly"}}>
        <View style={{ height:"100%",justifyContent:"center"}}>
          <Button color="#3DD598" title="All" style={{height:"6%", }}></Button>
        </View>
        <View style={{ height:"100%",justifyContent:"center" }}>
          <Button color="#3DD598" title="Edad" style={{height:"6%", }}></Button>
        </View>
        <View style={{ height:"100%" ,justifyContent:"center"}}>
          <Button color="#3DD598" title="A to Z" style={{height:"6%", }}></Button>
        </View>
        <View style={{ height:"100%" ,justifyContent:"center"}}>
          <Button color="#3DD598" title="Z to A" style={{height:"6%", }}></Button>
        </View>
     </View>

     <View style={{backgroundColor: "#22343C", height:"66.5%", width: "100%",}}></View>

     <View style={{backgroundColor: "#30444E", height:"11.5%", width: "100%", flexDirection: "row", justifyContent: "space-evenly", borderTopLeftRadius: "25px", borderTopRightRadius: "25px" }}>
       <Button color="#3DD598" title= "Hola" style={{width:"20%"}}></Button>
       <Button color="#3DD598" title={<Image style={{width: 66,height: 58}} source={require("./assets/Path.png")}/>} style={{width:"20%"}}></Button>
       <Button color="#3DD598" title= "Hola" style={{width:"%"}}></Button>
       
     </View>

    </View>
    );
  }
  }
  

;
