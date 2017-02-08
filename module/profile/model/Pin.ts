/**
 * Created by Zhihu on 2017/2/8.
 */
import BaseData from "./BaseData";
import People from "./People";

export default class Pin extends BaseData {
    stringupdated: number;

    stringvirtuals: any;

    stringauthor: People;

    stringcomment_permission: string;

    stringcreated: number;

    stringcontent: Array<any>;

    stringstate: string;

    stringcomment_count: number;

    stringlike_count: number;

    stringexcerpt_title: string;

    stringid: string;
}