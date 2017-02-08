/**
 * Created by Zhihu on 2017/2/8.
 */
import BaseData from "./model/BaseData";
import * as React from "react";
import {Text} from "react-native";
import ProfileView from "./view/ProfileView";
import People from "./model/People";
import Types from "./model/Types";
import Article from "./model/Article";
import Answer from "./model/Answer";
import Pin from "./model/Pin";

export default function createView(model: BaseData): JSX.Element {
    let view: JSX.Element;
    switch (model.type) {
        case Types.TYPE_PEOPLE:
            let people: People = model as People;
            view = (<ProfileView {...people}/>)
            break;
        case Types.TYPE_ARTICLE:
            let article: Article = model as Article;
            view = (<ProfileView {...people}/>)
            break;
        case Types.TYPE_ANSWER:
            let answer: Answer = model as Answer;
            view = (<ProfileView {...people}/>)
            break;
        case Types.TYPE_PIN:
            let pin: Pin = model as Pin;
            view = (<ProfileView {...people}/>)
            break;
        default:
            view = (<Text>Invalid View</Text>)
            break;
    }
    return view;
}