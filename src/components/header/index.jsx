import React, { Component } from 'react'
import { Container, Navbar, NavbarBrand, NavbarEnd, NavbarItem, NavbarMenu } from 'bloomer'
import logo from './logo.png';

class Header extends Component {
  render () {
    return (
      <Navbar style={{
        background: '#363636'
      }}>
        <Container>
          <NavbarBrand>
            <NavbarItem hasTextColor="light" href={'/'}>
              <img src={logo} alt="DrupalBook.com" style={{ marginRight: 5 }}/>
              <span className="">DrupalBook.com</span>
            </NavbarItem>
          </NavbarBrand>
          <NavbarMenu>
            <NavbarEnd>
              <NavbarItem hasTextColor="light" href="http://www.drupal.org/">
                <span>Join the community at Drupal.org</span>
              </NavbarItem>
            </NavbarEnd>
          </NavbarMenu>
        </Container>
      </Navbar>
    )
  }
}

export default Header;
