"use strict";
var React = require("react");
var react_native_1 = require("react-native");
var ProfileView_1 = require("./view/ProfileView");
var Types_1 = require("./model/Types");
var PinView_1 = require("./view/PinView");
var AnswerView_1 = require("./view/AnswerView");
var ArticleView_1 = require("./view/ArticleView");
var Verbs_1 = require("./model/Verbs");
var SectionTitleView_1 = require("./view/SectionTitleView");
function createView(model) {
    var view;
    switch (model.type) {
        case Types_1.default.TYPE_SECTION_HEAD:
            view = (<SectionTitleView_1.default />);
            break;
        case Types_1.default.TYPE_PEOPLE:
            var people = model;
            view = (<ProfileView_1.default {...people}/>);
            break;
        case Types_1.default.TYPE_ARTICLE:
            var article = model;
            view = (<ArticleView_1.default {...article}/>);
            break;
        case Types_1.default.TYPE_ANSWER:
            var answer = model;
            view = (<AnswerView_1.default {...answer}/>);
            break;
        case Types_1.default.TYPE_PIN:
            var pin = model;
            view = (<PinView_1.default {...pin}/>);
            break;
        case Types_1.default.TYPE_FEED:
            var feed = model;
            view = createFeedView(feed);
            break;
        default:
            view = (<react_native_1.Text style={{ paddingTop: 24, paddingBottom: 24 }}>{'Invalid View : ' + model.type}</react_native_1.Text>);
            break;
    }
    return view;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createView;
function createFeedView(model) {
    var view;
    var target = model.target;
    console.log(model.verb);
    switch (model.verb) {
        case Verbs_1.default[Verbs_1.default.MEMBER_CREATE_ARTICLE]:
            var article = target;
            view = (<ArticleView_1.default {...article}/>);
            break;
        case Verbs_1.default[Verbs_1.default.ANSWER_CREATE]:
        case Verbs_1.default[Verbs_1.default.ANSWER_VOTE_UP]:
            var answer = target;
            view = (<AnswerView_1.default {...answer}/>);
            break;
        case Verbs_1.default[Verbs_1.default.MEMBER_CREATE_PIN]:
            var pin = target;
            view = (<PinView_1.default {...pin}/>);
            break;
        default:
            view = (<react_native_1.Text style={{ paddingTop: 24, paddingBottom: 24 }}>{'Invalid Feed View : ' + model.verb}</react_native_1.Text>);
            break;
    }
    return view;
}
