///<reference path="node_modules/@types/react-native/index.d.ts"/>
import * as React from 'react'
import { StyleSheet, Text, Image, View, Navigator, TouchableOpacity, TouchableNativeFeedback, Button } from 'react-native'

interface Props {
    avatar: string
    name: string
    desc: string
    navigator: Navigator
}

interface State {
    hasUser: boolean
}

export default class TypeView extends React.Component<Props, State> {

    constructor(props: Props) {
        super();
        this.state = { hasUser: true };
    }

    onPressAvatar() {
        if (this.props.name == 'second') {
            this.props.navigator.pop()
        } else {
            this.props.navigator.push({ name: 'second' })
        }
    }

    onButtonClicked() {
        // todo login or logout
    }

    componentDidMount(): void {

    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.onPressAvatar.bind(this)}>
                    <Image style={styles.avatar} source={this.props.avatar} />
                </TouchableOpacity>
                <View style={styles.subContainer}>
                    <View style={{ flexDirection: 'row', flex: 1, alignSelf: 'stretch', alignItems: 'center' }}>
                        <Text style={styles.names}>{this.state.hasUser ? this.props.name : 'nonymous'}</Text>
                        <Button onPress={this.onButtonClicked.bind(this)} title="Click me ! " />
                    </View>
                    <Text style={styles.instructions}>{this.state.hasUser ? this.props.desc : 'none'}</Text>
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
