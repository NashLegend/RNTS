"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/**
 * Created by Zhihu on 2017/2/8.
 */
const React = require("react");
const react_native_1 = require("react-native");
const Factory_1 = require("../Factory");
const Mocks_1 = require("../Mocks");
const SectionHead_1 = require("../model/SectionHead");
const Empty_1 = require("../model/Empty");
var Component = React.Component;
let _navigator;
react_native_1.BackAndroid.addEventListener('hardwareBackPress', () => {
    if (_navigator && _navigator.getCurrentRoutes().length > 1) {
        _navigator.pop();
        return true;
    }
    return false;
});
class ProfileFragment extends Component {
    renderRow(rowData) {
        return Factory_1.default(rowData);
    }
    rowHasChanged(r1, r2) {
        return r1 != r2;
    }
    componentDidMount() {
        this.request();
    }
    request() {
        console.log("request");
        try {
            let all = [];
            let people = JSON.parse(Mocks_1.profile);
            all.push(people);
            let feeds = JSON.parse(Mocks_1.activities).data;
            if (feeds.length > 0) {
                all.push(new SectionHead_1.default());
                all = all.concat(feeds);
            }
            else {
                all.push(new Empty_1.default());
            }
            this.setState({
                dataSource: this.source.cloneWithRows(all)
            });
        }
        catch (err) {
            this.setState({
                dataSource: this.source.cloneWithRows([{ title: 'error' }])
            });
        }
    }
    constructor(props) {
        super(props);
        this.source = new react_native_1.ListView.DataSource(this);
        this.state = {
            dataSource: this.source
        };
    }
    render() {
        return (React.createElement(react_native_1.View, { style: { flex: 1, justifyContent: 'center', alignItems: 'stretch', flexDirection: 'column', backgroundColor: '#F2F4F7' } },
            React.createElement(react_native_1.ListView, { style: { alignSelf: 'stretch' }, renderScrollComponent: () => React.createElement(react_native_1.RecyclerViewBackedScrollView, __assign({}, this.props)), initialListSize: 1, renderSeparator: (sectionID, rowID) => React.createElement(react_native_1.View, { key: `${sectionID}-${rowID}`, style: { backgroundColor: '#dbdbdb', height: 0.5 } }), dataSource: this.state.dataSource, renderRow: this.renderRow.bind(this) })));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProfileFragment;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});
