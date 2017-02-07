/**
 * Created by Zhihu on 2017/2/3.
 */

import * as TYPES from '../actions/types';

const initialState = {
    isLoggedIn: false,
    user: {},
    status: null,
};

export default function user(state = initialState, action) {

    switch (action.type) {
        case TYPES.LOGGING:
            return {
                ...state,
                status: 'doing'
            };

        case TYPES.LOGGED_IN:
            return {
                ...state,
                isLoggedIn: true,
                user: action.user,
                status: 'done'
            };

        case TYPES.LOGGED_OUT:
            return {
                ...state,
                isLoggedIn: false,
                user: {},
                status: null
            };
        case TYPES.LOGGED_ERROR:
            return {
                ...state,
                isLoggedIn: false,
                user: {},
                status: null
            };
        default:
            return state;
    }

}