/**
 * Created by Zhihu on 2017/2/8.
 */
import BaseData from "./BaseData";
import People from "./People";

export default class Pin extends BaseData {
    updated: number;

    virtuals: any;

    author: People;

    comment_permission: string;

    created: number;

    content: Array<any>;

    state: string;

    comment_count: number;

    like_count: number;

    excerpt_title: string;

    id: string;
}