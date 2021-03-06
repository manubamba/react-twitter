import React from 'react';
import Tweet from './tweet';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Immutable from 'immutable';
import Toggle from 'material-ui/Toggle';
import TweetsComponent from './tweets-component';
import {connect} from 'react-redux';
import {toggleFetch, disableFetch} from './actions';
import {Link} from 'react-router';

@connect(({fetchTweets}) => ({
    fetchTweets
}), (dispatch) => ({
    toggleFeed: () => dispatch(toggleFetch()),
    disableFetch: () => dispatch(disableFetch())
}))
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
      console.log('Unmount');
      this.props.disableFetch();
  }

  render() {
    const {fetchTweets, toggleFeed} = this.props;
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
          >
          <Link to="/hello">The hello page</Link>
          </AppBar>
          <Toggle
              defaultToggled={true}
              label="Fetch Tweets"
              labelStyle={styles.labelStyle}
              onToggle={toggleFeed}
              thumbStyle={styles.thumbOff}
              toggled={fetchTweets}
              trackStyle={styles.trackOff}
              trackSwitchedStyle={styles.trackSwitched}
              style={styles.toggle}
            />

            <TweetsComponent />
          </div>
    </MuiThemeProvider>
    );
  }
}
