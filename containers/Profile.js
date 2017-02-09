"use strict";
/**
 * Created by Zhihu on 2017/2/4.
 */
const react_redux_1 = require("react-redux");
const Profile_1 = require("../Profile");
const mapStateToProps = (state) => ({
    user: state.user
});
const Profile = react_redux_1.connect(mapStateToProps)(Profile_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Profile;
