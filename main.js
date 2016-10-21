import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import socket from 'socket.io-client';
import Immutable from 'immutable';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import tweets from './tweets';
import {ADD_TWEET, addTweet} from './actions';
import { Router, Route, browserHistory } from 'react-router'
import Hello from './hello';

const io = socket('http://localhost:3000/');
const store = createStore(tweets, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

io.on('tweet', (tweet) => {
    if (store.getState().fetchTweets) {
        store.dispatch(addTweet(tweet))
    }
});

const component = (
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/hello" component={Hello} />
    </Router>
);


ReactDOM.render(<Provider store={store}>{component}</Provider>, document.getElementById('app'))