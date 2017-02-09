"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Zhihu on 2017/2/8.
 */
var React = require("react");
var react_native_1 = require("react-native");
var Factory_1 = require("../Factory");
var Mocks_1 = require("../Mocks");
var SectionHead_1 = require("../model/SectionHead");
var Empty_1 = require("../model/Empty");
var Component = React.Component;
var _navigator;
react_native_1.BackAndroid.addEventListener('hardwareBackPress', function () {
    if (_navigator && _navigator.getCurrentRoutes().length > 1) {
        _navigator.pop();
        return true;
    }
    return false;
});
var ProfileFragment = (function (_super) {
    __extends(ProfileFragment, _super);
    function ProfileFragment(props) {
        var _this = _super.call(this, props) || this;
        _this.source = new react_native_1.ListView.DataSource(_this);
        _this.state = {
            dataSource: _this.source
        };
        return _this;
    }
    ProfileFragment.prototype.renderRow = function (rowData) {
        return Factory_1.default(rowData);
    };
    ProfileFragment.prototype.rowHasChanged = function (r1, r2) {
        return r1 != r2;
    };
    ProfileFragment.prototype.componentDidMount = function () {
        this.request();
    };
    ProfileFragment.prototype.request = function () {
        console.log("request");
        try {
            var all = [];
            var people = JSON.parse(Mocks_1.profile);
            all.push(people);
            var feeds = JSON.parse(Mocks_1.activities).data;
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
    };
    ProfileFragment.prototype.render = function () {
        var _this = this;
        return (<react_native_1.View style={{ flex: 1, justifyContent: 'center', alignItems: 'stretch', flexDirection: 'column' }}>
                <react_native_1.ListView style={{ alignSelf: 'stretch' }} renderScrollComponent={function () { return <react_native_1.RecyclerViewBackedScrollView {..._this.props}/>; }} initialListSize={1} renderSeparator={function (sectionID, rowID) { return <react_native_1.View key={sectionID + "-" + rowID} style={{ backgroundColor: '#dbdbdb', height: 0.5 }}/>; }} dataSource={this.state.dataSource} renderRow={this.renderRow.bind(this)}/>
            </react_native_1.View>);
    };
    return ProfileFragment;
}(Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProfileFragment;
var styles = react_native_1.StyleSheet.create({
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
