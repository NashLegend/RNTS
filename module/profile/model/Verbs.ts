enum FeedVerb {
    // =============================================================================================
    // Feed
    // =============================================================================================

    QUESTION_CREATE,
    QUESTION_FOLLOW,

    ANSWER_CREATE,
    ANSWER_VOTE_UP,

    ARTICLE_CREATE,
    ARTICLE_VOTE_UP,

    EBOOK_VOTE_UP,

    ROUNDTABLE_FOLLOW,

        // =============================================================================================
        // Top Story
        // =============================================================================================

    MEMBER_ANSWER_QUESTION,
    MEMBER_ASK_QUESTION,
    MEMBER_CREATE_ARTICLE,
    MEMBER_FOLLOW_QUESTION,
    MEMBER_VOTEUP_ANSWER,
    MEMBER_VOTEUP_ARTICLE,
    MEMBER_VOTEUP_EBOOK,		// 赞了电子书
    MEMBER_FOLLOW_COLUMN,
    MEMBER_FOLLOW_ROUNDTABLE,
    MEMBER_FOLLOW_FAVORITES,	// 用户关注收藏夹
    MEMBER_COLLECT_ANSWER,		// 用户收藏回答
    MEMBER_COLLECT_ARTICLE,
    FAVORITES_COLLECT_ARTICLE,
    MEMBER_PUBLISH_EBOOK,		// 新书出版

    FAVORITES_COLLECT_ANSWER,	// 收藏夹新收藏了回答

    TOPIC_ACKNOWLEDGED_ANSWER,
    TOPIC_ACKNOWLEDGED_EBOOK,	// 话题的电子书相关
    TOPIC_POPULAR_QUESTION,
    TOPIC_WARMINGUP_ROUNDTABLE,

    TOPIC_ACKNOWLEDGED_ARTICLE,
    COLUMN_POPULAR_ARTICLE,
    COLUMN_NEW_ARTICLE,

    ROUNDTABLE_ADD_ANSWER,
    ROUNDTABLE_ADD_QUESTION,

    PROMOTION_ANSWER,
    PROMOTION_ARTICLE,

    MEMBER_CREATE_PIN, // Pin
    MEMBER_LIKE_PIN,

    MEMBER_JOIN_EVENT, // T74169 活动页

        // =============================================================================================
        // User Feed
        // =============================================================================================
    TOPIC_FOLLOW,
        /**
         * 与 MEMBER_FOLLOW_FAVORITES (TopStory) 不同，MEMBER_FOLLOW_COLLECTION 仅用于 User Feed
         */
    MEMBER_FOLLOW_COLLECTION,

        // =============================================================================================
        // Live Feed
        // =============================================================================================
    LIVE_JOIN,
    LIVE_PUBLISH,
    LIVE_BANNER,
    MEMBER_LIKE_LIVE,

    UNKNOWN
}

export function reflect(verb: string): string {
    return FeedVerb[FeedVerb[verb]]
}

export default FeedVerb;