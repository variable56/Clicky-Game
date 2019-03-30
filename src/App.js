import React, { Component } from 'react';
import Nav from './components/navbar/index'
import ImgContainer from './components/images'
import Card from './components/card'
import cards from './card.json'
import Jumbo from './components/jumbotron'
import './App.css';

class App extends Component {

  state = {
    cards
  };


  render() {
    return (
      <div>
      <Nav/>
      <Jumbo/>
      <ImgContainer>
      {this.state.cards.map(card => (
        <Card
          id={card.id}
          key={card.id}
          name={card.name}
          image={card.image}
        />
      ))};
      </ImgContainer>
      </div>
    );
  };
};

export default App;
