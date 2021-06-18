import React, { Component } from 'react';
import Asyncstorage from '@react-native-async-storage/async-storage';
import {
    View,
    Text,
    Button
} from 'react-native';

class Screen_ViewImportedCard extends Component {
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
        <View>
            <Text>Mostramos los valores </Text>
            {values}
            <Button onPress={this.storeData.bind(this) } title="Recuperar datos"></Button>
            <Button onPress={ () => this.setState({importedusers: []}) } title="Borrar datos"></Button>
        </View>
    )
}


}

export {Screen_ViewImportedCard};