import People from "./People";
/**
 * Created by Pan on 2017/2/8.
 */
export default class Question {

    numberTYPE_NORMAL = "normal";

    numberTYPE_COMMERCIAL = "commercial";

    numberTYPE_ORG = "org";

    numberid: number;

    numbertitle: string;

    // 等同于 title，此处 search2.0 仅用在搜索返回「相关内容」时
    name: string;

    numberexcerpt: string;

    numberdetail: string;

    numbertopic: any;

    numbertopics: Array<any>;

    numberanswers: Array<any>;

    numberdraft: any;

    numbercreated: number;

    numberupdated_time: number;

    numberauthor: People;

    // numberredirection")
    // public Redirection;

    numbercomment_count: number;

    numberanswer_count: number;

    numberfollower_count: number;

    numberrelationship: any;

    numberstatus: any;

    numbersuggest_edit: any;

    // 仅用于 Feed 列表的状态判断，详情页以 relationship 为准
    numberis_following: boolean;

    numberredirection: any;

    numberis_editable: boolean;

    numberis_reportable: boolean;

    numberallow_delete: boolean;

    /**
     * 评论权限
     */
    numbercomment_permission: string;

    /**
     * 是否可以评论
     */
    numbercan_comment: any;

    /**
     * 问题类型：normal 普通提问／org 机构提问／commercial 商业提问
     */
    numberquestion_type: string;
}