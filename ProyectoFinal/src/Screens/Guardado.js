import React, { Component } from 'react';
import Asyncstorage from '@react-native-async-storage/async-storage';
import {
    View,
    Text,
    Button
} from 'react-native';

class Guardado extends Component{
    constructor(){
        super();
        this.state= {
            importedUsers:[]        
        }
    }

    async mostrarUsuarios(){
        try{
            const resultado = await Asyncstorage.getItem('@Favoritos')
            this.setState({importedUsers: JSON.parse(resultado)})
            console.log(resultado);
        }catch(e){
            console.log(e);
        }
    }

    render (){
        const {item} = this.props
        const values = this.state.importedUsers.map(item =>
            
            <Text key={item.login.uuid}>{item.name.first}</Text>
            )
        return (
            <View>
                <Text>Recuperamos los Datos</Text>
                {values}
                <Button onPress={this.mostrarUsuarios.bind(this) } title="recuperar datos"></Button>
            </View>
        )
    }
}
export {Guardado};