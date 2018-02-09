import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Box  } from 'bloomer';
import Header from './components/header'
import Carousel from './components/carousel'
import AppFooter from './components/footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Container style={{
          marginTop: '2rem',
          marginBottom: '2rem',
        }}>
          <Carousel/>
        </Container>
        <AppFooter/>
      </div>
    );
  }
}

export default App;
