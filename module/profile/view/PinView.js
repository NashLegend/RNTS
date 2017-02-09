"use strict";
const React = require("react");
const react_native_1 = require("react-native");
var Component = React.Component;
class PinView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(react_native_1.View, { style: { flexDirection: 'column' } },
            React.createElement(react_native_1.View, { style: { flexDirection: 'column', padding: 16, backgroundColor: '#ffffff', marginBottom: 8, elevation: 1 } },
                React.createElement(react_native_1.View, { style: { flexDirection: 'row', alignSelf: 'stretch', marginBottom: 12 } },
                    React.createElement(react_native_1.Image, { style: { width: 20, height: 20, borderRadius: 10 }, source: { uri: this.props.author.avatar_url } }),
                    React.createElement(react_native_1.Text, { style: { flex: 1, marginLeft: 12, color: '#3349578A' } }, this.props.author.name + '分享了'),
                    React.createElement(react_native_1.Text, { style: { color: '#3349578A' } }, this.props.created)),
                React.createElement(react_native_1.Text, { style: { marginBottom: 12, lineHeight: 24, fontSize: 14, color: '#0000008A' }, numberOfLines: 3 }, this.props.excerpt_title),
                React.createElement(react_native_1.View, { style: { flexDirection: 'row', alignSelf: 'stretch' } },
                    React.createElement(react_native_1.Text, { style: { marginRight: 12, color: '#3349578A', fontSize: 14 } }, this.props.like_count + ' 赞'),
                    React.createElement(react_native_1.Text, { style: { marginRight: 12, color: '#3349578A', fontSize: 14 } }, this.props.comment_count + ' 评论')))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PinView;
