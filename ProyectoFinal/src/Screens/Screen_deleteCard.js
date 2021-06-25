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
       this.setState({importedBorrados: JSON.parse(resultado)});
       console.log("Los contactos en papelera son")
       console.log(resultado);
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
  const values = importedBorrados.map(item =>
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
              
              <Modal visible={this.state.showModal} animationType='slide' transparent={true}>
                <View style={styles.modalContainer}>
                  <View style={styles.modal}>
                  { this.state.selectItem  &&
                  
                  <>
                  <View style={styles.modalCancel}>
                    <Text onPress={() => this.setState({showModal:false})} style={styles.modalCancelTexto}>
                        X
                    </Text>
                  </View> 
                  <View style={styles.modalCard}>
                  <TouchableOpacity  style={{}}  onPress={this.topDown}>
                    <Animated.View style={{ alignItems:'center', transform: [{scale: this.position}]}}> 
               
                  <Image source={{uri: this.state.selectItem.picture.large}}  style={styles.modalFoto}></Image>
                 
                  </Animated.View>
                  
                 </TouchableOpacity>


                   <View style={{flex: 1, alignItems: "center" } }>
                   <Text style={styles.modalNombre}>{this.state.selectItem.name.first} {this.state.selectItem.name.last}</Text>
                   <View style={styles.modalMasInfo}>
                   <Text style={styles.modalMasTexto}>Email: {this.state.selectItem.email} </Text>
                   <Text style={styles.modalMasTexto}>Nacimiento: {this.state.selectItem.dob.date}</Text>
                    
                   <Text style={styles.modalMasTexto}>País: {this.state.selectItem.location.country}</Text>
                   <Text style={styles.modalMasTexto}>Ciudad/Estado: {this.state.selectItem.location.city} - {this.state.selectItem.location.state}</Text>
                   <Text style={styles.modalMasTexto}>Dirección: {this.state.selectItem.location.street.name} {this.state.selectItem.location.street.number}</Text>
                   <Text style={styles.modalMasTexto}>Codigo postal: {this.state.selectItem.location.postcode}</Text>
                   <Text style={styles.modalMasTexto}>Fecha de registro: {this.state.selectItem.registered.date}</Text>
                   <Text style={styles.modalMasTexto}>Telefono: {this.state.selectItem.phone}</Text>
                   <Text style={styles.modalMasTexto}>Celular: {this.state.selectItem.cell}</Text>

                   <View style={{height:100}}>
                   <ScrollView style={{height:100, width:'90%'}}>
                   <Text style={styles.modalMasTextoComentario}>Coment: {this.state.importedcomentarios}  </Text>
                  </ScrollView>
                  </View>
                   </View>
                  </View>
              
                 <View style={styles.modalBotones}>

                  <View>
                  <TextInput style={styles.modalInput} onChangeText={text => this.setState({textHandler: text})}></TextInput>
                  </View>
                  <View >
                  <TouchableOpacity style = {styles.modalGuardado} onPress={this.storeData.bind(this)}>  
                  <Text>Guardar datos</Text>                                 
                  </TouchableOpacity>
                  </View>
                  <View >
                  <TouchableOpacity style = {styles.modalEdit} onPress={this.getData1.bind(this)}>  
                  <Image source={require("../assets/images/enviar.png")}></Image>                                   
                  </TouchableOpacity>
                  </View>

                  <TouchableOpacity style = {styles.modalDelete} onPress={() => this.deleteContact(this.state.selectItem.login.uuid)}> 
                  <Image source={require("../assets/images/tachoblanco.png")}  ></Image>                 
                  </TouchableOpacity>
                  </View >

                 </View>
                  
                  </>
                   }
                   </View>
                </View>
              </Modal>
         </View>
    )
}


}

export {Screen_DeletedCard};
