import Immutable from 'immutable';
import {ADD_TWEET, TOGGLE_FETCH, DISABLE_FETCH} from './actions';

const initialState = {
    tweets: Immutable.List(),
    fetchTweets: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TWEET:
            return Object.assign({}, state, {tweets: state.tweets.unshift(action.tweet)});
        case TOGGLE_FETCH:
            return Object.assign({}, state, {fetchTweets: !state.fetchTweets});
        case DISABLE_FETCH:
            return Object.assign({}, state, {fetchTweets: false});
        default:
            return state;
    }
};

export default reducer;