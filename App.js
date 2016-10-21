import React from 'react';
import io from 'socket.io-client';
import Immutable from 'immutable';
import Tweet from './tweet';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.io = io('http://localhost:3000/');
    this.io.on('tweet', (tweet) => {
        this.setState({
            tweets: this.state.tweets.unshift(tweet) 
        });
    })
  }

  state = {
    tweets: Immutable.List()
  }

  render() {
    const {tweets} = this.state;
    return (
    <MuiThemeProvider>
      <div>
          <AppBar
            title="React Twitter"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          {tweets.map(tweet =>
        <Tweet key={tweet.id_str} {...tweet} />
      )}</div>
    </MuiThemeProvider>
    );
  }
}
