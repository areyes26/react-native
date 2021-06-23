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
    TextInput,
    ScrollView,
    
} from 'react-native';

export class Screen_FlatList extends Component {
    constructor (){
          super();
          this.state = {
              users: [],
              activity: true,
              showModal: false,
              selectItme: null,
              textHandler: '',
              texto: '',
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

    borrarTarjeta (idTarjeta){
      let resultados = this.state.users.filter((item)=>{
        return item.login.uuid !== idTarjeta;
      })
      this.setState({users:resultados})
      // console.log("Borramos la tarjeta con el ID " + idTarjeta);
      
      }

     


    renderItem = ({item}) => {   
           return ( 
            <TouchableOpacity onPress={ () => this.showModal(item)} style={{justifyContent: "space-evenly", flexDirection: "row"}}>
            <View style={styles.card}>
              
                 <View style={styles.vistaFoto}> 
                  
                     <Image source={{uri: item.picture.large}}  style={styles.foto}></Image>
                 </View>
                 <View style={{height:"10vw",width:"100%",fontSize:"100%",justifyContent:"space-around"} }>
                      <Text style={styles.nombre}>{item.name.first} {item.name.last}</Text>
                 </View>
                 <View style={{height:"7vw",width:"100%",fontSize:"100%"} }>
                      <Text style={styles.email}>{item.email}</Text>
                 </View>
                 <View style={{height:"7vw",width:"100%",fontSize:"100%"} }>
                      <Text style={{color:"grey", fontSize:"3.5vw", textAlign:"center"}}>Fecha de Nacimiento</Text>
                      <Text style={styles.nacimiento}>{item.dob.date}</Text>
                 </View>
                 
                 <View style={{alignItems: 'center',height:"10vw", marginTop:"1vw"}}>

                   <TouchableOpacity style = {styles.delete} 
                   onPress={() => this.borrarTarjeta(item.login.uuid)}> 
                   <Text style={styles.textoDelete} > Borrar </Text>                    
                   </TouchableOpacity>
                </View >
            </View>
            </TouchableOpacity> 
             
           )}


keyExtractor = (item, idx) => idx.toString()







    render (){

        return(
         <View style={styles.container}>
               {/* <View style={styles.generalBackground,{height:"1%", width: "100%",}}></View> */}

              <View style={styles.generalBackground,{flexDirection:"row",height:"8vh",width:"100vw", display:"flex", flexWrap:"wrap", justifyContent:"space-evenly"}}>
                 <View style={styles.botonMas}>
                     <Button color="#3DD598" title="+" styles={styles.botonesGeneral}
                     onPress={() => this.getDataFromApi() }/>
                 </View>
                  <View style={styles.buscador}>
                  <TextInput style={styles.buscadorInput}></TextInput>
                  </View>
                  <View style = {styles.viewLupa}>
                  <TouchableOpacity style = {styles.lupa} >
                  <Image source={require("../images/enviar.png")} style = {styles.imagenLupa}></Image>                                   
                  </TouchableOpacity>
                  </View>
                 <View style={styles.filtros}>
                     <Button color="#3DD598" title="f" style={styles.botonesGeneral}></Button>
                 </View>  
             </View>

              <View style={styles.generalBackground,{height:"8vh",width:"100vw",flexDirection:"row", justifyContent:"space-evenly"}}>
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

              <View style={{ height:"73vh", width: "100vw",justifyContent:"space-evenly"}}>
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

              <View style = {{flex:1, height:"11%", width:"100vw", backgroundColor:"#30444E", borderRadius: "25 25 0 0", boxShadow: "0 1 14 #19282F", flexDirection:"row", justifyContent:"space-evenly", alignItems:'center',}}>
                  <TouchableOpacity onPress={ () => this.props.navigation.navigate("Papelera")} style = {styles.botonTacho}> 
                     <Image source={require("../images/botonTacho.png")} style = {styles.iconoMenu}></Image> 
                 </TouchableOpacity>
                 <TouchableOpacity style = {styles.botonHome}> 
                     <Image source={require("../images/botonHome.png")} style = {styles.iconoMenu} ></Image>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={ () => this.props.navigation.navigate("About Us")}  style = {styles.botonNosotros}> 
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
                   <Text style={styles.modalMasTexto}>Celular: {this.state.selectItem.cell}</Text>

                   <View style={{height:100}}>
                   <ScrollView style={{height:100, width:'90%'}}>
                   <Text style={styles.modalMasTextoComentario}>Coment: {this.state.texto}  </Text>
                  </ScrollView>
                  </View>
                   </View>
                  </View>
              
                 <View style={styles.modalBotones}>

                  <View>
                  <TextInput style={styles.modalInput} onChangeText={text => this.setState({textHandler: text})}></TextInput>
                  </View>
                  <View >
                  <TouchableOpacity style = {styles.modalEdit} onPress={() => this.setState({texto: this.state.textHandler})}> 
                  <Image source={require("../images/enviar.png")}></Image>                                   
                  </TouchableOpacity>
                  </View>
                  <TouchableOpacity style = {styles.modalDelete} onPress={() => this.borrarTarjeta(this.state.selectItem.login.uuid)}> 
                  <Image source={require("../images/tachoblanco.png")}  ></Image>                 
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
        justifyContent:"center",
      },
      botonMas:{
        width:"9.5vw",
        justifyContent:"center"
      },
     
      filtros:{
        width:"9.5vw",
        height:"100%",
        justifyContent:"center"
      },
      botonesGeneral:{
        height:"9.5vw",
      },
      generalBackground:{
        backgroundColor: "#22343C"
      },
    
      //TARJETAS FRANCO
    
    card:{
        height: "75vw",
        width: "35vw",
        marginLeft:"10vw",
        
        
      },
    
      nombre:{
        color: "white",
        textAlign:"center", 
        width:"100%",
        justifyContent:"space-around",
        fontSize:"4vw"
      },

      email:{
        color: "#96A7AF",
        textAlign:"center",
        width:"100%",
        height:"100%",
        fontSize:"3vw"
      },
      nacimiento:{
        color: "grey",
        textAlign:"center",
        width:"100%",
        height:"50%",
        fontSize:"2.5vw",
        fontWeight:800
      },
      vistaFoto:{
        marginTop: "1vh",
        alignItems:'center',
        height:"38vw",
      },
      
      foto:{
        width: "100%",
        height:"100%",
        borderRadius: 20,
      },

      delete:{
        backgroundColor:'#FF575F',
        width: "70%",
        height: "60%",
        borderRadius:20,
        justifyContent:'center',
        marginTop:"7.5%"
      },
    
      textoDelete:{
        color:"#FFFFFF",
        textAlign: 'center',
        fontSize: "3vw",
      },

      buscador:{
       
        justifyContent:"center",
        alignContent:'center',
       alignItems:'center',

      },

      buscadorInput:{
        borderWidth:1,
        backgroundColor: '#537d8f',
         borderColor:'#446675',
         borderRadius:22,
        width: "55vw",
        height: "3vh",
       borderRadius:20,
       justifyContent:'center',
      alignContent:'center',
       alignItems:'center',
        marginLeft:10,
        marginRight:10,
      },

      lupa:{
        backgroundColor:'#3DD598',
        width: "9.5vw",
       height: "3vh",
        borderRadius:20,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        

      },

      viewLupa:{
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
      },

      imagenLupa:{
          height: "2.5vh",
          width: "3vw",
          justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
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
    marginBottom:15,
   
  },
  
  modalMasInfo:{
  
  },

  modalMasTexto:{
    color:'#e3e3e3',
    fontSize: 18,
    marginTop:5,
  },
  

  modalVistaFoto:{

    alignItems:'center',
    
  },
  
  modalFoto:{
    width: 235,
    height:235,
    borderRadius: 20,
  },

  modalBotones:{
    alignItems: 'flex-end',
    justifyContent:'space-around',
    flex:1,
    flexDirection: 'row',
    marginBottom: 30,
   
   
    
  },

  modalDelete:{
    backgroundColor:'#FF575F',
    width: 60,
    height: 40,
    borderRadius:20,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'

  },

  

  modalEdit:{
    backgroundColor:'#3DD598',
    width: 60,
    height: 40,
    borderRadius:20,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'

  },

  

  modalInput:{
    borderWidth:1,
    backgroundColor: '#537d8f',
    borderColor:'#446675',
    borderRadius:22,
    width: 250,
    height: 40,
    borderRadius:20,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    marginLeft:8,
  },

  modalMasTextoComentario:{
    color:'#e3e3e3',
    fontSize: 18,
    marginTop:15,
    fontWeight:'bold',
  },


})