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
        console.log("render ScrollPanel");
        var f = new Profile()
        return (
            <ScrollView removeClippedSubviews={true} style={{
                    flex: 1,
                    alignSelf: 'stretch'
                }}>
                <Item name="我的关注" icon={require('./assets/img/ic_follow_more.png')} navigator={this.props.navigator}/>
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
                <Item name="我的收藏" icon={require('./assets/img/ic_forum_grey_24dp.png')}/>
                <Item name="我的关注" icon={require('./assets/img/ic_follow_more.png')}/>
                <Item name="我的收藏" icon={require('./assets/img/ic_forum_grey_24dp.png')}/>
                <Item name="我的关注" icon={require('./assets/img/ic_follow_more.png')}/>
                <Item name="我的收藏" icon={require('./assets/img/ic_forum_grey_24dp.png')}/>
                <Item name="我的收藏" icon={require('./assets/img/ic_forum_grey_24dp.png')}/>
                <Item name="我的关注" icon={require('./assets/img/ic_follow_more.png')}/>
                <Item name="我的收藏" icon={require('./assets/img/ic_forum_grey_24dp.png')}/>
                <Item name="我的关注" icon={require('./assets/img/ic_follow_more.png')}/>
                <Item name="我的收藏" icon={require('./assets/img/ic_forum_grey_24dp.png')}/>
            </ScrollView>
        );
    }
}