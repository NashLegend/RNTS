///<reference path="node_modules/@types/react-native/index.d.ts"/>
import * as React from 'react'
import {
    StyleSheet,
    Text,
    Image,
    View,
    Navigator,
    TouchableOpacity,
    NativeModules,
    TouchableNativeFeedback,
    DeviceEventEmitter,
    Button
} from 'react-native'
import * as UserActions from './actions/users'
import {Store} from "redux";

interface Props {
    avatar: string
    name: string
    desc: string
    navigator: Navigator
    store: Store<any>
    user: any
}

let InfoTalk = NativeModules.InfoTalk;

interface State {
    nativeCall: string
}

let talkTimes = 1;
let autoTimes = 1000;
let startTime = 0;

export default class TypeView extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    componentDidMount(): void {
        DeviceEventEmitter.addListener("NativeTalk", this.getNativeCalled.bind(this))
    }

    onPressAvatar() {
        if (this.props.name == 'second') {
            this.props.navigator.pop()
        } else {
            this.props.navigator.push({name: 'second'})
        }
    }

    onButtonClicked() {
        if (this.props.user.isLoggedIn) {
            this.props.store.dispatch(UserActions.logOut())
        } else {
            this.props.store.dispatch(UserActions.logIn())
        }
    }

    getNativeCalled(e) {
        console.log(this);
        console.log(this.state);
        this.setState({
            nativeCall:e
        })
    }

    callNativeTimes() {
        if (startTime == 0) {
            startTime = Date.now()
        }
        InfoTalk.echoPlease(talkTimes, "please", (ts, msg) => {
            if (autoTimes > ts) {
                talkTimes = ts;
                this.callNativeTimes()
            } else {
                InfoTalk.talkToYou(ts, 'cost ' + (Date.now() - startTime) + ' ms');
                talkTimes = 0;
                startTime = 0;
            }
        });
    }

    render() {
        let user = this.props.user;
        console.log("render");
        let info: string = "Empty";
        if (this.state != null && this.state.nativeCall != null) {
            info = this.state.nativeCall
        }
        console.log(info);
        return (
            <View>
                <View style={styles.container}>
                    <TouchableOpacity onPress={this.onPressAvatar.bind(this)}>
                        <Image style={styles.avatar} source={{uri:user.isLoggedIn?user.user.avatar:this.props.avatar}}/>
                    </TouchableOpacity>
                    <View style={styles.subContainer}>
                        <View style={{ flexDirection: 'row', flex: 1, alignSelf: 'stretch', alignItems: 'center' }}>
                            <Text style={styles.names}>{user.isLoggedIn ? user.user.name : 'visitor'}</Text>
                            <Button onPress={this.onButtonClicked.bind(this)} title="Toggle Log"/>
                        </View>
                        <Text
                            style={styles.instructions}>{user.isLoggedIn ? user.user.age : 'just a visitor without age'}</Text>
                    </View>
                </View>
                <View>
                    <Button onPress={this.callNativeTimes.bind(this)} title="Call Native"/>
                    <Text
                        style={{fontSize:24,textAlign:'center'}}>{info}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: 'red',
        borderWidth: 0.5,
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        backgroundColor: '#aaaaaa'
    } as React.ViewStyle,
    avatar: {
        width: 96,
        height: 96,
        borderColor: 'red',
        borderWidth: 0.5
    } as React.ImageStyle,
    subContainer: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        borderColor: 'blue',
        borderWidth: 0.5
    } as React.ViewStyle,
    names: {
        alignSelf: 'stretch',
        textAlign: 'left',
        color: '#333333',
        flex: 1,
        fontSize: 20,
        marginLeft: 12,
        textAlignVertical: 'center'
    } as React.TextStyle,
    instructions: {
        alignSelf: 'stretch',
        textAlign: 'left',
        flex: 1,
        color: '#333333',
        textAlignVertical: 'center',
        fontSize: 16,
        marginLeft: 12,
    } as React.TextStyle,
});
