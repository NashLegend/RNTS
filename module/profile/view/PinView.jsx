"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_native_1 = require("react-native");
var Component = React.Component;
var PinView = (function (_super) {
    __extends(PinView, _super);
    function PinView(props) {
        return _super.call(this, props) || this;
    }
    PinView.prototype.render = function () {
        return (<react_native_1.View style={{ flexDirection: 'column', padding: 16 }}>
                <react_native_1.View style={{ flexDirection: 'row', alignSelf: 'stretch', marginBottom: 12 }}>
                    <react_native_1.Image style={{ width: 20, height: 20, borderRadius: 10 }} source={{ uri: this.props.author.avatar_url }}/>
                    <react_native_1.Text style={{ flex: 1, marginLeft: 12, color: '#3349578A' }}>{this.props.author.name + '分享了'}</react_native_1.Text>
                    <react_native_1.Text style={{ color: '#3349578A' }}>{this.props.created}</react_native_1.Text>
                </react_native_1.View>
                <react_native_1.Text style={{ marginBottom: 12, lineHeight: 24, fontSize: 14, color: '#0000008A' }} numberOfLines={3}>{this.props.excerpt_title}</react_native_1.Text>
                <react_native_1.View style={{ flexDirection: 'row', alignSelf: 'stretch' }}>
                    <react_native_1.Text style={{ marginRight: 12, color: '#3349578A', fontSize: 14 }}>{this.props.like_count + '赞 '}</react_native_1.Text>
                    <react_native_1.Text style={{ marginRight: 12, color: '#3349578A', fontSize: 14 }}>{this.props.comment_count + '评论 '}</react_native_1.Text>
                </react_native_1.View>
            </react_native_1.View>);
    };
    return PinView;
}(Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PinView;
