"use strict";
const BaseData_1 = require("./BaseData");
const Types_1 = require("./Types");
/**
 * Created by Zhihu on 2017/2/9.
 */
class Empty extends BaseData_1.default {
    constructor() {
        super();
        this.type = Types_1.default.TYPE_EMPTY;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Empty;
