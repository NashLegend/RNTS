"use strict";
var FeedVerb;
(function (FeedVerb) {
    // =============================================================================================
    // Feed
    // =============================================================================================
    FeedVerb[FeedVerb["QUESTION_CREATE"] = 0] = "QUESTION_CREATE";
    FeedVerb[FeedVerb["QUESTION_FOLLOW"] = 1] = "QUESTION_FOLLOW";
    FeedVerb[FeedVerb["ANSWER_CREATE"] = 2] = "ANSWER_CREATE";
    FeedVerb[FeedVerb["ANSWER_VOTE_UP"] = 3] = "ANSWER_VOTE_UP";
    FeedVerb[FeedVerb["ARTICLE_CREATE"] = 4] = "ARTICLE_CREATE";
    FeedVerb[FeedVerb["ARTICLE_VOTE_UP"] = 5] = "ARTICLE_VOTE_UP";
    FeedVerb[FeedVerb["EBOOK_VOTE_UP"] = 6] = "EBOOK_VOTE_UP";
    FeedVerb[FeedVerb["ROUNDTABLE_FOLLOW"] = 7] = "ROUNDTABLE_FOLLOW";
    // =============================================================================================
    // Top Story
    // =============================================================================================
    FeedVerb[FeedVerb["MEMBER_ANSWER_QUESTION"] = 8] = "MEMBER_ANSWER_QUESTION";
    FeedVerb[FeedVerb["MEMBER_ASK_QUESTION"] = 9] = "MEMBER_ASK_QUESTION";
    FeedVerb[FeedVerb["MEMBER_CREATE_ARTICLE"] = 10] = "MEMBER_CREATE_ARTICLE";
    FeedVerb[FeedVerb["MEMBER_FOLLOW_QUESTION"] = 11] = "MEMBER_FOLLOW_QUESTION";
    FeedVerb[FeedVerb["MEMBER_VOTEUP_ANSWER"] = 12] = "MEMBER_VOTEUP_ANSWER";
    FeedVerb[FeedVerb["MEMBER_VOTEUP_ARTICLE"] = 13] = "MEMBER_VOTEUP_ARTICLE";
    FeedVerb[FeedVerb["MEMBER_VOTEUP_EBOOK"] = 14] = "MEMBER_VOTEUP_EBOOK";
    FeedVerb[FeedVerb["MEMBER_FOLLOW_COLUMN"] = 15] = "MEMBER_FOLLOW_COLUMN";
    FeedVerb[FeedVerb["MEMBER_FOLLOW_ROUNDTABLE"] = 16] = "MEMBER_FOLLOW_ROUNDTABLE";
    FeedVerb[FeedVerb["MEMBER_FOLLOW_FAVORITES"] = 17] = "MEMBER_FOLLOW_FAVORITES";
    FeedVerb[FeedVerb["MEMBER_COLLECT_ANSWER"] = 18] = "MEMBER_COLLECT_ANSWER";
    FeedVerb[FeedVerb["MEMBER_COLLECT_ARTICLE"] = 19] = "MEMBER_COLLECT_ARTICLE";
    FeedVerb[FeedVerb["FAVORITES_COLLECT_ARTICLE"] = 20] = "FAVORITES_COLLECT_ARTICLE";
    FeedVerb[FeedVerb["MEMBER_PUBLISH_EBOOK"] = 21] = "MEMBER_PUBLISH_EBOOK";
    FeedVerb[FeedVerb["FAVORITES_COLLECT_ANSWER"] = 22] = "FAVORITES_COLLECT_ANSWER";
    FeedVerb[FeedVerb["TOPIC_ACKNOWLEDGED_ANSWER"] = 23] = "TOPIC_ACKNOWLEDGED_ANSWER";
    FeedVerb[FeedVerb["TOPIC_ACKNOWLEDGED_EBOOK"] = 24] = "TOPIC_ACKNOWLEDGED_EBOOK";
    FeedVerb[FeedVerb["TOPIC_POPULAR_QUESTION"] = 25] = "TOPIC_POPULAR_QUESTION";
    FeedVerb[FeedVerb["TOPIC_WARMINGUP_ROUNDTABLE"] = 26] = "TOPIC_WARMINGUP_ROUNDTABLE";
    FeedVerb[FeedVerb["TOPIC_ACKNOWLEDGED_ARTICLE"] = 27] = "TOPIC_ACKNOWLEDGED_ARTICLE";
    FeedVerb[FeedVerb["COLUMN_POPULAR_ARTICLE"] = 28] = "COLUMN_POPULAR_ARTICLE";
    FeedVerb[FeedVerb["COLUMN_NEW_ARTICLE"] = 29] = "COLUMN_NEW_ARTICLE";
    FeedVerb[FeedVerb["ROUNDTABLE_ADD_ANSWER"] = 30] = "ROUNDTABLE_ADD_ANSWER";
    FeedVerb[FeedVerb["ROUNDTABLE_ADD_QUESTION"] = 31] = "ROUNDTABLE_ADD_QUESTION";
    FeedVerb[FeedVerb["PROMOTION_ANSWER"] = 32] = "PROMOTION_ANSWER";
    FeedVerb[FeedVerb["PROMOTION_ARTICLE"] = 33] = "PROMOTION_ARTICLE";
    FeedVerb[FeedVerb["MEMBER_CREATE_PIN"] = 34] = "MEMBER_CREATE_PIN";
    FeedVerb[FeedVerb["MEMBER_LIKE_PIN"] = 35] = "MEMBER_LIKE_PIN";
    FeedVerb[FeedVerb["MEMBER_JOIN_EVENT"] = 36] = "MEMBER_JOIN_EVENT";
    // =============================================================================================
    // User Feed
    // =============================================================================================
    FeedVerb[FeedVerb["TOPIC_FOLLOW"] = 37] = "TOPIC_FOLLOW";
    /**
     * 与 MEMBER_FOLLOW_FAVORITES (TopStory) 不同，MEMBER_FOLLOW_COLLECTION 仅用于 User Feed
     */
    FeedVerb[FeedVerb["MEMBER_FOLLOW_COLLECTION"] = 38] = "MEMBER_FOLLOW_COLLECTION";
    // =============================================================================================
    // Live Feed
    // =============================================================================================
    FeedVerb[FeedVerb["LIVE_JOIN"] = 39] = "LIVE_JOIN";
    FeedVerb[FeedVerb["LIVE_PUBLISH"] = 40] = "LIVE_PUBLISH";
    FeedVerb[FeedVerb["LIVE_BANNER"] = 41] = "LIVE_BANNER";
    FeedVerb[FeedVerb["MEMBER_LIKE_LIVE"] = 42] = "MEMBER_LIKE_LIVE";
    FeedVerb[FeedVerb["UNKNOWN"] = 43] = "UNKNOWN";
})(FeedVerb || (FeedVerb = {}));
function reflect(verb) {
    return FeedVerb[FeedVerb[verb]];
}
exports.reflect = reflect;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FeedVerb;
