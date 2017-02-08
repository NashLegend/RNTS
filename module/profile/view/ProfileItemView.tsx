/**
 * Created by Zhihu on 2017/2/8.
 */
import * as React from 'react'
import {View, Image, Text, ImageURISource} from 'react-native'
import Component = React.Component;

interface Props {
    thumb: ImageURISource,
    title: string,
    detail: string
}

export default class ProfileItemView extends Component<Props,any> {
    render(): JSX.Element {
        console.log(this.props.thumb);
        return (
            <View style={{flexDirection:'row',height:48,alignItems:'center'}}>
                <Image style={{width:24,height:24}} source={this.props.thumb}/>
                <Text style={{flex:1,marginLeft:12}}>{this.props.title}</Text>
                <Text>{this.props.detail}</Text>
            </View>
        );
    }
}

