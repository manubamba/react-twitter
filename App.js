import React from 'react';
import io from 'socket.io-client';
import Immutable from 'immutable';
import Tweet from './tweet';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Toggle from 'material-ui/Toggle';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.io = io('http://localhost:3000/');
    this.io.on('tweet', (tweet) => {
        if (this.state.fetchTweets) {
            this.setState({
                tweets: this.state.tweets.unshift(tweet)
            });
        }
    })
  }

  state = {
    tweets: Immutable.List(),
    fetchTweets: true
  }

  toggleFeed() {
    this.setState({
        fetchTweets: !this.state.fetchTweets
    });
  }

  render() {
    const {tweets, fetchTweets} = this.state;
    const styles = {
      labelStyle: {
        color: '#444'
      },
      toggle: {
        margin: 25,
        width: 200
      }
    };
    return (
    <MuiThemeProvider>
      <div>
          <AppBar
            title="React Twitter"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <Toggle
              defaultToggled={true}
              label="Fetch Tweets"
              labelStyle={styles.labelStyle}
              onToggle={() => this.toggleFeed()}
              thumbStyle={styles.thumbOff}
              toggled={fetchTweets}
              trackStyle={styles.trackOff}
              trackSwitchedStyle={styles.trackSwitched}
              style={styles.toggle}
            />
          {tweets.map(tweet =>
        <Tweet key={tweet.id_str} {...tweet} />
      )}</div>
    </MuiThemeProvider>
    );
  }
}
