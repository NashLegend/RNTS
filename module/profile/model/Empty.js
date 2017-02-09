"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BaseData_1 = require("./BaseData");
var Types_1 = require("./Types");
/**
 * Created by Zhihu on 2017/2/9.
 */
var Empty = (function (_super) {
    __extends(Empty, _super);
    function Empty() {
        var _this = _super.call(this) || this;
        _this.type = Types_1.default.TYPE_EMPTY;
        return _this;
    }
    return Empty;
}(BaseData_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Empty;
