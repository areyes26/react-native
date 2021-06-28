import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import {styles} from '../style/style';
import Asyncstorage from '@react-native-async-storage/async-storage';
import { usersSerched } from '../api/ApiBuscador'
import {
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
    Animated,
    Easing
  ,Alert
    
} from 'react-native';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
export class Screen_ContactosDeseados extends Component {
    constructor (){
          super();
          this.state = {
              users: [],
              numeroUsuarios:"",
              activity: true,
              showModal: false,
              selectItme: null,
              textHandler: '',
              texto: '',
              toValue: 1.4,
              
          }
    }



    buscarEnApi = (n) => {
        usersSerched(n)
        .then( (usuarios) => {
            usuarios = this.state.users.concat(usuarios)
            this.setState({users: usuarios});
            console.log(usuarios)
        })
    }

    async getDataFromApi(){
      this.setState({activity:true});
      let usuarios = await usersSerched();
      console.log(usuarios);
      this.setState({users: usuarios, activity: false});
    }

    showModal(item){
      this.setState({selectItem: item, showModal: true});
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
                 
            </View>
            </TouchableOpacity> 
             
           )}


keyExtractor = (item, idx) => idx.toString()


position = new Animated.Value(1);

topDown = () => {
  Animated.timing(this.position, {
    toValue: this.state.toValue,
    duration: 1000,
    easing: Easing.elastic(4),
    useNativeDriver: false
  } ).start();
  this.setState({toValue: this.state.toValue==1? 1.4 : 1})
}




async guardarUsuarios() {
    try{
      const jsonUsers = JSON.stringify(this.state.users);
      await Asyncstorage.setItem("Users", jsonUsers)
      console.log("Datos guardados correctamente")
      console.log(this.state.users);
      // Alert.alert("Se guardaron correctamente los datos ")
    } catch(e) {
      console.log(e)
    }
    }
  



    render (){

        return(
         <View style={styles.container}>

             {/* Espacio Para que se vea bien en iphone 10 */}
               <View style={styles.generalBackground,{height:vh(8), width: "100%",}}></View>
                <View style={{height:vh(4)}}>
                    <Text style={{color:"white", fontSize:vw(5)}}>Ingrese numero de contactos a buscar</Text>
                </View>
                {/* ACA VA LA INFO PARA BUSCAR LA CANTIDAD DE USUARIOS DESEADOS EN LA API */}
                <View style={styles.generalBackground,{flexDirection:"row",height:vh(6),width:vw(100), display:"flex", flexWrap:"wrap", justifyContent:"space-evenly"}}>
                  <View style={styles.buscador}>
                    <TextInput 
                    style={styles.buscadorInput}
                    keyboardType="numeric"
                    placeholder="INGRESE UN NUMERO"
                  
                    onChangeText={text => this.setState({numeroUsuarios: text})}
                    >
                    </TextInput>
                </View>
                {/* ACA SE GUARDA EL NUMERO DE TARJETAS BUSCADAS POR EL USUARIO */}
                  <View style = {styles.viewLupa}>
                    <TouchableOpacity style = {styles.lupa} onPress= { () => this.buscarEnApi(this.state.numeroUsuarios)}>
                        <Image source={require("../assets/images/lupa.png")} style = {styles.imagenLupa}></Image>                                   
                    </TouchableOpacity>
                  </View>
                
             </View>


              <View style={{ height:vh(62), width: vw(100),justifyContent:"space-evenly"}}>
                  <FlatList 
                     data={this.state.users} 
                    keyExtractor = { this.keyExtractor }
                    renderItem={ this.renderItem }
                    numColumns={2}
                    />
                {/* <ActivityIndicator color="red" size={60} /> */}
              </View>

            {/* BOTON GUARDAR CONTACTOS */}
            <View style={styles.generalBackground,{height:vh(8),width:vw(100),flexDirection:"row", justifyContent:"space-evenly"}}>
                  <View style={styles.botonesCategorias}>
                      <Button color="#3DD598" title="GUARDAR CONTACTOS" onPress={this.guardarUsuarios.bind(this)}></Button>
                  </View>         
             </View>
            
              {/* FOOTER */}
              <View style={{height:vh(11), width:"100%", backgroundColor:"#30444E", borderRadius: "25 25 0 0", boxShadow: "0 1 14 #19282F", flexDirection:"row", justifyContent:"space-evenly", alignItems:"center"}}>
            

                <TouchableOpacity onPress={ () => this.props.navigation.navigate("Home")} style={styles.botonHome}> 
                    <Image source={require("../assets/images/botonHome.png")} style = {styles.iconoMenu} ></Image>

                </TouchableOpacity>
            
           </View>
           </View>
        )
    }

}
