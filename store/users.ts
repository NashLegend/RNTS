/**
 * Created by Zhihu on 2017/2/3.
 */
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import {AsyncStorage} from 'react-native';
import reducers from '../reducers';

let middlewares = [
    thunk
];

let createAppStore = applyMiddleware(...middlewares)(createStore);

export default function configureStore(onComplete: () => void) {
    const store = autoRehydrate()(createAppStore)(reducers);
    let opt = {
        storage: AsyncStorage,
        transform: [],
    };
    persistStore(store, opt, onComplete);
    return store;
}