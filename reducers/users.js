/**
 * Created by Zhihu on 2017/2/3.
 */
"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const TYPES = require("../actions/types");
const initialState = {
    isLoggedIn: false,
    user: {},
    status: null,
};
function user(state = initialState, action) {
    switch (action.type) {
        case TYPES.LOGGING:
            return __assign({}, state, { status: 'doing' });
        case TYPES.LOGGED_IN:
            return __assign({}, state, { isLoggedIn: true, user: action.user, status: 'done' });
        case TYPES.LOGGED_OUT:
            return __assign({}, state, { isLoggedIn: false, user: {}, status: null });
        case TYPES.LOGGED_ERROR:
            return __assign({}, state, { isLoggedIn: false, user: {}, status: null });
        default:
            return state;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = user;
