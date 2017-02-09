/**
 * Created by Zhihu on 2017/2/9.
 */
"use strict";
var K = "K";
var M = "M";
function numberToKBase(pVal) {
    console.log(pVal + '__');
    if (pVal < 1000) {
        return pVal.toString();
    }
    else if (pVal < 10 * 1000) {
        var mod = pVal % 1000 / 100; // 只保留小数点后一位
        if (mod == 0) {
            return (pVal / 1000).toFixed(0) + K;
        }
        else {
            return (pVal / 1000).toFixed(1) + K;
        }
    }
    else {
        return (pVal / 1000).toFixed(0) + K;
    }
}
exports.numberToKBase = numberToKBase;
