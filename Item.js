"use strict";
const React = require("react");
const react_native_1 = require("react-native");
class Profile extends React.Component {
    constructor(props) {
        super(props);
    }
    onClick() {
        if (this.props.navigator != null) {
            if (this.props.name == '我的关注') {
                this.props.navigator.push({ name: 'first' });
            }
            else {
                this.props.navigator.push({ name: 'third' });
            }
        }
    }
    render() {
        return React.createElement(react_native_1.TouchableHighlight, { onPress: this.onClick.bind(this) },
            React.createElement(react_native_1.View, { style: styles.container },
                React.createElement(react_native_1.Image, { style: styles.icon, source: this.props.icon }),
                React.createElement(react_native_1.View, { style: styles.subContainer },
                    React.createElement(react_native_1.Text, { style: styles.names }, this.props.name),
                    React.createElement(react_native_1.View, { style: styles.divider }))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Profile;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 96,
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        backgroundColor: '#dbdbdb'
    },
    icon: {
        width: 64,
        height: 64,
        resizeMode: 'center',
        alignSelf: 'center'
    },
    subContainer: {
        flex: 1,
    },
    names: {
        flex: 1,
        color: '#333333',
        alignItems: 'center',
        textAlignVertical: 'center',
        justifyContent: 'center',
        fontSize: 14,
    },
    divider: {
        alignSelf: 'stretch',
        height: 0.5,
        backgroundColor: '#888888',
    },
});
