import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import socket from 'socket.io-client';
import Immutable from 'immutable';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import tweets from './tweets';
import {ADD_TWEET, addTweet} from './actions';

const io = socket('http://localhost:3000/');
const store = createStore(tweets, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

io.on('tweet', (tweet) => {
    if (store.getState().fetchTweets) {
        store.dispatch(addTweet(tweet))
    }
});


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'))