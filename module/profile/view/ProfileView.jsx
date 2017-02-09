"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_native_1 = require("react-native");
var ProfileItemView_1 = require("./ProfileItemView");
var Component = React.Component;
var ProfileView = (function (_super) {
    __extends(ProfileView, _super);
    function ProfileView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProfileView.prototype.render = function () {
        return (<react_native_1.View style={{ flexDirection: 'column', backgroundColor: '#F2F4F7' }}>
                <react_native_1.View style={{ flexDirection: 'column', backgroundColor: '#ffffff', elevation: 1 }}>
                    <react_native_1.View style={{ height: 200, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 16 }}>
                        <react_native_1.View>
                            <react_native_1.Image style={{ width: 72, height: 72, borderRadius: 36 }} source={{ uri: this.props.avatar_url }}/>
                            <react_native_1.Image style={{ width: 24, height: 24, borderRadius: 36, marginTop: -24, alignSelf: 'flex-end' }} source={{ uri: this.props.avatar_url }}/>
                        </react_native_1.View>
                        <react_native_1.Text style={{ color: '#0000008A', marginTop: 16, fontSize: 14 }}>{this.props.headline}</react_native_1.Text>
                    </react_native_1.View>
                    <react_native_1.View style={{ flexDirection: 'row', margin: 16 }}>
                        <react_native_1.View style={{ flexDirection: 'column', alignItems: 'stretch', flex: 1 }}>
                            <react_native_1.Text style={{ color: '#0000008A', fontSize: 12 }}>关注的话题</react_native_1.Text>
                            <react_native_1.Text style={{ color: '#000000DE', fontSize: 24, fontWeight: '100' }}>{this.props.following_topic_count}</react_native_1.Text>
                        </react_native_1.View>
                        <react_native_1.View style={{ flexDirection: 'column', alignItems: 'stretch', flex: 1 }}>
                            <react_native_1.Text style={{ color: '#0000008A', fontSize: 12 }}>他关注的人</react_native_1.Text>
                            <react_native_1.Text style={{ color: '#000000DE', fontSize: 24, fontWeight: '100' }}>{this.props.following_count}</react_native_1.Text>
                        </react_native_1.View>
                        <react_native_1.View style={{ flexDirection: 'column', alignItems: 'stretch', flex: 1 }}>
                            <react_native_1.Text style={{ color: '#0000008A', fontSize: 12 }}>关注他的人</react_native_1.Text>
                            <react_native_1.Text style={{ color: '#000000DE', fontSize: 24, fontWeight: '100' }}>{this.props.follower_count}</react_native_1.Text>
                        </react_native_1.View>
                    </react_native_1.View>
                    <react_native_1.View style={{ flexDirection: 'row', marginRight: 16, marginBottom: 16, marginLeft: 16 }}>
                        <react_native_1.Image style={{ width: 24, height: 24, tintColor: '#B9B9B9' }} source={require('../../../assets/img/ic_action_thumb_up@2x.png')}/>
                        <react_native_1.Text style={{ color: '#0000008A', fontSize: 16, marginLeft: 16 }}>{' ' + this.props.voteup_count}</react_native_1.Text>
                        <react_native_1.Image style={{ marginLeft: 32, tintColor: '#B9B9B9' }} source={require('../../../assets/img/ic_action_favorite.png')}/>
                        <react_native_1.Text style={{ color: '#0000008A', fontSize: 16, marginLeft: 16 }}>{' ' + this.props.thanked_count}</react_native_1.Text>
                        <react_native_1.View style={{ flex: 1, height: 0 }}/>
                        <react_native_1.TouchableHighlight>
                            <react_native_1.Text style={{ opacity: 1 }}>关注</react_native_1.Text>
                        </react_native_1.TouchableHighlight>
                    </react_native_1.View>
                </react_native_1.View>
                <react_native_1.View style={{ alignSelf: 'stretch', height: 8 }}/>
                <react_native_1.View style={{ flexDirection: 'column', backgroundColor: '#ffffff', elevation: 1, marginBottom: 1 }}>
                    <ProfileItemView_1.default thumb={require('../../../assets/img/ic_profile_live.png')} detail={this.props.hosted_live_count + ''} title="他的live"/>
                    <ProfileItemView_1.default thumb={require('../../../assets/img/ic_profile_answer.png')} detail={this.props.answer_count + ''} title="他的回答"/>
                    <ProfileItemView_1.default thumb={require('../../../assets/img/ic_profile_question.png')} detail={this.props.question_count + ''} title="他的提问"/>
                    <ProfileItemView_1.default thumb={require('../../../assets/img/ic_profile_favorite.png')} detail={this.props.favorite_count + ''} title="他的收藏"/>
                    <ProfileItemView_1.default thumb={require('../../../assets/img/ic_fab_idea.png')} detail={this.props.pins_count + ''} hideDivider={true} title="他的分享"/>
                </react_native_1.View>
            </react_native_1.View>);
    };
    return ProfileView;
}(Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProfileView;
