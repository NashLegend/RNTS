"use strict";
/**
 * Created by Zhihu on 2017/2/3.
 */
const redux_1 = require("redux");
const users_1 = require("./users");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_1.combineReducers({
    user: users_1.default,
});
