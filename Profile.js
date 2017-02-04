"use strict";
///<reference path="node_modules/@types/react-native/index.d.ts"/>
const React = require("react");
const react_native_1 = require("react-native");
class TypeView extends React.Component {
    constructor(props) {
        super();
        this.state = { hasUser: true };
    }
    onPressAvatar() {
        if (this.props.name == 'second') {
            this.props.navigator.pop();
        }
        else {
            this.props.navigator.push({ name: 'second' });
        }
    }
    onButtonClicked() {
        // todo login or logout
    }
    componentDidMount() {
    }
    render() {
        return (React.createElement(react_native_1.View, { style: styles.container },
            React.createElement(react_native_1.TouchableOpacity, { onPress: this.onPressAvatar.bind(this) },
                React.createElement(react_native_1.Image, { style: styles.avatar, source: this.props.avatar })),
            React.createElement(react_native_1.View, { style: styles.subContainer },
                React.createElement(react_native_1.View, { style: { flexDirection: 'row', flex: 1, alignSelf: 'stretch', alignItems: 'center' } },
                    React.createElement(react_native_1.Text, { style: styles.names }, this.state.hasUser ? this.props.name : 'nonymous'),
                    React.createElement(react_native_1.Button, { onPress: this.onButtonClicked.bind(this), title: "Click me ! " })),
                React.createElement(react_native_1.Text, { style: styles.instructions }, this.state.hasUser ? this.props.desc : 'none'))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TypeView;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: 'red',
        borderWidth: 0.5,
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        backgroundColor: '#aaaaaa'
    },
    avatar: {
        width: 96,
        height: 96,
        borderColor: 'red',
        borderWidth: 0.5
    },
    subContainer: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        borderColor: 'blue',
        borderWidth: 0.5
    },
    names: {
        alignSelf: 'stretch',
        textAlign: 'left',
        color: '#333333',
        flex: 1,
        fontSize: 20,
        marginLeft: 12,
        textAlignVertical: 'center'
    },
    instructions: {
        alignSelf: 'stretch',
        textAlign: 'left',
        flex: 1,
        color: '#333333',
        textAlignVertical: 'center',
        fontSize: 16,
        marginLeft: 12,
    },
});
