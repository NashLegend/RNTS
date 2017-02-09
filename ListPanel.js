"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
///<reference path="node_modules/@types/react-native/index.d.ts"/>
const React = require("react");
const react_native_1 = require("react-native");
const Item_1 = require("./Item");
class ListPanel extends React.Component {
    constructor(props) {
        super(props);
        this.source = new react_native_1.ListView.DataSource(this);
        var ss = [];
        for (let i = 0; i < 3; i++) {
            ss.push({ title: 'what you see before request done' + i });
        }
        this.state = {
            dataSource: this.source.cloneWithRows(ss)
        };
    }
    rowHasChanged(r1, r2) {
        return r1 !== r2;
    }
    componentDidMount() {
        this.startRequest();
    }
    startRequest() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let response = yield fetch('http://facebook.github.io/react-native/movies.json');
                let responseJson = yield response.json();
                let arr = responseJson.movies;
                arr = arr.concat(arr).concat(arr).concat(arr).concat(arr).concat(arr).concat(arr).concat(arr).concat(arr).concat(arr).concat(arr);
                this.setState({
                    dataSource: this.source.cloneWithRows(arr)
                });
            }
            catch (err) {
                this.setState({
                    dataSource: this.source.cloneWithRows([{ title: 'error' }])
                });
            }
        });
    }
    renderRow(rowData, sectionID, rowID, highlightRow) {
        return React.createElement(Item_1.default, { name: rowData.title, desc: "dddd", navigator: this.props.navigator, icon: require('./assets/img/ic_follow_more.png') });
    }
    render() {
        //在Android上加上下面这行会使用原生的RecyclerViewBackedScrollView，复用View，如果不加的话，只会使用ScrollView
        //renderScrollComponent={()=><RecyclerViewBackedScrollView {...this.props} />}
        return (React.createElement(react_native_1.View, { style: { flex: 1, justifyContent: 'center', alignItems: 'stretch', flexDirection: 'column' } },
            React.createElement(react_native_1.ListView, { style: { alignSelf: 'stretch' }, renderScrollComponent: () => React.createElement(react_native_1.RecyclerViewBackedScrollView, __assign({}, this.props)), initialListSize: 1, dataSource: this.state.dataSource, renderRow: this.renderRow.bind(this) })));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ListPanel;
