import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'
import MyHeader from '../components/MyHeader';

export default class BookDonateScreen extends Component{
  constructor(){
    super(
      
    )
  }
  render(){
    return(
      <View>
        <Text> Hii! Im going to donate your favourite book</Text>
      </View>
    )
  }
}