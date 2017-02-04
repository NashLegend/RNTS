/**
 * Created by Zhihu on 2017/2/3.
 */

import {AlertIOS} from 'react-native';

import * as TYPES from './types';

let defaultUser = {
    'name': 'NashLegend',
    'age': '28',
    'avatar': 'https://avatars1.githubusercontent.com/u/5809592'
};

// login
export function logIn() {
    return (dispatch) => {
        dispatch({'type': TYPES.LOGGING});
        let inner_get = fetch('http://www.baidu.com')
            .then((res) => {
                dispatch({'type': TYPES.LOGGED_IN, user: defaultUser});
            }).catch((e) => {
                AlertIOS.alert(e.message);
                dispatch({'type': TYPES.LOGGED_ERROR, error: e});
            });
    }
}

// logout
export function logOut() {
    return {
        'type': TYPES.LOGGED_OUT
    }
}