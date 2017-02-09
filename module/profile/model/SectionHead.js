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
var SectionHead = (function (_super) {
    __extends(SectionHead, _super);
    function SectionHead() {
        var _this = _super.call(this) || this;
        _this.type = Types_1.default.TYPE_SECTION_HEAD;
        return _this;
    }
    return SectionHead;
}(BaseData_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SectionHead;
