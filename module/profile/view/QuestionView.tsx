/**
 * Created by Pan on 2017/2/8.
 */
import * as React from "react";
import Answer from "../model/Answer";
import {View} from "react-native";
import Component = React.Component;
import JSXElement = JSX.Element;
import Question from "../model/Question";
export default class QuestionView extends Component<Question,any> {

    constructor(props: Question) {
        super(props);
    }

    render(): JSXElement {
        return (
            <View/>
        );
    }

}