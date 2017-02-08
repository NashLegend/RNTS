/**
 * Created by Zhihu on 2017/2/8.
 */
import BaseData from "./BaseData";

export default class People extends BaseData {

    TYPE_ORGANIZATION = "organization";

    TYPE_PEOPLE = "people";

    TYPE_GUEST = "guest";

    GENDER_FEMALE = 0x00;

    GENDER_MALE = 0x01;

    GENDER_NONE = -1;


    /**
     * user hash id
     *
     * 字符串，匿名用户返回"0"
     */
    id: string;

    /**
     * user id
     *
     * 整数
     */
    uid: string;

    /**
     * 用于向 LeanCloud 注册 PushChannel
     */
    push_channel: string;

    /**
     * 姓名
     */
    name: string;

    /**
     * 邮箱
     */
    email: string;

    /**
     * 手机号
     */
    phone_no: string;

    /**
     * 性别
     * <p/>
     * -1:未设置性别 0:表示女; 1:表示男
     */

    /**
     * 用户是否被激活
     */
    is_active: boolean;

    /**
     * 用户个人简介
     */
    description: string;

    gender = this.GENDER_NONE;


    /**
     * 个人主页标题
     */
    headline: string;

    /**
     * 行业
     */
    business: any;

    /**
     * 教育经历
     */
    educations: Array<any>;

    /**
     * 职业经历
     */
    employments: Array<any>;

    /**
     * 被分享的答案问题数
     */
    shared_count: number;

    /**
     * 向某人提问的总数
     */
    ask_about_count: number;

    /**
     * 收藏数量
     */
    favorite_count: number;

    /**
     * 投票赞成的次数
     */
    voteup_count: number;

    /**
     * 被喜欢的次数
     */
    favorited_count: number;

    /**
     * 居住地
     */
    locations: Array<any>;

    /**
     * 关注的用户总数
     */
    follower_count: number;

    /**
     * 草稿总数
     */
    draft_count: number;

    /**
     * 正关注的收藏夹总数
     */
    following_collection_count: number;

    /**
     * 正关注的话题总数
     */
    following_topic_count: number;

    /**
     * 正关注的专栏总数
     */
    following_columns_count: number;

    /**
     * 自己的专栏数
     */
    columns_count: number;

    /**
     * 新浪微薄地址
     */
    sina_weibo_url: string;

    /**
     * 新浪微薄名称
     */
    sina_weibo_name: string;

    /**
     * 腾讯微薄地址
     */
    qq_weibo_url: string;

    /**
     * 腾讯微薄名称
     */
    qq_weibo_name: string;

    /**
     * 回答总数
     */
    answer_count: number;

    /**
     * 提问总数
     */
    question_count: number;

    /**
     * 头像地址
     */
    avatar_url: string;

    /**
     * 正关注的问题总数
     */
    following_question_count: number;

    /**
     * 被感谢的次数
     */
    thanked_count: number;

    /**
     * 正关注的总数
     */
    following_count: number;

    /**
     * 是否关注
     */
    is_following: boolean;

    /**
     * 是否被关注
     */
    is_followed: boolean;

    /**
     * 是否有推荐到日报的权限
     */
    has_daily_recommend_permission: boolean;

    /**
     * 圆桌嘉宾回答数
     */
    answered_num: number;

    /**
     * 友善度得分
     */
    friendly_score: number;

    /**
     * 是否已经被邀请回答当前问题
     */
    is_invited: boolean;

    /**
     * 创建的文章数
     */
    articles_count: number;

    /**
     * 创建的想法数
     */
    pins_count: number;

    /**
     * 是否绑定微博
     */
    is_bind_sina: boolean;

    /**
     * 帐号是否被锁定
     */
    is_locked: boolean;

    /**
     * 帐号是否被屏蔽
     */
    is_blocking: boolean;

    /**
     * 所参加的live数量
     */
    participated_live_count: number;

    /**
     * 主讲的live数量
     */
    hosted_live_count: number;

    /**
     * 是否开通值乎
     */
    infinity: any;

    /**
     * 用户类型。
     *
     * 可能为 {@link #TYPE_ORGANIZATION}、{@link #TYPE_PEOPLE} 或 {@link #TYPE_GUEST}。
     */
    user_type: string;

    org_detail: any;

    /**
     * 用户认证信息
     */
    badge: Array<any>;

    /**
     * 电子书开关
     */
    open_ebook_feature: boolean;

    constructor() {
        super();
    }
}