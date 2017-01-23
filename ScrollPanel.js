/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    ListView
} from 'react-native';

import Profile from './Profile'
import Item from './Item'

export default class ScrollPanel extends Component {
    render() {
        var f = new Profile()
        return (
            <ScrollView style={{
                    flex: 1,
                    alignSelf: 'stretch'
                }}>
                <Profile avatar={{
                        uri: 'https://avatars1.githubusercontent.com/u/5809592'
                    }} name='Peter' desc="Nice"/>
                <Item name="我的关注" icon={require('./assets/img/ic_follow_more.png')}/>
                <Item name="我的收藏" icon={require('./assets/img/ic_forum_grey_24dp.png')}/>
                <Item name="我的关注" icon={require('./assets/img/ic_follow_more.png')}/>
                <Item name="我的收藏" icon={require('./assets/img/ic_forum_grey_24dp.png')}/>
                <Item name="我的关注" icon={require('./assets/img/ic_follow_more.png')}/>
                <Item name="我的收藏" icon={require('./assets/img/ic_forum_grey_24dp.png')}/>
                <Item name="我的关注" icon={require('./assets/img/ic_follow_more.png')}/>
                <Item name="我的收藏" icon={require('./assets/img/ic_forum_grey_24dp.png')}/>
                <Item name="我的关注" icon={require('./assets/img/ic_follow_more.png')}/>
                <Item name="我的收藏" icon={require('./assets/img/ic_forum_grey_24dp.png')}/>
                <Item name="我的关注" icon={require('./assets/img/ic_follow_more.png')}/>
                <Item name="我的收藏" icon={require('./assets/img/ic_forum_grey_24dp.png')}/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
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
