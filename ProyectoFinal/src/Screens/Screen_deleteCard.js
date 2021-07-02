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

   
    

    async mostrarBorrados() {
      
     try{
       const resultado = await Asyncstorage.getItem('UsuariosBorrados');
       if(resultado!== null){
          this.setState({importedBorrados: JSON.parse(resultado)});
          console.log("Los contactos en papelera son")
          console.log(resultado);
       }else{
          console.log("No se encontraron contactos");
       }
     }catch(e) {
    console.log(e)
     }
     } 

  
  
 

     renderItem = ({item}) => {   
          return ( 
           <TouchableOpacity onPress={() => this.showModal(item)} style={{justifyContent: "space-evenly", flexDirection: "row"}}>
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

                  <TouchableOpacity style = {styles.delete} 
                  onPress={() => this.borrarTarjeta(item.login.uuid)}> 
                  <Text style={styles.textoDelete} > Borrar </Text>                    
                  </TouchableOpacity>
               </View >
           </View>
           </TouchableOpacity> 
            
          )}


keyExtractor = (item, idx) => idx.toString()
    
render (){
  let values = this.state.importedBorrados.map(item =>
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
               {/* Espacio Para que se vea bien en iphone 10 */}
               <View style={styles.generalBackground,{height:vh(8), width: "100%",}}></View>
                <View style={{height:vh(7)}}>
                    <Text style={{color:"white", fontSize:vw(5)}}>Sus contactos en papelera</Text>
                </View>


              <View style={{ height:vh(64), width: vw(100),justifyContent:"space-evenly"}}>
                

                     <FlatList 
                        data={this.state.importedBorrados} 
                       keyExtractor = { this.keyExtractor }
                       renderItem={ this.renderItem }
                       numColumns={2}
                    /> 

                   
              </View>
              
                   {/* ACA SE RECUPERAN LOS CONTACTOS IMPORTADOS */}
              <View style={styles.generalBackground,{height:vh(9),width:vw(100),flexDirection:"row", justifyContent:"space-evenly"}}>
                  <View style={styles.botonesCategorias}>
                      <Button color="#3DD598" title="Mostrar Papelera" onPress={this.mostrarBorrados.bind(this)}></Button>
                  </View>         
             </View>
             
              <View style = {{flex:1, height:vh(15), width:vw(100), backgroundColor:"#30444E", borderRadius: "25 25 0 0", boxShadow: "0 1 14 #19282F", flexDirection:"row", justifyContent:"space-evenly", alignItems:'center',}}>

                 <TouchableOpacity style = {styles.botonHome} onPress={ () => this.props.navigation.navigate("Home")}> 
                     <Image source={require("../assets/images/botonHome.png")}  style = {styles.iconoMenu} ></Image>
                 </TouchableOpacity>
  
              </View>
              
              </View>
    )
}


}

export {Screen_DeletedCard};
