"use strict";
/**
 * Created by Zhihu on 2017/2/3.
 */
const redux_1 = require("redux");
const redux_thunk_1 = require("redux-thunk");
const redux_persist_1 = require("redux-persist");
const react_native_1 = require("react-native");
const reducers_1 = require("../reducers");
const logger = store => next => action => {
    if (typeof action === 'function')
        console.log('dispatching a function');
    else
        console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
};
let middlewares = [
    logger,
    redux_thunk_1.default
];
let createAppStore = redux_1.applyMiddleware(...middlewares)(redux_1.createStore);
function configureStore(onComplete) {
    const store = redux_persist_1.autoRehydrate()(createAppStore)(reducers_1.default);
    let opt = {
        storage: react_native_1.AsyncStorage,
        transform: [],
    };
    redux_persist_1.persistStore(store, opt, onComplete);
    return store;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = configureStore;
