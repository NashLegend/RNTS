"use strict";
///<reference path="node_modules/@types/react-native/index.d.ts"/>
const React = require("react");
const react_native_1 = require("react-native");
const UserActions = require("./actions/users");
let InfoTalk = react_native_1.NativeModules.InfoTalk;
let talkTimes = 1;
let autoTimes = 1000;
let startTime = 0;
class TypeView extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        react_native_1.DeviceEventEmitter.addListener("NativeTalk", this.getNativeCalled.bind(this));
    }
    onPressAvatar() {
        this.props.navigator.push({ name: 'second' });
    }
    onButtonClicked() {
        if (this.props.user.isLoggedIn) {
            this.props.store.dispatch(UserActions.logOut());
        }
        else {
            this.props.store.dispatch(UserActions.logIn());
        }
    }
    getNativeCalled(e) {
        this.setState({
            nativeCall: e
        });
    }
    callNativeTimes() {
        if (startTime == 0) {
            startTime = Date.now();
        }
        InfoTalk.echoPlease(talkTimes, "please", (ts, msg) => {
            if (autoTimes > ts) {
                talkTimes = ts;
                this.callNativeTimes();
            }
            else {
                InfoTalk.talkToYou(ts, 'cost ' + (Date.now() - startTime) + ' ms');
                talkTimes = 0;
                startTime = 0;
            }
        });
    }
    render() {
        let user = this.props.user;
        let info = "Empty";
        if (this.state != null && this.state.nativeCall != null) {
            info = this.state.nativeCall + " TimeInMills " + Date.now();
        }
        console.log(info);
        return (React.createElement(react_native_1.View, null,
            React.createElement(react_native_1.View, { style: styles.container },
                React.createElement(react_native_1.TouchableOpacity, { onPress: this.onPressAvatar.bind(this) },
                    React.createElement(react_native_1.Image, { style: styles.avatar, source: { uri: user.isLoggedIn ? user.user.avatar : this.props.avatar } })),
                React.createElement(react_native_1.View, { style: styles.subContainer },
                    React.createElement(react_native_1.View, { style: { flexDirection: 'row', flex: 1, alignSelf: 'stretch', alignItems: 'center' } },
                        React.createElement(react_native_1.Text, { style: styles.names }, user.isLoggedIn ? user.user.name : 'visitor'),
                        React.createElement(react_native_1.Button, { onPress: this.onButtonClicked.bind(this), title: "Toggle Log" })),
                    React.createElement(react_native_1.Text, { style: styles.instructions }, user.isLoggedIn ? user.user.age : 'just a visitor without age'))),
            React.createElement(react_native_1.View, null,
                React.createElement(react_native_1.Button, { onPress: this.callNativeTimes.bind(this), title: "Call Native" }),
                React.createElement(react_native_1.Text, { style: { fontSize: 24, textAlign: 'center' } }, info))));
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
