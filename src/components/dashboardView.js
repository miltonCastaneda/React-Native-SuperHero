'use strinct'

import React, { Component } from 'react'

import {
  View,
  Text,
  StyleSheet
} from 'react-native'


class dashboardView extends Component{
  render(){
    return (
      <View>
        <Text style={styles.title}> Soy un componente Dashboard</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title:{
    marginTop: 100,
    fontSize: 25
  }
})

module.exports = dashboardView
