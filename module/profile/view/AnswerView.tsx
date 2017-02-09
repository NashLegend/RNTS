import * as React from "react";
import Answer from "../model/Answer";
import {View, Text, Image} from "react-native";
import Component = React.Component;
import JSXElement = JSX.Element;
export default class AnswerView extends Component<Answer,any> {

    constructor(props: Answer) {
        super(props);
    }

    render(): JSXElement {
        return (
            <View style={{flexDirection:'column'}}>
                <View style={{flexDirection:'column',padding:16,elevation:1,backgroundColor:'#ffffff',marginBottom:8}}>
                    <View style={{flexDirection:'row',alignSelf:'stretch',marginBottom:12}}>
                        <Image style={{width:20,height:20,borderRadius:10}}
                               source={{uri:this.props.author.avatar_url}}/>
                        <Text
                            style={{flex:1,marginLeft:12,fontSize:14,color:'#3349578A'}}>{this.props.author.name + '回答了问题'}</Text>
                        <Text style={{color:'#3349578A',fontSize:14}}>{this.props.created_time}</Text>
                    </View>
                    <Text style={{fontSize:16,color:'#000000DE',marginBottom:4}}
                          numberOfLines={2}>{this.props.question.title}</Text>
                    <Text style={{marginBottom:12,fontSize:14,lineHeight:24,color:'#0000008A'}}
                          numberOfLines={3}>{this.props.excerpt}</Text>
                    <View style={{flexDirection:'row',alignSelf:'stretch'}}>
                        <Text
                            style={{marginRight:12,color:'#3349578A',fontSize:14}}>{this.props.voteup_count + ' 赞'}</Text>
                        <Text
                            style={{marginRight:12,color:'#3349578A',fontSize:14}}>{this.props.comment_count + ' 评论 '}</Text>
                        <Text style={{marginRight:12,color:'#3349578A',fontSize:14}}>关注问题</Text>
                    </View>
                </View>
            </View>
        );
    }
}