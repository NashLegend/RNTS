"use strict";
/**
 * Created by Zhihu on 2017/2/8.
 */
const React = require("react");
const react_native_1 = require("react-native");
var Component = React.Component;
class ProfileItemView extends Component {
    render() {
        return (React.createElement(react_native_1.View, { style: { flexDirection: 'column', height: 48.5, alignItems: 'stretch' } },
            React.createElement(react_native_1.View, { style: { flexDirection: 'row', height: 48, alignItems: 'center', paddingBottom: 16, paddingTop: 16, paddingLeft: 16, paddingRight: 16 } },
                React.createElement(react_native_1.Image, { style: { width: 24, height: 24, tintColor: '#B9B9B9' }, source: this.props.thumb }),
                React.createElement(react_native_1.Text, { style: { flex: 1, color: '#0000008A', fontSize: 16, marginLeft: 16 } }, this.props.title),
                React.createElement(react_native_1.Text, { style: { marginLeft: 12, color: '#0000008A', fontSize: 16 } }, this.props.detail)),
            React.createElement(react_native_1.View, { style: { backgroundColor: '#E6E6E6', height: this.props.hideDivider ? 0 : 0.5, marginLeft: 56 } })));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProfileItemView;
