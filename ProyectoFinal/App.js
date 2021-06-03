
import React,{ Component } from 'react';
import { Screen_Import } from './src/images/Screens/Screen_import'
import { Screen_ViewImportedCard } from './src/images/Screens/Screen_ViewImportedCard'
import { Screen_FiatList } from './src/images/Screens/Screen_FlatList'

import{
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,

} from "react-native";
export default class App extends Component {

  render(){
    return (
    <View style={{flex:1, backgroundColor: "#22343C"}}>  
     <View style={styles.generalBackground,{height:"4%", width: "100%",}}></View>

     <View style={styles.generalBackground,{height:"10%",flexDirection:"row", }}>
        <View style={styles.botonMas}>
          <Button color="#3DD598" title="+" styles={styles.botonesGeneral}></Button>
        </View>
        <View style={styles.buscador}>
          <Button color="#3DD598" title="buscador" style={styles.botonesGeneral}></Button>
        </View>
        <View style={styles.filtros}>
          <Button color="#3DD598" title="F" style={styles.botonesGeneral}></Button>
        </View>  
     </View>

     <View style={styles.generalBackground,{height:"8%",flexDirection:"row", justifyContent:"space-evenly"}}>
        <View style={styles.botonesCategorias}>
          <Button color="#3DD598" title="All" style={styles.botonesGeneral}></Button>
        </View>
        <View style={styles.botonesCategorias}>
          <Button color="#3DD598" title="Edad" style={styles.botonesGeneral}></Button>
        </View>
        <View style={styles.botonesCategorias}>
          <Button color="#3DD598" title="A to Z" style={styles.botonesGeneral}></Button>
        </View>
        <View style={styles.botonesCategorias}>
          <Button color="#3DD598" title="Z to A" style={styles.botonesGeneral}></Button>
        </View>
     </View>

      <View style={{ height:"66.5%", width: "100%",}}>
     
       <ScrollView>
         

         <View style = {{flex:2, flexDirection:'row', }}>
            <View style = {styles.tarjeta}>
              <View style={styles.vistaFoto}> 
               <Image source={require("./src/images/foto.jpeg")} style={styles.foto}></Image>
             </View>
             <View style={{flex: 1,justifyContent: "center" } }>
              <Text style={styles.nombre}> Nombre Apellido</Text>
              <Text style={styles.email}> ejemplo@gmail.com </Text>
              <Text style={styles.nacimiento}>Nacimiento: 03/05/2001</Text>
              </View>
             <View style={{flex:0.5, }}>
               <TouchableOpacity style = {styles.delete}> 
                <Text style={styles.textoDelete}> Delete </Text>                    
               </TouchableOpacity>
             </View >
            </View>

            <View style = {styles.tarjeta}>
              <View style={styles.vistaFoto}> 
               <Image source={require("./src/images/foto.jpeg")} style={styles.foto}></Image>
             </View>
             <View style={{flex: 1,justifyContent: "center" } }>
              <Text style={styles.nombre}> Nombre Apellido</Text>
              <Text style={styles.email}> ejemplo@gmail.com </Text>
              <Text style={styles.nacimiento}>Nacimiento: 03/05/2001</Text>
              </View>
             <View style={{flex:0.5, }}>
               <TouchableOpacity style = {styles.delete}> 
                <Text style={styles.textoDelete}> Delete </Text>                    
               </TouchableOpacity>
             </View >
            </View>



         </View>
        </ScrollView>
     </View>

     <View style = {{flex:1, height:"12%", width:"100%", backgroundColor:"#30444E", borderRadius: "25 25 0 0", boxShadow: "0 1 14 #19282F", flexDirection:"row", justifyContent:"space-evenly", }}>
        <TouchableOpacity style = {styles.botonTacho}> 
          <Image source={require("./src/images/botonTacho.png")} style = {styles.iconoMenu}></Image> 
        </TouchableOpacity>
        <TouchableOpacity style = {styles.botonHome}> 
          <Image source={require("./src/images/botonHome.png")} style = {styles.iconoMenu} ></Image>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.botonNosotros}> 
          <Image source={require("./src/images/botonNosotros.png")} style = {styles.iconoMenu2}></Image> 
        </TouchableOpacity>
     </View>

    </View>
    );
  }
  };

  const styles = StyleSheet.create({
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
  },
  
//Franco menu

botonHome:{
    backgroundColor: "#3DD598",
    borderRadius: 50,
    width: 60,
    height: 60,
    marginTop: 15,
    justifyContent: 'center',
    paddingLeft: 20,
    marginRight:20,
    marginLeft:20
  },

  iconoMenu:{
    width:20,
    height:20,
  },

  botonTacho:{
    width: 60,
    height: 60,
    marginTop: 15,
    justifyContent: 'center',
    marginLeft:40

  },

  botonNosotros:{
    width: 60,
    height: 60,
    marginTop: 15,
    justifyContent: 'center',
    marginLeft:30

  },

  iconoMenu2:{
    width:30,
    height:30,
    marginTop:5,
  },

  //Franco Tarjetas
 

  flex1:{
    flex: 1,
  },

  

  tarjeta:{
    height: 300,
    width: 300,
    flex: 1,
    flexDirection: 'column',
    
  },

  vistaFoto:{
    marginTop: 15,
    marginLeft: 30,
    
  },
  
  foto:{
    width: 150,
    height: 150,
    borderRadius: 20,
  },

  nombre:{
    color: "white",
    fontSize: 20,
    textAlign:"center",
   
  },

  email:{
    color: "#96A7AF",
    fontSize: 18,
    textAlign:"center",
  },
  nacimiento:{
    color: "grey",
    fontSize: 12,
    textAlign:"center",
  },

  delete:{
    backgroundColor:'#FF575F',
    width: 90,
    height: 25,
    borderRadius:20,
    marginLeft: 60,
  
    
  },
  textoDelete:{
    color:"#FFFFFF",
    textAlign: 'center',
    fontSize: 14,
    marginTop: 5,
  },
  })