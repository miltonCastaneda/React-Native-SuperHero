'use strinct'

import React, { Component } from 'react'

import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Alert,
  StyleSheet
} from 'react-native'

class loginView extends Component{
  render(){
    return(
      <Image source={{uri:  'https://images.unsplash.com/photo-1463320726281-696a485928c7?dpr=1&auto=format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop='}} style={styles.container}>
        <View >
          <Text style={styles.title}>SuperHero</Text>
          <TouchableHighlight onPress={(this.onLogin.bind(this))} style={styles.boton}>
            <Text style={styles.textoBoton}>Login</Text>
          </TouchableHighlight>
        </View>
      </Image>
    )
  }

  onLogin(){
    Alert.alert(
      'Acceso',
      'Te has logueado en el sistema',
      [
        {
          text:'Aceptar',
          onPress: (this.aceptar.bind(this))
        },
        {
          text: 'Cancelar',
          onPress: (this.cancelar.bind(this))
        }
      ]
    )
  }

  aceptar(){
    this.props.navigator.push({
      title: 'Dashboard',
      name: 'Dashboard',
      passProps: {}
    })//replace reemplaza y push añade la vista en la pila superior de cartas
  }

  cancelar(){
    console.log('Login cancelado')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    padding: 30
  },
  boton:{
    width: 350,
    height: 30,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1
  },
  textoBoton:{
    color: 'white'
  },
  title:{
    marginTop: 100,
    fontSize: 25,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  }
})

module.exports = loginView
