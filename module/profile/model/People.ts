/**
 * Created by Zhihu on 2017/2/8.
 */
import BaseData from './BaseData';

export default class People extends BaseData {
    following_topic_count:number;
    following_count:number;
    follower_count:number;
    voteup_count:number;
    thanked_count:number;
    avatar_url:string;
    headline:string;

    constructor() {
        super();
    }
}