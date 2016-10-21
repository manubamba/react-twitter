export const ADD_TWEET = "ADD_TWEET";
export const TOGGLE_FETCH = "TOGGLE_FETCH";

export const addTweet = (tweet) => ({
    type: ADD_TWEET,
    tweet
});

export const toggleFetch = () => ({
    type: TOGGLE_FETCH
});