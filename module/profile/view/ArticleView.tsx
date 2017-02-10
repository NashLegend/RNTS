/**
 * Created by Zhihu on 2017/2/8.
 */
import * as React from "react";
import {View, Text, Image, TouchableHighlight} from "react-native";
import Article from "../model/Article";
import {getRelativeTime} from "../../../NumberUtils";
import Component = React.Component;
/**
 * Created by Zhihu on 2017/2/8.
 */
export default class ArticleView extends Component<Article,any> {

    constructor(props: Article) {
        super(props);
    }

    onPress() {

    }


    render(): JSX.Element {
        return (
            <View style={{flexDirection:'column',backgroundColor:'#ffffff',marginBottom:8,elevation:1}}>
                <TouchableHighlight underlayColor="#d9d9d944" onPress={this.onPress.bind(this)}>
                    <View
                        style={{flexDirection:'column',padding:16}}>
                        <View style={{flexDirection:'row',alignSelf:'stretch',marginBottom:12}}>
                            <Image style={{width:20,height:20,borderRadius:10}}
                                   source={{uri:this.props.author.avatar_url}}/>
                            <Text
                                style={{flex:1,marginLeft:12,fontSize:14,color:'#3349578A'}}>{this.props.author.name + '发表了文章'}</Text>
                            <Text style={{color:'#3349578A',fontSize:14}}>{getRelativeTime(this.props.created)}</Text>
                        </View>
                        <Image style={{alignSelf:'stretch',height:120,marginBottom:12}}
                               source={{uri:this.props.image_url}}/>
                        <Text style={{fontSize:16,color:'#000000DE',marginBottom:4}}
                              numberOfLines={2}>{this.props.title}</Text>
                        <Text style={{marginBottom:12,fontSize:14,lineHeight:24,color:'#0000008A'}}
                              numberOfLines={3}>{this.props.excerpt}</Text>
                        <View style={{flexDirection:'row',alignSelf:'stretch'}}>
                            <Text
                                style={{marginRight:12,color:'#3349578A',fontSize:14}}>{this.props.voteup_count + ' 赞'}</Text>
                            <Text
                                style={{marginRight:12,color:'#3349578A',fontSize:14}}>{this.props.comment_count + ' 评论'}</Text>
                            <Text style={{marginRight:12,color:'#3349578A',fontSize:14}}>去往专栏</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }

}