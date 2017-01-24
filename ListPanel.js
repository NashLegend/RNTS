"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        return React.createElement(Item_1.default, { name: rowData.title, desc: "dddd", icon: require('./assets/img/ic_follow_more.png') });
    }
    render() {
        return React.createElement(react_native_1.ListView, { dataSource: this.state.dataSource, renderRow: this.renderRow.bind(this) });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ListPanel;
