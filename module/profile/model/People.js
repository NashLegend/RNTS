"use strict";
/**
 * Created by Zhihu on 2017/2/8.
 */
const BaseData_1 = require("./BaseData");
class People extends BaseData_1.default {
    constructor() {
        super();
        this.TYPE_ORGANIZATION = "organization";
        this.TYPE_PEOPLE = "people";
        this.TYPE_GUEST = "guest";
        this.GENDER_FEMALE = 0x00;
        this.GENDER_MALE = 0x01;
        this.GENDER_NONE = -1;
        this.gender = this.GENDER_NONE;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = People;
