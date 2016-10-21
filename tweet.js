import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Immutable from 'immutable';


export default class Tweet extends React.Component {
  static propTypes = {
    id: React.PropTypes.number,
    text: React.PropTypes.string,
    user: React.PropTypes.object
  };

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //     return Immutable.is(nextProps, this.props);
  // }

  render() {
    const {id, text, user} = this.props;
    console.log('Tweet Rendered');
    const style = {
      maxWidth: 400,
      margin: 20,
      display: 'inline-block'
    };
    return (
    <Paper style={style} zDepth={4}>
      <Card key={id}>
        <CardHeader
          title={user.name}
          avatar={user.profile_image_url}
        />
        <CardText>{text}</CardText>
      </Card>
    </Paper>
    );
  }
}
