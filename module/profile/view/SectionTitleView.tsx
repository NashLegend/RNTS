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
                style={{fontSize:12,fontWeight:'bold',color:'#0000008A',alignSelf:'stretch',paddingLeft:16,paddingTop:16,paddingBottom:8}}>最新动态</Text>
        )
    }
}
