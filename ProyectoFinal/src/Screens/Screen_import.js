import React, { Component } from 'react';
import Asyncstorage from '@react-native-async-storage/async-storage';
import { getData } from '../api/RandomUsers'
import {
    View,
    Text,
    Button,
    Alert
} from 'react-native';

class Screen_Import extends Component {
    constructor (){
          super();
          this.state = {
              users: []
          }
    }


    componentDidMount() {
        getData()
      .then( (usuarios) => { 
       console.log(usuarios);
            this.setState({users: usuarios})
        })
    }


   async storeData() {
    try{
     const jsonUsers = JSON.stringify(this.state.users);
     await Asyncstorage.setItem("Users", jsonUsers);
     console.log("Datos almacenados");
     Alert.alert("datos almacenados correctamente.")
   }catch(e) {
console.log(e)
   }
   }




render (){

    const values = this.state.users.map(item =>
        
        <Text key={item.login.uuid}>{item.name.first}</Text>
        )
    return (
        <View>
            <Text>Mostramos las tarjetas del fetch para importar </Text>
            {values}
            <Button onPress={this.storeData.bind(this) } title="Guardar datos"></Button>
        </View>
    )
}


}

export {Screen_Import};