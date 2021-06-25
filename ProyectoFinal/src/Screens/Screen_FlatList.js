import React, { Component } from 'react';
import { Alert, Dimensions } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import {styles} from '../style/style';
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
    Animated,
    Easing
  
    
} from 'react-native';



const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
export class Screen_FlatList extends Component {
    constructor (){
          super();
          this.state = {
              
              activity: true,
              showModal: false,
              selectItme: null,
              textHandler: '',
              texto: '',
              toValue: 1.4,
              importedcomentarios: [],
              importedBorrados: [],
              borrados:'',
              importedUsers:[] ,
          }
    }


    componentDidMount() {
      getData()
      .then( (usuarios) => { 
       console.log(usuarios);
       this.setState({users: usuarios, activity: false});  
    
    })
    }

    // async getDataFromApi(){
    //   this.setState({activity:true});
    //   let usuarios = await getData();
    //   console.log(usuarios);
    //   this.setState({users: usuarios, activity: false});
    // }
  async mostrarUsuarios(){
        try{
            const resultado = await Asyncstorage.getItem('Users')
            this.setState({importedUsers: JSON.parse(resultado)})
            console.log(resultado);
        }catch(e){
            console.log(e);
        }
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
            <TouchableOpacity onPress={() => this.showModal(item)} style={{justifyContent: "space-evenly", flexDirection: "row"}}>
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

                   <TouchableOpacity style = {styles.delete} 
                   onPress={() => this.getData2(item.login.uuid)}> 
                   <Text style={styles.textoDelete} > Borrar </Text>                    
                   </TouchableOpacity>
                </View >
            </View>
            </TouchableOpacity> 
             
           )}


keyExtractor = (item, idx) => idx.toString()


position = new Animated.Value(1);

topDown = () => {
  Animated.timing(this.position, {
    toValue: this.state.toValue,
    duration: 1000,
    easing: Easing.elastic(4),
    useNativeDriver: false
  } ).start();
  this.setState({toValue: this.state.toValue==1? 1.4 : 1})
}


async getData1() {
  try{
   const resultado = await Asyncstorage.getItem('Comentarios');
   this.setState({importedcomentarios: JSON.parse(resultado)});
   console.log("Datos recuperados")
 }catch(e) {
console.log(e)
 }
 } 

async storeData() {
  try{
    const jsonUsers = JSON.stringify(this.state.textHandler);
    await Asyncstorage.setItem("Comentarios", jsonUsers)
    console.log("Datos almacenados ")
    Alert.alert("Se guardaron correctamente los datos ")
  } catch(e) {
    console.log(e)
  }
  }


  async getData2(idTarjeta) {
    let resultados = this.state.users.filter((item)=>{
      return item.login.uuid !== idTarjeta;
    })
    this.setState({users:resultados})
    try{
     const resultado = await Asyncstorage.getItem('UsuariosBorrados');
     this.setState({importedBorrados: JSON.stringify(resultado)});
     console.log("Datos borrados")
   }catch(e) {
  console.log(e)
   }
   } 

   async storeData2() {
    try{
      const jsonUsers = JSON.stringify(this.state.borrados);
      await Asyncstorage.setItem("UsuariosBorrados", jsonUsers)
      console.log("Datos importados")
      console.log(this.state.borrados);
    } catch(e) {
      console.log(e)
    }
    }

    

  filtrarTarjetas(){
    
    this.state.importedUsers.filter( (usuarios) => {
    if (usuarios.location.country.includes(this.state.info )){
      let resultado = this.state.users.filter( (users) => {
        return importedUsers.location.country.includes(this.state.info )
      }) 
      this.setState({importedUsers: resultado})
    } else if (usuarios.name.first.includes(this.state.info )){
      let resultado = this.state.users.filter( (users) => {
        return users.name.first.includes(this.state.info)
      })
      this.setState({importedUsers: resultado})
    } else if (usuarios.name.last.includes(this.state.info )){
      let resultado = this.state.users.filter( (users) => {
        return users.name.last.includes(this.state.info)
      })  
      this.setState({users:resultado})
    } 
  })
  }
  







    render (){
      const {item} = this.props
        // const values = this.state.importedUsers.map(item =>
            
        //   <TouchableOpacity onPress={() => this.showModal(item)} style={{justifyContent: "space-evenly", flexDirection: "row"}}>
        //   <View style={styles.card}>
            
        //        <View style={styles.vistaFoto}> 
                
        //            <Image source={{uri: item.picture.large}}  style={styles.foto}></Image>
        //        </View>
        //        <View style={{height:vw(10),width:"100%",fontSize:"100%",justifyContent:"space-around"} }>
        //             <Text style={styles.nombre}>{item.name.first} {item.name.last}</Text>
        //        </View>
        //        <View style={{height:vw(7),width:"100%",fontSize:"100%"} }>
        //             <Text style={styles.email}>{item.email}</Text>
        //        </View>
        //        <View style={{height:vw(7),width:"100%",fontSize:"100%"} }>
        //             <Text style={{color:"grey", fontSize:vw(3.5), textAlign:"center"}}>Fecha de Nacimiento</Text>
        //             <Text style={styles.nacimiento}>{item.dob.date}</Text>
        //        </View>
               
        //        <View style={{alignItems: 'center',height:vw(10), marginTop:vw(1)}}>

        //          <TouchableOpacity style = {styles.delete} 
        //          onPress={() => this.storeData2(item.login.uuid)}> 
        //          <Text style={styles.textoDelete} > Borrar </Text>                    
        //          </TouchableOpacity>
        //       </View >
        //   </View>
        //   </TouchableOpacity> 
        //     )
        return(
         <View style={styles.container}>
               <View style={styles.generalBackground,{height:"2%", width: "100%", marginTop:30,}}></View>

              <View style={styles.generalBackground,{flexDirection:"row",height:vh(8),width:vw(100), display:"flex", flexWrap:"wrap", justifyContent:"space-evenly", justifyContent:'center',
    alignContent:'center',
    alignItems:'center'}}>
                
                 <View style={styles.botonMas}>
                 <TouchableOpacity styles={styles.botonesGeneral} onPress={() => this.getDataFromApi() }>
                  <Image source={require("../assets/images/recargar.png")}  style = {styles.imagenLupa}></Image>                                   
                  </TouchableOpacity>
                     
                 </View>

                  <View style={styles.buscador}>
                  <TextInput style={styles.buscadorInput} onChangeText={ text => this.setState({info:text})}></TextInput>
                  </View>

                  <View style = {styles.viewLupa}>
                  <TouchableOpacity style = {styles.lupa} onPress={this.filtrarTarjetas.bind(this)}>
                  <Image source={require("../assets/images/lupa.png")}  style = {styles.imagenLupa}></Image>                                   
                  </TouchableOpacity>
                  </View>


                 
             </View>

              <View style={styles.generalBackground,{height:vh(7),width:vw(100),flexDirection:"row", justifyContent:"space-evenly"}}>
                  <View style={styles.botonesCategorias}>
                      <Button color="#3DD598" title="Traer usuarios" onPress={ () => this.props.navigation.navigate("Buscar Contactos")} style={styles.botonesGeneral}></Button>
                  </View>         
             </View>

              <View style={{ height:vh(65), width: vw(100),justifyContent:"space-evenly"}}>
                

                     <FlatList 
                        data={this.state.importedUsers} 
                       keyExtractor = { this.keyExtractor }
                       renderItem={ this.renderItem }
                       numColumns={2}
                    /> 

                   
              </View>
              
                   {/* ACA SE RECUPERAN LOS CONTACTOS IMPORTADOS */}
              <View style={styles.generalBackground,{height:vh(7),width:vw(100),flexDirection:"row", justifyContent:"space-evenly"}}>
                  <View style={styles.botonesCategorias}>
                      <Button color="#3DD598" title="Mostrar Contactos" onPress={this.mostrarUsuarios.bind(this)}></Button>
                  </View>         
             </View>
             
              <View style = {{flex:1, height:"11%", width:vw(100), backgroundColor:"#30444E", borderRadius: "25 25 0 0", boxShadow: "0 1 14 #19282F", flexDirection:"row", justifyContent:"space-evenly", alignItems:'center',}}>
                  <TouchableOpacity onPress={ () => this.props.navigation.navigate("Papelera")} style = {styles.botonTacho}> 
                     <Image source={require("../assets/images/botonTacho.png")} style = {styles.iconoMenu}></Image> 
                 </TouchableOpacity>
                 <TouchableOpacity style = {styles.botonHome}> 
                     <Image source={require("../assets/images/botonHome.png")} style = {styles.iconoMenu} ></Image>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={ () => this.props.navigation.navigate("About Us")}  style = {styles.botonNosotros}> 
                     <Image source={require("../assets/images/botonNosotros.png")} style = {styles.iconoMenu2}></Image> 
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
                  <TouchableOpacity  style={{}}  onPress={this.topDown}>
                    <Animated.View style={{ alignItems:'center', transform: [{scale: this.position}]}}> 
               
                  <Image source={{uri: this.state.selectItem.picture.large}}  style={styles.modalFoto}></Image>
                 
                  </Animated.View>
                  
                 </TouchableOpacity>


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
              
                 <View style={styles.modalBotones}>

                  <View>
                  <TextInput style={styles.modalInput} onChangeText={text => this.setState({textHandler: text})}></TextInput>
                  </View>
                  <View >
                  <TouchableOpacity style = {styles.modalGuardado} onPress={this.storeData.bind(this)}>  
                  <Text>Guardar datos</Text>                                 
                  </TouchableOpacity>
                  </View>
                  <View >
                  <TouchableOpacity style = {styles.modalEdit} onPress={this.getData1.bind(this)}>  
                  <Image source={require("../assets/images/enviar.png")}></Image>                                   
                  </TouchableOpacity>
                  </View>

                  <TouchableOpacity style = {styles.modalDelete} onPress={() => this.deleteContact(this.state.selectItem.login.uuid)}> 
                  <Image source={require("../assets/images/tachoblanco.png")}  ></Image>                 
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

