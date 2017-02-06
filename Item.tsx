import * as React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Navigator,
    TouchableHighlight
} from 'react-native';

interface Props {
    icon: string
    name: string
    desc: string
    navigator: Navigator
}

interface State {
    isLoggedIn: boolean
}

export default class Profile extends React.Component<Props, State> {

    constructor(props) {
        super(props)
        console.log("Reused?")
    }

    onClick() {
        if (this.props.navigator != null) {
            if (this.props.name == '我的关注') {
                this.props.navigator.push({name: 'first'})
            } else {
                this.props.navigator.push({name: 'third'})
            }
        }
    }

    render() {
        return <TouchableHighlight onPress={this.onClick.bind(this)}>
            <View style={styles.container}>
                <Image style={styles.icon} source={this.props.icon}/>
                <View style={styles.subContainer}>
                    <Text style={styles.names}>{this.props.name}</Text>
                    <View style={styles.divider}/>
                </View>
            </View>
        </TouchableHighlight>
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 96,
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        backgroundColor: '#dbdbdb'
    } as React.ViewStyle,
    icon: {
        width: 64,
        height: 64,
        resizeMode: 'center',
        alignSelf: 'center'
    } as React.ImageStyle,
    subContainer: {
        flex: 1,
    } as React.ViewStyle,
    names: {
        flex: 1,
        color: '#333333',
        alignItems: 'center',
        textAlignVertical: 'center',
        justifyContent: 'center',
        fontSize: 14,
    } as React.TextStyle,
    divider: {
        alignSelf: 'stretch',
        height: 0.5,
        backgroundColor: '#888888',
    } as React.ViewStyle,
});
