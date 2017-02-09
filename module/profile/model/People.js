"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Zhihu on 2017/2/8.
 */
var BaseData_1 = require("./BaseData");
var People = (function (_super) {
    __extends(People, _super);
    function People() {
        var _this = _super.call(this) || this;
        _this.TYPE_ORGANIZATION = "organization";
        _this.TYPE_PEOPLE = "people";
        _this.TYPE_GUEST = "guest";
        _this.GENDER_FEMALE = 0x00;
        _this.GENDER_MALE = 0x01;
        _this.GENDER_NONE = -1;
        _this.gender = _this.GENDER_NONE;
        return _this;
    }
    return People;
}(BaseData_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = People;
