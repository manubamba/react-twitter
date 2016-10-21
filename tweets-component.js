import React from 'react';
import {connect} from 'react-redux';
import Tweet from './tweet';

@connect(({tweets}) => ({
    tweets
}))
export default class TweetsComponent extends React.Component {
  static propTypes = {
    tweets: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {tweets} = this.props;
    return <div>
      {tweets.map(tweet =>
        <Tweet key={tweet.id_str} {...tweet} />
      )}
    </div>
  }
}
