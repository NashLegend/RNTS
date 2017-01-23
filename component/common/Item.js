import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Profile extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return <View style={styles.container}>
                    <Image style={styles.icon} source={this.props.icon}/>
                    <View style={styles.subContainer}>
                        <Text style={styles.names}>{this.props.name}</Text>
                        <View style={styles.divider}/>
                    </View>
                </View>
    }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height:64,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    backgroundColor: '#dbdbdb'
  },
  icon: {
      width: 64,
      height: 64,
      resizeMode:'center',
      alignSelf:'center'
  },
  subContainer: {
      flex: 1,
  },
  names: {
    flex:1,
    color: '#333333',
    alignItems:'center',
    textAlignVertical:'center',
    justifyContent:'center',
    fontSize: 14,
  },
  divider: {
    alignSelf:'stretch',
    height:0.5,
    backgroundColor: '#888888',
  },
});
