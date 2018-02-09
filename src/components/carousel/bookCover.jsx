import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as superagent from 'superagent'
import { CardImage, Image } from 'bloomer'

class BookCover extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    fileResourceUrl: PropTypes.string.isRequired,
  };
  state = {
    url: ''
  };
  fetchUri() {
    superagent
      .get(this.props.fileResourceUrl + '.json')
      .end((err, { body }) => {
        debugger;
        this.setState({
          // url: `https://www.drupal.org/files/styles/grid-3/public/book_covers/${body.name}`,
          url: body.url,
        });
      })
  }
  componentDidMount() {
    this.fetchUri();
  }
  render() {
    return(
      <CardImage>
        {this.state.url.length > 0 ? [<Image src={this.state.url} />] : []}
      </CardImage>
    );
  }
}
export default BookCover;