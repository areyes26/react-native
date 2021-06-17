import React, { Component } from 'react';
import Asyncstorage from '@react-native-async-storage/async-storage';
import { getData } from '../api/RandomUsers'
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
} from 'react-native';

export class Screen_FlatList extends Component {
    constructor (){
          super();
          this.state = {
              users: [],
              activity: true,
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



    renderItem = ({item}) => {   
           return ( 
            <View style={styles.card}>
                 <View style={styles.vistaFoto}> 
                     <Image source={{uri: item.picture.large}}  style={styles.foto}></Image>
                 </View>
                 <View style={{flex: 1, alignItems: "center" } }>
                      <Text style={styles.nombre}>{item.name.first} {item.name.last}</Text>
                      <Text style={styles.email}> {item.email} </Text>
                      <Text style={styles.nacimiento}>Nacimiento: {item.dob.date}</Text>
                 </View>
                 <View style={{flex:0.5, alignItems: 'center'}}>
                   <TouchableOpacity style = {styles.delete}> 
                   <Text style={styles.textoDelete}> Delete </Text>                    
                   </TouchableOpacity>
                </View >
            </View>
             
           )}


keyExtractor = (item, idx) => idx.toString()







    render (){

        return(
         <View style={styles.container}>
               <View style={styles.generalBackground,{height:"4%", width: "100%",}}></View>

                <View style={styles.generalBackground,{height:"10%",flexDirection:"row", }}>
                 <View style={styles.botonMas}>
                     <Button color="#3DD598" title="+" styles={styles.botonesGeneral}
                     onPress={() => this.getDataFromApi() }/>
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
                   {this.state.activity 
                     ?<ActivityIndicator color="red" size={60} />
                  
                     :<FlatList 
                        data={this.state.users} 
                       keyExtractor = { this.keyExtractor }
                       renderItem={ this.renderItem }
                       numColumns={2}
                     />
                   }
              </View>

              <View style = {{flex:1, height:"12%", width:"100%", backgroundColor:"#30444E", borderRadius: "25 25 0 0", boxShadow: "0 1 14 #19282F", flexDirection:"row", justifyContent:"space-evenly", alignItems:'center',}}>
                  <TouchableOpacity style = {styles.botonTacho}> 
                     <Image source={require("../images/botonTacho.png")} style = {styles.iconoMenu}></Image> 
                 </TouchableOpacity>
                 <TouchableOpacity style = {styles.botonHome}> 
                     <Image source={require("../images/botonHome.png")} style = {styles.iconoMenu} ></Image>
                 </TouchableOpacity>
                 <TouchableOpacity style = {styles.botonNosotros}> 
                     <Image source={require("../images/botonNosotros.png")} style = {styles.iconoMenu2}></Image> 
                 </TouchableOpacity>
              </View>
              
         </View>
        )
    }

}

// picture.large

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#22343C",
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },

    //HEADER ARI
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
    
      //TARJETAS FRANCO
    
    card:{
        height: 300,
        width: 198,
        // flexDirection: 'column',
        
        margin: 5,
        flex:1,
        
        
      },
    
      nombre:{
        color: "white",
        fontSize: 20,
        //textAlign:"center", 
        marginTop:20      
      },

      email:{
        color: "#96A7AF",
        fontSize: 12,
        textAlign:"center",
        marginTop:5,
      },
      nacimiento:{
        color: "grey",
        fontSize: 9,
        textAlign:"center",
        marginTop:2,
      },
      vistaFoto:{
        marginTop: 15,
        alignItems:'center',
        
      },
      
      foto:{
        width: 150,
        height:150,
        borderRadius: 20,
      },

      delete:{
        backgroundColor:'#FF575F',
        width: 90,
        height: 25,
        borderRadius:20,
        justifyContent:'center',
        marginTop:10,
      },
    
      textoDelete:{
        color:"#FFFFFF",
        textAlign: 'center',
        fontSize: 14,
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