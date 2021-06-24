import React, { Component } from 'react';
import Asyncstorage from '@react-native-async-storage/async-storage';
import { getLocal } from '../Screens/Screen_FlatList'
import { Alert, Dimensions } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { getData } from '../api/RandomUsers';
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
            importedBorrados: []
          }
    }

   
    

    async storeData() {
      
      try{
       const resultado = await Asyncstorage.getItem('UsuariosBorrados');
       this.setState({importedBorrados: JSON.parse(resultado)});
       console.log("Datos borrados")
     }catch(e) {
    console.log(e)
     }
     } 

  
  
 


    
render (){
  const values = this.state.importedBorrados.map(item =>
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
                 
                 <View style={{alignItems: 'center',height:vw(10), marginTop:vw(1)}}>

                  
                </View >
                </View >
    )
    return (
      <View style={styles.container}>
      <View style={styles.generalBackground,{height:"2%", width: "100%",}}></View>
     <View style={styles.generalBackground,{flexDirection:"row",height:vh(8),width:vw(100), display:"flex", flexWrap:"wrap", justifyContent:"space-evenly"}}>
{values}
<View >
                  <TouchableOpacity style = {styles.modalEdit} onPress={this.storeData.bind(this)}>  
                  <Image source={require("../images/enviar.png")}></Image>                                   
                  </TouchableOpacity>
                  </View>

    </View></View>
    )
}


}

export {Screen_DeletedCard};
const styles = StyleSheet.create({
  
  container:{
    backgroundColor: "#22343C",
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    
},

//HEADER ARI

  botonMas:{
    width:vw(9.5),
    justifyContent:"center"
  },
 
  filtros:{
    width:vw(9.5),
    height:"100%",
    justifyContent:"center"
  },
  botonesGeneral:{
    height:vw(9.5),
  },
  generalBackground:{
    backgroundColor: "#22343C"
  },

  //TARJETAS FRANCO

card:{
    height: vw(75),
    width: vw(35),
    marginLeft:vw(10),
    
    
  },

  nombre:{
    color: "white",
    textAlign:"center", 
    width:"100%",
    justifyContent:"space-around",
    fontSize:vw(4)
  },

  email:{
    color: "#96A7AF",
    textAlign:"center",
    width: vw(35),
    fontSize:vw(3)
  },
  nacimiento:{
    color: "grey",
    textAlign:"center",
    width: vw(35),
    fontSize:vw(2.5),
    
  },
  vistaFoto:{
    marginTop: vh(1),
    alignItems:'center',
    height:vh(18),
  },
  
  foto:{
    width: vw(35),
    height:vw(38),
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
    fontSize: vw(3),
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
    width: vw(55),
    height: vh(4),
   borderRadius:20,
   justifyContent:'center',
  alignContent:'center',
   alignItems:'center',
    marginLeft:10,
    marginRight:10,
  },

  lupa:{
    backgroundColor:'#3DD598',
    width: vw(9.5),
   height: vw(8),
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
      height: vh(2.5),
      width: vw(3),
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
margin: 30,
width: 180,
height:180,
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
width: 40,
height: 40,
borderRadius:20,
justifyContent:'center',
alignContent:'center',
alignItems:'center'

},

modalGuardado:{
backgroundColor:'#3DD598',
width: 60,
color: "white",
fontSize: vw(2),
height: 40,
borderRadius:5,
justifyContent:'center',
alignContent:'center',
alignItems:'center'

},


modalEdit:{
backgroundColor:'#3DD598',
width: 50,
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
width: 200,
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