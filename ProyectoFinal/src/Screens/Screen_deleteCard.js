import React, { Component } from 'react';
import Asyncstorage from '@react-native-async-storage/async-storage';
import { getLocal } from './Screen_FlatList'
import { Alert, Dimensions } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import {styles} from '../style/style';
import { getData } from '../api/RandomUsers';
import{
    View,
    Text,
    Button,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    Modal,
    TextInput,
    ScrollView,

} from 'react-native';

class Screen_DeletedCard extends Component {
    constructor (){
          super();
          this.state = {
            importedBorrados: []
          }
    }

   
    

    async storeData() {
      
      try{
       const resultado = await Asyncstorage.getItem('UsuariosBorrados');
       this.setState({importedBorrados: JSON.parse(resultado)});
       console.log("Datos borrados")
     }catch(e) {
    console.log(e)
     }
     } 

  
  
 


    
render (){
  const values = this.state.importedBorrados.map(item =>
    <View style={styles.card}>
              
                 <View style={styles.vistaFoto}> 
                  
                     <Image source={{uri: item.picture.large}}  style={styles.foto}></Image>
                 </View>
                 <View style={{height:vw(10),width:"100%",fontSize:"100%",justifyContent:"space-around"} }>
                      <Text style={styles.nombre}>{item.name.first} {item.name.last}</Text>
                 </View>
                 <View style={{height:vw(7),width:"100%",fontSize:"100%"} }>
                      <Text style={styles.email}>{item.email}</Text>
                 </View>
                 <View style={{height:vw(7),width:"100%",fontSize:"100%"} }>
                      <Text style={{color:"grey", fontSize:vw(3.5), textAlign:"center"}}>Fecha de Nacimiento</Text>
                      <Text style={styles.nacimiento}>{item.dob.date}</Text>
                 </View>
                 
                 <View style={{alignItems: 'center',height:vw(10), marginTop:vw(1)}}>

                  
                </View >
                </View >
    )
    return (
      <View style={styles.container}>
      <View style={styles.generalBackground,{height:"2%", width: "100%",}}></View>
     <View style={styles.generalBackground,{flexDirection:"row",height:vh(8),width:vw(100), display:"flex", flexWrap:"wrap", justifyContent:"space-evenly"}}>
{values}
<View >
                  <TouchableOpacity style = {styles.modalEdit} onPress={this.storeData.bind(this)}>  
                  <Image source={require("../assets/images/enviar.png")}></Image>                                   
                  </TouchableOpacity>
                  </View>

    </View></View>
    )
}


}

export {Screen_DeletedCard};
