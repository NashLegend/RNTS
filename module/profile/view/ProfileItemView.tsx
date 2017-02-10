/**
 * Created by Zhihu on 2017/2/8.
 */
import * as React from "react";
import {View, Image, Text, ImageURISource, TouchableHighlight} from "react-native";

import Component = React.Component;

interface Props {
    thumb: ImageURISource,
    title: string,
    detail: number,
    hideDivider?: boolean
}

export default class ProfileItemView extends Component<Props,any> {

    onPress() {

    }

    render(): JSX.Element {
        return (
            <TouchableHighlight underlayColor="#d9d9d944" onPress={this.onPress.bind(this)}>
                <View style={{flexDirection:'column',height:48.5,alignItems:'stretch'}}>
                    <View
                        style={{flexDirection:'row',height:48,alignItems:'center',paddingBottom:16,paddingTop:16,paddingLeft:16,paddingRight:16}}>
                        <Image style={{width:24,height:24,tintColor:'#B9B9B9'}} source={this.props.thumb}/>
                        <Text style={{flex:1,color:'#0000008A',fontSize:16,marginLeft:16}}>{this.props.title}</Text>
                        <Text
                            style={{marginLeft:12,color:'#0000008A',fontSize:16}}>{this.props.detail}</Text>
                    </View>
                    <View style={{backgroundColor:'#E6E6E6',height:this.props.hideDivider?0:0.5,marginLeft:56}}/>
                </View>
            </TouchableHighlight>
        );
    }
}