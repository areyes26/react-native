import 'react-native-gesture-handler';
import React,{ Component } from 'react';
import { Dimensions } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { Screen_Import } from './src/Screens/Screen_import'
import { Screen_ViewImportedCard } from './src/Screens/Screen_ViewImportedCard'
import { Screen_FlatList } from './src/Screens/Screen_FlatList'
import { Screen_AboutUS } from './src/Screens/Screen_AboutUs'
import { Screen_DeletedCard} from './src/Screens/Screen_DeleteCard'
import { Screen_ContactosDeseados } from './src/Screens/Screen_ContactosDeseados';
import { Guardado } from './src/Screens/Guardado'

const Stack = createStackNavigator();
export default class App extends Component {
  constructor(){
    super();
    this.state={
      users:[],
    }
  }

  componentDidMount(){
    fetch("https://randomuser.me/api?results=20") 
    .then(response => response.json())
    .then (results => {
      this.setState({
        users: results
      });
    })
  }
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
        
          <Stack.Screen name="Home" component={Screen_FlatList}  /> 
          <Stack.Screen name="About Us" component={Screen_AboutUS} />
          <Stack.Screen name="View Imported Card" component={Screen_ViewImportedCard} />
          <Stack.Screen name="Import" component={Screen_Import} />
          <Stack.Screen name="Papelera" component={Screen_DeletedCard} />
          <Stack.Screen name="Guardado" component={Guardado}  />
          <Stack.Screen name="Buscar Contactos" component={Screen_ContactosDeseados} />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  };
