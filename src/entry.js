/**
 * Created by stefan.wang on 8/8/2016.
 */
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Index from './components/Index'
import Login from './components/Login'
import Blog from './components/Blog'
import AddBook from './components/AddBook'
import reducers from './reducers'
// import {setName, addItem, asyncAction_1} from './actions'
import callTraceMiddleware from './middlewares/callTraceMiddleware'



// 第二个参数是可选的, 用于设置 state 初始状态。这对开发同构应用时非常有用，服务器端redux应用的state结构可以与客户端保持一致
// 那么客户端可以将从网络接收到的服务端 state 直接用于本地数据初始化。
// let store = createStore(reducers);

// 使用中间件thunkMiddleware callTraceMiddleware
const finalCreateStore = applyMiddleware(thunkMiddleware, callTraceMiddleware)(createStore);
let store = finalCreateStore(reducers);



// 测试

// console.log("state: ", store.getState());  // 获取store的state
//
// store.dispatch({
//     type: "AN_ACTION"   // 发出一个未定义的action
// });
//
// console.log("state: ", store.getState());
//
// store.dispatch(setName('stefan'));  // 发出一个SET_NAME的action
//
// console.log("state: ", store.getState());
//
// store.dispatch(addItem({name: 'james', age: 31, sex: 'man'}));
//
// console.log("state: ", store.getState());
//
// console.log("\n", new Date(), 'Running our async action creator:', "\n")
// store.dispatch(asyncAction_1('i am async action'));
// console.log("state: ", store.getState());



render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Index} />
            <Route path="/login" component={Login} />
            <Route path="/blog" component={Blog} />
            <Route path="/add-book" component={AddBook} />
        </Router>
    </Provider>),
    document.getElementById('App')
);