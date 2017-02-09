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
import PinView from "./view/PinView";
import AnswerView from "./view/AnswerView";
import ArticleView from "./view/ArticleView";
import Feed from "./model/Feed";
import {default as FeedVerb} from "./model/Verbs";
import SectionTitleView from "./view/SectionTitleView";

export default function createView(model: BaseData): JSX.Element {
    let view: JSX.Element;
    switch (model.type) {
        case Types.TYPE_SECTION_HEAD:
            view = (<SectionTitleView/>);
            break;
        case Types.TYPE_PEOPLE:
            let people: People = model as People;
            view = (<ProfileView {...people}/>);
            break;
        case Types.TYPE_ARTICLE:
            let article: Article = model as Article;
            view = (<ArticleView {...article}/>);
            break;
        case Types.TYPE_ANSWER:
            let answer: Answer = model as Answer;
            view = (<AnswerView {...answer}/>);
            break;
        case Types.TYPE_PIN:
            let pin: Pin = model as Pin;
            view = (<PinView {...pin}/>);
            break;
        case Types.TYPE_FEED:
            let feed: Feed = model as Feed;
            view = createFeedView(feed);
            break;
        default:
            view = (<Text style={{paddingTop:24,paddingBottom:24}}>{'Invalid View : ' + model.type}</Text>);
            break;
    }
    return view;
}

function createFeedView(model: Feed): JSX.Element {
    let view: JSX.Element;
    let target = model.target;
    console.log(model.verb);
    switch (model.verb) {
        case FeedVerb[FeedVerb.MEMBER_CREATE_ARTICLE]:
            let article: Article = target as Article;
            view = (<ArticleView {...article}/>);
            break;
        case FeedVerb[FeedVerb.ANSWER_CREATE]:
        case FeedVerb[FeedVerb.ANSWER_VOTE_UP]:
            let answer: Answer = target as Answer;
            view = (<AnswerView {...answer}/>);
            break;
        case FeedVerb[FeedVerb.MEMBER_CREATE_PIN]:
            let pin: Pin = target as Pin;
            view = (<PinView {...pin}/>);
            break;
        default:
            view = (<Text style={{paddingTop:24,paddingBottom:24}}>{'Invalid Feed View : ' + model.verb}</Text>);
            break;
    }
    return view;
}