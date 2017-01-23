/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Navigator, View, BackAndroid} from 'react-native';
import TypeView from './Profile'
import ListPanel from './ListPanel'

var _navigator;
BackAndroid.addEventListener('hardwareBackPress', () => {
    if (_navigator && _navigator.getCurrentRoutes().length > 1) {
        _navigator.pop();
        return true;
    }
    return false;
});

export default class RNTS extends Component {

    routeMapper(route, navigationOperations, onComponentRef) {
        _navigator = navigationOperations;
        if (route.name === 'first') {
            return (
                <TypeView name="8888" desc="007" avatar={{uri: 'https://avatars1.githubusercontent.com/u/5809592'}}
                          navigator={_navigator}/>
            );
        } else if (route.name === 'second') {
            return <ListPanel name="second" desc="007" avatar={{uri: 'https://avatars1.githubusercontent.com/u/5809523'}}
                             navigator={_navigator}/>
        }
    }

    async startRequest() {
        try {
            let response = await fetch('http://facebook.github.io/react-native/movies.json');
            let responseJson = await response.json();
        }catch (err){

        }
    }

    render() {
        return (
            <Navigator style={styles.container} initialRoute={{name: 'first', title: 'First', index: 0}}
                       renderScene={this.routeMapper}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

AppRegistry.registerComponent('RNTS', () => RNTS);
