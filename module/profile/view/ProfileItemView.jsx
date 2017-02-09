"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Zhihu on 2017/2/8.
 */
var React = require("react");
var react_native_1 = require("react-native");
var Component = React.Component;
var ProfileItemView = (function (_super) {
    __extends(ProfileItemView, _super);
    function ProfileItemView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProfileItemView.prototype.render = function () {
        return (<react_native_1.View style={{ flexDirection: 'column', height: 48.5, alignItems: 'stretch' }}>
                <react_native_1.View style={{ flexDirection: 'row', height: 48, alignItems: 'center', paddingBottom: 16, paddingTop: 16, paddingLeft: 16, paddingRight: 16 }}>
                    <react_native_1.Image style={{ width: 24, height: 24, tintColor: '#B9B9B9' }} source={this.props.thumb}/>
                    <react_native_1.Text style={{ flex: 1, color: '#0000008A', fontSize: 16, marginLeft: 16 }}>{this.props.title}</react_native_1.Text>
                    <react_native_1.Text style={{ marginLeft: 12, color: '#0000008A', fontSize: 16 }}>{this.props.detail}</react_native_1.Text>
                </react_native_1.View>
                <react_native_1.View style={{ backgroundColor: '#E6E6E6', height: this.props.hideDivider ? 0 : 0.5, marginLeft: 56 }}/>
            </react_native_1.View>);
    };
    return ProfileItemView;
}(Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProfileItemView;
