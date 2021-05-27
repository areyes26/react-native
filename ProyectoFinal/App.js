
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
    <View style={{flex:1, backgroundColor: "#30444E"}}>  
     <View style={{backgroundColor: "#22343C", height:"4%", width: "100%",}}></View>

     <View style={{backgroundColor: "blue", height:"10%",flexDirection:"row", }}>
        <View style={{width:"9.5%", marginLeft:"7.7%", height:"100%",justifyContent:"center"}}>
          <Button color="#3DD598" title="+" style={{height:"6%"}}></Button>
        </View>
        <View style={{width:"49%",marginLeft:"11.3%", height:"100%",justifyContent:"center" }}>
          <Button color="#3DD598" title="buscador" style={{height:"6%"}}></Button>
        </View>
        <View style={{width:"13%",marginLeft:"4%", height:"100%" ,justifyContent:"center"}}>
          <Button color="#3DD598" title="F" style={{height:"6%"}}></Button>
        </View>  
     </View>

     <View style={{backgroundColor: "yellow", height:"8%", width: "100%",}}>
       
     </View>

     <View style={{backgroundColor: "#22343C", height:"66%", width: "100%",}}></View>

     <View style={{backgroundColor: "#30444E", height:"12%", width: "100%", flexDirection: "row", justifyContent: "space-evenly", borderRadius: "25px 25px 0px 0xpx"}}>
       <Button color="#3DD598" title= "Hola" style={{width:"20%"}}></Button>
       <Button color="#3DD598" title={<Image style={{width: 66,height: 58}} source={require("./assets/Path.png")}/>} style={{width:"20%"}}></Button>
       <Button color="#3DD598" title= "Hola" style={{width:"%"}}></Button>
       
     </View>

    </View>
    );
  }
  }
  

;
