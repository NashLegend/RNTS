import * as React from "react";
import {View, Text, Image, TouchableHighlight} from "react-native";
import People from "../model/People";
import ProfileItemView from "./ProfileItemView";
import {numberToKBase} from "../../../NumberUtils";
import Component = React.Component;

export default class ProfileView extends Component<People,any> {
    render(): JSX.Element {
        return (
            <View style={{flexDirection:'column',backgroundColor:'#F2F4F7'}}>
                <View style={{flexDirection:'column',backgroundColor:'#ffffff',elevation:1}}>
                    <View
                        style={{height:200,flexDirection:'column',justifyContent:'flex-end',alignItems:'center',paddingBottom:16}}>
                        <View>
                            <Image style={{width:72,height:72,borderRadius:36}} source={{uri:this.props.avatar_url}}/>
                            <Image style={{width:24,height:24,borderRadius:36,marginTop:-24,alignSelf:'flex-end'}}
                                   source={{uri:this.props.avatar_url}}/>
                        </View>
                        <Text style={{color:'#0000008A',marginTop:16,fontSize:14}}>{this.props.headline}</Text>
                    </View>
                    <View style={{flexDirection:'row',margin:16}}>
                        <View style={{flexDirection:'column',alignItems:'stretch',flex:1}}>
                            <Text style={{color:'#0000008A',fontSize:12}}>关注的话题</Text>
                            <Text
                                style={{color:'#000000DE',fontSize:24,fontWeight:'100'}}>{this.props.following_topic_count}</Text>
                        </View>
                        <View style={{flexDirection:'column',alignItems:'stretch',flex:1}}>
                            <Text style={{color:'#0000008A',fontSize:12}}>他关注的人</Text>
                            <Text
                                style={{color:'#000000DE',fontSize:24,fontWeight:'100'}}>{this.props.following_count}</Text>
                        </View>
                        <View style={{flexDirection:'column',alignItems:'stretch',flex:1}}>
                            <Text style={{color:'#0000008A',fontSize:12}}>关注他的人</Text>
                            <Text
                                style={{color:'#000000DE',fontSize:24,fontWeight:'100'}}>{this.props.follower_count}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginRight:16,marginBottom:16,marginLeft:16}}>
                        <Image style={{width:24,height:24,tintColor:'#B9B9B9'}}
                               source={require('../../../assets/img/ic_action_thumb_up@2x.png')}/>
                        <Text
                            style={{color:'#0000008A',fontSize:16,marginLeft:16}}>{numberToKBase(this.props.voteup_count)}</Text>
                        <Image style={{marginLeft:32,tintColor:'#B9B9B9'}}
                               source={require('../../../assets/img/ic_action_favorite.png')}/>
                        <Text
                            style={{color:'#0000008A',fontSize:16,marginLeft:16}}>{numberToKBase(this.props.thanked_count)}</Text>
                        <View style={{flex:1,height:0}}/>
                        <TouchableHighlight>
                            <Text style={{opacity:1}}>关注</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={{alignSelf:'stretch',height:8}}/>
                <View style={{flexDirection:'column',backgroundColor:'#ffffff',elevation:1,marginBottom:1}}>
                    <ProfileItemView thumb={require('../../../assets/img/ic_profile_live.png')}
                                     detail={this.props.hosted_live_count}
                                     title="他的live"/>
                    <ProfileItemView thumb={require('../../../assets/img/ic_profile_answer.png')}
                                     detail={this.props.answer_count}
                                     title="他的回答"/>
                    <ProfileItemView thumb={require('../../../assets/img/ic_profile_question.png')}
                                     detail={this.props.question_count}
                                     title="他的提问"/>
                    <ProfileItemView thumb={require('../../../assets/img/ic_profile_favorite.png')}
                                     detail={this.props.favorite_count}
                                     title="他的收藏"/>
                    <ProfileItemView thumb={require('../../../assets/img/ic_fab_idea.png')}
                                     detail={this.props.pins_count}
                                     hideDivider={true}
                                     title="他的分享"/>
                </View>
            </View>
        )
    }
}