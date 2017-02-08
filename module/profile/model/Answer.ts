/**
 * Created by Zhihu on 2017/2/8.
 */
import BaseData from "./BaseData";
import People from "./People";

export default class Answer extends BaseData {


    /**
     * 答案 ID
     */
    id: number;

    /**
     * 所属问题
     */
    question: any;

    /**
     * 答案（概要）
     */
    excerpt: string;

    /**
     * 答案具体内容
     */
    content: string;

    /**
     * 回答者
     */
    author: People;

    /**
     * 所属收藏夹
     */
    collection: any;

    /**
     * 评论总数
     */
    comment_count: number;

    /**
     * 赞成投票数
     */
    voteup_count: number;

    /**
     * 发布时间
     */
    created_time: number;

    /**
     * 更新时间
     */
    updated_time: number;

    /**
     * 用户与当前答案的关系
     */
    relationship: any;

    /**
     * 是不是属于自己
     */
    is_mine: boolean;

    /**
     * 评论权限
     */
    comment_permission: string;

    /**
     * 是否可以评论
     */
    can_comment: any;

    /**
     * 回答建议修改状态
     */
    suggest_edit: any;

    is_copyable: boolean;

    /**
     * 添加在回答结尾的额外的信息，格式为 HTML。
     *
     * 目前用于答主的值乎入口。
     */
    extras: string;

    /**
     * 商业提问：是否被广告主选为精选回答
     * @return
     */
    is_sticky: boolean;

    sticky_info: string;


    constructor() {
        super();
    }
}