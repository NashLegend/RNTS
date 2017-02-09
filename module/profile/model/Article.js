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
var Article = (function (_super) {
    __extends(Article, _super);
    function Article() {
        return _super.call(this) || this;
    }
    return Article;
}(BaseData_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Article;
