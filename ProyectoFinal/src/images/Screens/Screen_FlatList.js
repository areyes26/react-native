import React, { Component } from 'react';
import Asyncstorage from '@react-native-async-storage/async-storage';
import { getData } from '../api/RandomUsers'
import {
    View,
    Text,
    Button,
    FlatList,
    StyleSheet
} from 'react-native';

class Screen_FlatList extends Component {
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
       this.setState({users: usuarios});  
    
    })
    }



    renderItem = ({item}) => {   
           return ( <Text>{item.name.first}</Text> )}


keyExtractor = (item, idx) => idx.toString()







    render (){

        return(
            <View>
                <FlatList data={this.state.users} 
                keyExtractor = { this.keyExtractor }
                renderItem={ this.renderItem }
                >

                </FlatList>
            </View>
        )
    }

}