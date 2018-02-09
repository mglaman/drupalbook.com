import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt, faShoppingCart } from '@fortawesome/fontawesome-free-solid'
import { faDrupal } from '@fortawesome/fontawesome-free-brands'
import * as superagent from 'superagent'
import {
  Card, CardContent, CardFooter, CardFooterItem, CardHeader, CardHeaderTitle, Column, Columns, Content, Media,
  Tile
} from 'bloomer'
import BookCover from './bookCover'

const apiUrl = 'https://www.drupal.org/api-d7/node.json?type=book_listing&taxonomy_vocabulary_5=20236&sort=field_book_listing_date&direction=DESC&limit=8';

class Carousel extends Component {
  state = {
    books: [],
  };
  fetchBooks() {
    superagent
      .get(apiUrl)
      .end((err, { body }) => {
        this.setState({
          books: body.list,
        });
      })
  }
  componentDidMount() {
    this.fetchBooks();
  }
  render() {
    return(
      <div className="columns is-multiline">
        {this.state.books.map((book, key )=> (
          <div className="column is-4" key={book.nid}>
            <Card>
              <CardHeader>
                <CardHeaderTitle>
                  {book.title}
                </CardHeaderTitle>
              </CardHeader>
              <BookCover title={book.title} fileResourceUrl={book.field_cover_image.file.uri}/>
              <CardFooter>
                <CardFooterItem href={book.url}>
                  <FontAwesomeIcon icon={faDrupal} size="lg"/>
                </CardFooterItem>
                <CardFooterItem href={book.field_official_website.url}>
                  <FontAwesomeIcon icon={faExternalLinkAlt}/>
                </CardFooterItem>
                <CardFooterItem href={book.field_book_purchase_link.url}>
                  <FontAwesomeIcon icon={faShoppingCart}/>
                </CardFooterItem>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    );
  }
}

export default Carousel;