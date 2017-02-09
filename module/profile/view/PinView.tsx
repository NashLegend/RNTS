import * as React from "react";
import {View, Text, Image} from "react-native";
import Pin from "../model/Pin";
import Component = React.Component;
import JSXElement = JSX.Element;
export default class PinView extends Component<Pin,any> {

    constructor(props: Pin) {
        super(props);
    }

    render(): any {
        return (
            <View style={{flexDirection:'column'}}>
                <View style={{flexDirection:'column',padding:16,backgroundColor:'#ffffff',marginBottom:8,elevation:1}}>
                    <View style={{flexDirection:'row',alignSelf:'stretch',marginBottom:12}}>
                        <Image style={{width:20,height:20,borderRadius:10}}
                               source={{uri:this.props.author.avatar_url}}/>
                        <Text style={{flex:1,marginLeft:12,color:'#3349578A'}}>{this.props.author.name + '分享了'}</Text>
                        <Text style={{color:'#3349578A'}}>{this.props.created}</Text>
                    </View>
                    <Text style={{marginBottom:12,lineHeight:24,fontSize:14,color:'#0000008A'}}
                          numberOfLines={3}>{this.props.excerpt_title}</Text>
                    <View style={{flexDirection:'row',alignSelf:'stretch'}}>
                        <Text
                            style={{marginRight:12,color:'#3349578A',fontSize:14}}>{this.props.like_count + ' 赞'}</Text>
                        <Text
                            style={{marginRight:12,color:'#3349578A',fontSize:14}}>{this.props.comment_count + ' 评论'}</Text>
                    </View>
                </View>
            </View>
        );
    }

}