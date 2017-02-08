/**
 * Created by Zhihu on 2017/2/8.
 */
import BaseData from "./BaseData";
import People from "./People";

export default class Article extends BaseData {

    id: number;

    title: string;

    image_url: string;

    excerpt: string;

    excerpt_title: string;

    content: string;

    author: People;

    comment_count: number;

    voteup_count: number;

    votedown_count: number;

    is_author_follower: number;

    created: number;

    updated: number;

    can_tip: boolean;

    tipjarors_count: number;

    constructor() {
        super();
    }
}