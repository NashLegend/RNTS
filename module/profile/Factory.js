"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const React = require("react");
const react_native_1 = require("react-native");
const ProfileView_1 = require("./view/ProfileView");
const Types_1 = require("./model/Types");
const PinView_1 = require("./view/PinView");
const AnswerView_1 = require("./view/AnswerView");
const ArticleView_1 = require("./view/ArticleView");
const Verbs_1 = require("./model/Verbs");
const SectionTitleView_1 = require("./view/SectionTitleView");
function createView(model) {
    let view;
    switch (model.type) {
        case Types_1.default.TYPE_SECTION_HEAD:
            view = (React.createElement(SectionTitleView_1.default, null));
            break;
        case Types_1.default.TYPE_PEOPLE:
            let people = model;
            view = (React.createElement(ProfileView_1.default, __assign({}, people)));
            break;
        case Types_1.default.TYPE_ARTICLE:
            let article = model;
            view = (React.createElement(ArticleView_1.default, __assign({}, article)));
            break;
        case Types_1.default.TYPE_ANSWER:
            let answer = model;
            view = (React.createElement(AnswerView_1.default, __assign({}, answer)));
            break;
        case Types_1.default.TYPE_PIN:
            let pin = model;
            view = (React.createElement(PinView_1.default, __assign({}, pin)));
            break;
        case Types_1.default.TYPE_FEED:
            let feed = model;
            view = createFeedView(feed);
            break;
        default:
            view = (React.createElement(react_native_1.Text, { style: { paddingTop: 24, paddingBottom: 24 } }, 'Invalid View : ' + model.type));
            break;
    }
    return view;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createView;
function createFeedView(model) {
    let view;
    let target = model.target;
    console.log(model.verb);
    switch (model.verb) {
        case Verbs_1.default[Verbs_1.default.MEMBER_CREATE_ARTICLE]:
            let article = target;
            view = (React.createElement(ArticleView_1.default, __assign({}, article)));
            break;
        case Verbs_1.default[Verbs_1.default.ANSWER_CREATE]:
        case Verbs_1.default[Verbs_1.default.ANSWER_VOTE_UP]:
            let answer = target;
            view = (React.createElement(AnswerView_1.default, __assign({}, answer)));
            break;
        case Verbs_1.default[Verbs_1.default.MEMBER_CREATE_PIN]:
            let pin = target;
            view = (React.createElement(PinView_1.default, __assign({}, pin)));
            break;
        default:
            view = (React.createElement(react_native_1.Text, { style: { paddingTop: 24, paddingBottom: 24 } }, 'Invalid Feed View : ' + model.verb));
            break;
    }
    return view;
}
