import React, { Component } from 'react';
import Asyncstorage from '@react-native-async-storage/async-storage';
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
              importedusers: []
          }
    }

    async storeData() {
        try{
         const resultado = await Asyncstorage.getItem('Users');
         this.setState({importedusers: JSON.parse(resultado)});
         console.log("Datos recuperados")
       }catch(e) {
    console.log(e)
       }
       } 


render (){

    const values = this.state.importedusers.map(item =>
        
        <Text key={item.login.uuid}>{item.name.first}</Text>
        )
    return (
    <View style={{flex:1, backgroundColor: "#22343C"}}> 
        <Text >Mostramos los valores </Text>
            {values}
            <Button color="#3DD598" onPress={this.storeData.bind(this) } title="Recuperar datos"></Button>
            <Button color="#3DD598" onPress={ () => this.setState({importedusers: []}) } title="Borrar datos"></Button>

        <View style = {{height:"11%", width:"100%", backgroundColor:"#30444E", borderRadius: "25 25 0 0", boxShadow: "0 1 14 #19282F", flexDirection:"row", justifyContent:"space-evenly", alignItems:"center"}}>
            {/* <TouchableOpacity onPress={ () => this.props.navigation.navigate("Papelera")} style = {style.botonTacho}> 
            <Image source={require("../images/botonTacho.png")} style = {style.iconoMenu}></Image> 
            </TouchableOpacity> */}
            <TouchableOpacity onPress={ () => this.props.navigation.navigate("Home")} style = {style.botonHome}> 
            <Image source={require("../images/botonHome.png")} style = {style.iconoMenu} ></Image>
            </TouchableOpacity>
            {/* <TouchableOpacity style = {style.botonNosotros}> 
            <Image source={require("../images/botonNosotros.png")} style = {style.iconoMenu2}></Image> 
            </TouchableOpacity> */}
        </View>
    </View>
        
    )
}


}

export {Screen_DeletedCard};
const style = StyleSheet.create({
  
    //Contenido About Us
  
    conteinerUs:{
      height:"89%",
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