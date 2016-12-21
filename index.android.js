/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

var NavigatorBarRouteMapper = {
  LeftButton: (route, navigator, index, navState) =>{

    if(route.name == 'Login') return null

    return(
      <TouchableHighlight onPress={() => {
          if ( index > 0 ){
            navigator.pop()
          }
        }}>

        <Text style={{marginTop: 10, marginLeft: 20, color: '#007AFF'}}>Atrás</Text>
      </TouchableHighlight>
    )
  },
  RightButton: (route, navigator, index, navState) =>  {
     return null
  },
  Title: (route, navigator, index, navState) =>  {
    if(route.name == 'Login') return null
    return (
      <Text style={{marginTop: 10, color: '#007AFF'}}>{route.name}</Text>
    )
  },
}

const Login = require('./src/components/loginView')
const Dashboard = require('./src/components/dashboardView')

class SuperHero extends Component {
  renderScene(route, navigator){
    switch (route.name) {
      case 'Login':
          return(
            <Login navigator={navigator} route={route}/>
          )
        break
      case 'Dashboard':
        return(
          <Dashboard navigator={navigator} route={route}/>
        )
    }
  }
  render() {
    console.log('mapper ', NavigatorBarRouteMapper)
    return (
    //  <Login></Login>
      <Navigator
        initialRoute={{name: 'Login'}}
        renderScene={this.renderScene}
        configureScene= {(route) => {
          if(route.sceneConfig){
            return route.sceneConfig
          }
          return Navigator.SceneConfigs.FloatFromRight//animacion deslizarse hacia la isquierda

        }}

        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigatorBarRouteMapper}
          />
       }
      />

    )
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('SuperHero', () => SuperHero);
