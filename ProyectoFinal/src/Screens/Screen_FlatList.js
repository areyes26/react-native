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
              showModal: false,
              selectItme: null,
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

    showModal(item){
      this.setState({selectItem: item, showModal: true});
    }


    renderItem = ({item}) => {   
           return ( 
            <TouchableOpacity onPress={ () => this.showModal(item)}>
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
            </TouchableOpacity> 
             
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
              
                    <View style={styles.modalVistaFoto}> 
               
                  <Image source={{uri: this.state.selectItem.picture.large}}  style={styles.modalFoto}></Image>
                  </View>
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

                   </View>
                  </View>
              
                 <View style={styles.modalBotones}>

                  <TouchableOpacity style = {styles.modalDelete}> 
                  <Text style={styles.modalTextoDelete}> Borrar </Text>                    
                  </TouchableOpacity>
                  <TouchableOpacity style = {styles.modalEdit}> 
                  <Text style={styles.modalTextoDelete}> Editar </Text>                    
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

  //modal

  modalContainer:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
  

  },

  modal:{
    height:'80%',
    width:'100%',
    backgroundColor:'#2d4854',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
 
  },
  
  modalCancel:{
    width:30,
    height:30,
    borderRadius:100,
    backgroundColor:'#FF575F',
    alignItems:'center',
    marginTop: 10,
    justifyContent:'center',
    marginLeft: 320,


  },

  modalCancelTexto:{
    color: 'black',
    fontWeight:'bold',
    fontSize:20,
    
    
  },

  // Diseño MODAL
  modalCard:{
    
    width: "100%",
     flexDirection: 'column',
    flex:1,
    
    
  },

  modalNombre:{
    color: "white",
    fontSize: 30,
    //textAlign:"center", 
    marginTop:20,
    marginBottom:20,
   
  },
  
  modalMasInfo:{
  
  },

  modalMasTexto:{
    color:'#e3e3e3',
    fontSize: 18,
    marginTop:10,
  },
  

  modalVistaFoto:{

    alignItems:'center',
    
  },
  
  modalFoto:{
    width: 220,
    height:220,
    borderRadius: 20,
  },

  modalBotones:{
    alignItems: 'flex-end',
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 30,
    
  },

  modalDelete:{
    backgroundColor:'#FF575F',
    width: 130,
    height: 60,
    borderRadius:20,
    justifyContent:'center',

  },

  modalTextoDelete:{
    color:"#FFFFFF",
    textAlign: 'center',
    fontSize: 20,
    fontWeight:'700'
  },

  modalEdit:{
    backgroundColor:'#3DD598',
    width: 130,
    height: 60,
    borderRadius:20,
    justifyContent:'center',
  },

  modalTextoEdit:{
    color:"#FFFFFF",
    textAlign: 'center',
    fontSize: 20,
    fontWeight:'700'
  },



})