import * as React from 'react'
import {View, StyleSheet, Text, Image, TouchableHighlight} from 'react-native';
import Component = React.Component;
import People from '../model/People'
import ProfileItemView from './ProfileItemView'

export default class ProfileView extends Component<People,any> {
    render(): JSX.Element {
        return (
            <View style={{flexDirection:'column',padding:12}}>
                <View style={{height:200,flexDirection:'column',justifyContent:'flex-end',alignItems:'center'}}>
                    <Image style={{width:100,height:100}} source={{uri:this.props.avatar_url}}/>
                    <Text style={{marginTop:12}}>{this.props.headline}</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:12}}>
                    <View style={{flexDirection:'column',alignItems:'stretch',flex:1}}>
                        <Text>关注的话题</Text>
                        <Text>{this.props.following_topic_count}</Text>
                    </View>
                    <View style={{flexDirection:'column',alignItems:'stretch',flex:1}}>
                        <Text>他关注的人</Text>
                        <Text>{this.props.following_count}</Text>
                    </View>
                    <View style={{flexDirection:'column',alignItems:'stretch',flex:1}}>
                        <Text>关注他的人</Text>
                        <Text>{this.props.follower_count}</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginTop:12,marginBottom:12}}>
                    <Image style={{width:24,height:24}} source={require('../../../assets/img/ic_forum_grey_24dp.png')}/>
                    <Text>{' ' + this.props.voteup_count}</Text>
                    <Image style={{marginLeft:24}} source={require('../../../assets/img/ic_forum_grey_24dp.png')}/>
                    <Text>{' ' + this.props.thanked_count}</Text>
                    <View style={{flex:1,height:0}}/>
                    <TouchableHighlight>
                        <Text style={{opacity:1}}>关注</Text>
                    </TouchableHighlight>
                </View>
                <ProfileItemView thumb={require('../../../assets/img/ic_forum_grey_24dp.png')} detail="333"
                                 title="他的live"/>
                <ProfileItemView thumb={require('../../../assets/img/ic_forum_grey_24dp.png')} detail="333"
                                 title="他的回答"/>
                <ProfileItemView thumb={require('../../../assets/img/ic_forum_grey_24dp.png')} detail="333"
                                 title="他的提问"/>
                <ProfileItemView thumb={require('../../../assets/img/ic_forum_grey_24dp.png')} detail="333"
                                 title="他的收藏"/>
                <ProfileItemView thumb={require('../../../assets/img/ic_forum_grey_24dp.png')} detail="333"
                                 title="他的分享"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'stretch',
    } as React.ViewStyle,
    avatar: {
        width: 96,
        height: 96,
        borderColor: 'red',
        borderWidth: 0.5
    } as React.ImageStyle,
    subContainer: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        borderColor: 'blue',
        borderWidth: 0.5
    } as React.ViewStyle,
    names: {
        alignSelf: 'stretch',
        textAlign: 'left',
        color: '#333333',
        flex: 1,
        fontSize: 20,
        marginLeft: 12,
        textAlignVertical: 'center'
    } as React.TextStyle,
    instructions: {
        alignSelf: 'stretch',
        textAlign: 'left',
        flex: 1,
        color: '#333333',
        textAlignVertical: 'center',
        fontSize: 16,
        marginLeft: 12,
    } as React.TextStyle,
});
