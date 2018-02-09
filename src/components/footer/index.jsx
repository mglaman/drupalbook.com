import React, { Component } from 'react'
import { Column, Columns, Container, Footer } from 'bloomer'

class AppFooter extends Component {
  render() {
    return(
      <Footer>
        <Container>
          <Columns>
            <Column>
              <a href="https://drupal.com/trademark">Drupal Trademark Policy</a>
            </Column>
            <Column>
              © 2018 • Drupal is a registered trademark of  <a href="http://buytaert.net/"><strong>Dries Buytaert</strong></a>
            </Column>
          </Columns>
        </Container>
      </Footer>
    );
  }
}
export default AppFooter;