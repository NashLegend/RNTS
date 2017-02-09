import * as React from "react";
import {Text} from "react-native";
import Component = React.Component;
/**
 * Created by Zhihu on 2017/2/9.
 */
export default class SectionTitleView extends Component<any,any> {
    render(): JSX.Element {
        return (
            <Text
                style={{fontSize:12,fontWeight:'bold',color:'#000000DE',alignSelf:'stretch',height:36,paddingLeft:16,paddingTop:24}}>空空如也</Text>
        )
    }
}
