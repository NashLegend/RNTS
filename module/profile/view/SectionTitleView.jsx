"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_native_1 = require("react-native");
var Component = React.Component;
/**
 * Created by Zhihu on 2017/2/9.
 */
var SectionTitleView = (function (_super) {
    __extends(SectionTitleView, _super);
    function SectionTitleView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SectionTitleView.prototype.render = function () {
        return (<react_native_1.Text style={{ fontSize: 12, fontWeight: 'bold', color: '#0000008A', alignSelf: 'stretch', paddingLeft: 16, paddingTop: 16, paddingBottom: 8 }}>最新动态</react_native_1.Text>);
    };
    return SectionTitleView;
}(Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SectionTitleView;
