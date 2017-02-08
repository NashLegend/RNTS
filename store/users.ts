/**
 * Created by Zhihu on 2017/2/3.
 */
import {applyMiddleware, createStore, Store} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

let middlewares = [
    thunk
];

let createAppStore = applyMiddleware(...middlewares)(createStore);
export default function configureStore(): Store<OneState> {
    return createAppStore(reducers);
}