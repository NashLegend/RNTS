/**
 * Created by Zhihu on 2017/2/9.
 */

const K = "K";
const M = "M";


const SECOND_IN_MILLIS = 1000;

const MINUTE_IN_MILLIS = 60 * SECOND_IN_MILLIS;

const HOUR_IN_MILLIS = 60 * MINUTE_IN_MILLIS;

const DAY_IN_MILLIS = 24 * HOUR_IN_MILLIS;

const WEEK_IN_MILLIS = 7 * DAY_IN_MILLIS;

const MONTH_IN_MILLIS = 30 * DAY_IN_MILLIS;

const YEAR_IN_MILLIS = 12 * MONTH_IN_MILLIS;

/**
 * 准确时间
 */
const ACCURATE = 0x00;

/**
 * 绝对时间
 */
const ABSOLUTE = 0x01;

/**
 * 相对时间
 */
const RELATIVE = 0x02;

export function numberToKBase(pVal: number) {
    if (pVal < 1000) {
        return pVal.toString();
    } else if (pVal < 10 * 1000) {
        let mod: number = pVal % 1000 / 100; // 只保留小数点后一位
        if (mod == 0) {
            return (pVal / 1000).toFixed(0) + K;
        } else {
            return (pVal / 1000).toFixed(1) + K;
        }
    } else {
        return (pVal / 1000).toFixed(0) + K;
    }
}

export function getRelativeTime(timeInSeconds: number) {
    let now = Date.now();
    let target = timeInSeconds * SECOND_IN_MILLIS;
    let duration = now - target; // 这里只考虑过去
    if (duration < MINUTE_IN_MILLIS) {
        // 刚刚 ── 1 分钟内的
        return '刚刚';
    } else if (duration < HOUR_IN_MILLIS) {
        // 1 分钟前 ... 59 分钟前
        return (duration / MINUTE_IN_MILLIS).toFixed(0)+' 分钟前';
    } else if (duration < DAY_IN_MILLIS) {
        // 1 小时前 ... 23 小时前
        return (duration / HOUR_IN_MILLIS).toFixed(0)+' 小时前';
    } else if (duration < MONTH_IN_MILLIS) {
        // 1 天前、2 天前 ... 30 天前 ── 自然月计算 －1 天
        return (duration / DAY_IN_MILLIS).toFixed(0)+' 天前';
    } else if (duration < YEAR_IN_MILLIS) {
        // 1 个月前、2 个月前 ... 12 个月前 ── 未满一个月不算一个月
        return (duration / MONTH_IN_MILLIS).toFixed(0)+' 月前';
    } else {
        // N 年前
        return (duration / YEAR_IN_MILLIS).toFixed(0)+' 年前';
    }
}