/**
 * Created by Zhihu on 2017/2/3.
 */
"use strict";
const react_native_1 = require("react-native");
const TYPES = require("./types");
let defaultUser = {
    'name': 'NashLegend',
    'age': '28',
    'avatar': 'https://avatars1.githubusercontent.com/u/5809592'
};
// login
function logIn() {
    return (dispatch) => {
        dispatch({ 'type': TYPES.LOGGING });
        let inner_get = fetch('http://www.baidu.com')
            .then((res) => {
            dispatch({ 'type': TYPES.LOGGED_IN, user: defaultUser });
        }).catch((e) => {
            react_native_1.AlertIOS.alert(e.message);
            dispatch({ 'type': TYPES.LOGGED_ERROR, error: e });
        });
    };
}
exports.logIn = logIn;
// logout
function logOut() {
    return {
        'type': TYPES.LOGGED_OUT
    };
}
exports.logOut = logOut;
