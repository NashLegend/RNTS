import * as React from "react";
import {View} from "react-native";
import Pin from "../model/Pin";
import Component = React.Component;
import JSXElement = JSX.JSXElement;
import Verbs from "../model/Verbs";
export default class PinView extends Component<Pin,any> {

    constructor(props: Pin) {
        super(props);
    }

    render(): any {
        console.log(Verbs)
        return (
            <View/>
        );
    }

}