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
  LeftButton: function(route, navigator, index){
    console.log('LeftButton')
    if(route.name == 'Login'){
      return null
    }
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
  RightButton:function(route, navigator, index){
    console.log('RightButton')
    return null
  },
  Title: function(route, navigator, index){
    console.log('title')
    if(route.name == 'Login'){
      return null
    }
    return (
      <Text style={{marginTop: 10, color: '#007AFF'}}>{route.name}</Text>
    )
  }
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
      <Navigator style={{backgroundColor: '#000'}}
        initialRoute={{name: 'Login'}}
        renderScene={this.renderScene}
        configureScene= {(route) => {
          if(route.sceneConfig){
            return route.sceneConfig
          }
          return Navigator.SceneConfigs.FloatFromRight//animacion deslizarse hacia la isquierda

        }}

        navigatorBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) =>
               { return (<Text>Cancel</Text>); },
              RightButton: (route, navigator, index, navState) =>
                { return (<Text>Done</Text>); },
              Title: (route, navigator, index, navState) =>
                { return (<Text>Awesome Nav Bar</Text>); },
            }}
            style={{backgroundColor: 'gray'}}
          />
        }
      />

    )
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('SuperHero', () => SuperHero);
