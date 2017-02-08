/**
 * Created by Zhihu on 2017/2/8.
 */
import BaseData from "./model/BaseData";
import * as React from "react";
import {View, Text} from 'react-native'
import ProfileView from "./view/ProfileView";
import People from "./model/People";
import Types from "./model/Types";

export default function createView(model: BaseData): JSX.Element {
    let view: JSX.Element;
    switch (model.type) {
        case Types.TYPE_PEOPLE:
            let people: People = model as People;
            view = (<ProfileView {...people}/>)
            break;
        case Types.TYPE_ARTICLE:
            let article: People = model as People;
            view = (<ProfileView {...people}/>)
            break;
        case Types.TYPE_ANSWER:
            let answer: People = model as People;
            view = (<ProfileView {...people}/>)
            break;
        case Types.TYPE_PIN:
            let pin: People = model as People;
            view = (<ProfileView {...people}/>)
            break;
        default:
            view = (<Text>Invalid View</Text>)
            break;
    }
    return view;
}