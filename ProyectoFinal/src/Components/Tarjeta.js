import React, { Component } from 'react';
import Asyncstorage from '@react-native-async-storage/async-storage';
import { getData } from '../api/RandomUsers';
import {styles} from '../style/style';
import {
    View,
    Text,
    Button,
    ScrollView,
} from 'react-native';


class Tarjeta extends Component {
    constructor (){
          super();
          this.state = {
              users: [],
              activity: true,
              showModal: false,
              selectItme: null,
              textHandler: '',
              texto: '',
              toValue: 1.4,
              importedcomentarios: [],
              importedBorrados: [],
              borrados:'',
          }
    }


    


   async storeData() {
    try{
     const jsonUsers = JSON.stringify(this.state.users);
     await Asyncstorage.setItem("Users", jsonUsers)
     console.log("Datos almacenados")
   }catch(e) {
console.log(e)
   }
   }

   

    componentDidMount() {
      getData()
      .then( (usuarios) => { 
       console.log(usuarios);
       this.setState({users: usuarios, activity: false});  
    
    })
    }

    async getDataFromApi(){
      this.setState({activity:true});
      let usuarios = await getData();
      console.log(usuarios);
      this.setState({users: usuarios, activity: false});
    }
    async getUserData() {
      try{
       const resultado = await Asyncstorage.getItem('Users');
       this.setState({users: JSON.parse(resultado)});
       console.log("Datos de los contactos recuperados")
       console.log(this.state.users)
     }catch(e) {
    console.log(e)
     }
     } 
     
    showModal(item){
      this.setState({selectItem: item, showModal: true});
    }



render (){
    const {users, id} = this.props
return(
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
)}


}

export {Tarjeta};