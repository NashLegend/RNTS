"use strict";
const React = require("react");
const react_native_1 = require("react-native");
const ProfileItemView_1 = require("./ProfileItemView");
const NumberUtils_1 = require("../../../NumberUtils");
var Component = React.Component;
class ProfileView extends Component {
    render() {
        return (React.createElement(react_native_1.View, { style: { flexDirection: 'column', backgroundColor: '#F2F4F7' } },
            React.createElement(react_native_1.View, { style: { flexDirection: 'column', backgroundColor: '#ffffff', elevation: 1 } },
                React.createElement(react_native_1.View, { style: { height: 200, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 16 } },
                    React.createElement(react_native_1.View, null,
                        React.createElement(react_native_1.Image, { style: { width: 72, height: 72, borderRadius: 36 }, source: { uri: this.props.avatar_url } }),
                        React.createElement(react_native_1.Image, { style: { width: 24, height: 24, borderRadius: 36, marginTop: -24, alignSelf: 'flex-end' }, source: { uri: this.props.avatar_url } })),
                    React.createElement(react_native_1.Text, { style: { color: '#0000008A', marginTop: 16, fontSize: 14 } }, this.props.headline)),
                React.createElement(react_native_1.View, { style: { flexDirection: 'row', margin: 16 } },
                    React.createElement(react_native_1.View, { style: { flexDirection: 'column', alignItems: 'stretch', flex: 1 } },
                        React.createElement(react_native_1.Text, { style: { color: '#0000008A', fontSize: 12 } }, "\u5173\u6CE8\u7684\u8BDD\u9898"),
                        React.createElement(react_native_1.Text, { style: { color: '#000000DE', fontSize: 24, fontWeight: '100' } }, this.props.following_topic_count)),
                    React.createElement(react_native_1.View, { style: { flexDirection: 'column', alignItems: 'stretch', flex: 1 } },
                        React.createElement(react_native_1.Text, { style: { color: '#0000008A', fontSize: 12 } }, "\u4ED6\u5173\u6CE8\u7684\u4EBA"),
                        React.createElement(react_native_1.Text, { style: { color: '#000000DE', fontSize: 24, fontWeight: '100' } }, this.props.following_count)),
                    React.createElement(react_native_1.View, { style: { flexDirection: 'column', alignItems: 'stretch', flex: 1 } },
                        React.createElement(react_native_1.Text, { style: { color: '#0000008A', fontSize: 12 } }, "\u5173\u6CE8\u4ED6\u7684\u4EBA"),
                        React.createElement(react_native_1.Text, { style: { color: '#000000DE', fontSize: 24, fontWeight: '100' } }, this.props.follower_count))),
                React.createElement(react_native_1.View, { style: { flexDirection: 'row', marginRight: 16, marginBottom: 16, marginLeft: 16 } },
                    React.createElement(react_native_1.Image, { style: { width: 24, height: 24, tintColor: '#B9B9B9' }, source: require('../../../assets/img/ic_action_thumb_up@2x.png') }),
                    React.createElement(react_native_1.Text, { style: { color: '#0000008A', fontSize: 16, marginLeft: 16 } }, NumberUtils_1.numberToKBase(this.props.voteup_count)),
                    React.createElement(react_native_1.Image, { style: { marginLeft: 32, tintColor: '#B9B9B9' }, source: require('../../../assets/img/ic_action_favorite.png') }),
                    React.createElement(react_native_1.Text, { style: { color: '#0000008A', fontSize: 16, marginLeft: 16 } }, NumberUtils_1.numberToKBase(this.props.thanked_count)),
                    React.createElement(react_native_1.View, { style: { flex: 1, height: 0 } }),
                    React.createElement(react_native_1.TouchableHighlight, null,
                        React.createElement(react_native_1.Text, { style: { opacity: 1 } }, "\u5173\u6CE8")))),
            React.createElement(react_native_1.View, { style: { alignSelf: 'stretch', height: 8 } }),
            React.createElement(react_native_1.View, { style: { flexDirection: 'column', backgroundColor: '#ffffff', elevation: 1, marginBottom: 1 } },
                React.createElement(ProfileItemView_1.default, { thumb: require('../../../assets/img/ic_profile_live.png'), detail: this.props.hosted_live_count, title: "他的live" }),
                React.createElement(ProfileItemView_1.default, { thumb: require('../../../assets/img/ic_profile_answer.png'), detail: this.props.answer_count, title: "他的回答" }),
                React.createElement(ProfileItemView_1.default, { thumb: require('../../../assets/img/ic_profile_question.png'), detail: this.props.question_count, title: "他的提问" }),
                React.createElement(ProfileItemView_1.default, { thumb: require('../../../assets/img/ic_profile_favorite.png'), detail: this.props.favorite_count, title: "他的收藏" }),
                React.createElement(ProfileItemView_1.default, { thumb: require('../../../assets/img/ic_fab_idea.png'), detail: this.props.pins_count, hideDivider: true, title: "他的分享" }))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProfileView;
