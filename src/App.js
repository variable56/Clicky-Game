import React, { Component } from 'react';
// import Nav from './components/navbar/index'
import ImgContainer from './components/images'
import Card from './components/card'
import cards from './card.json'
import './App.css';

class App extends Component {

  state = {
    cards
  };

  render() {
    return (
      
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
    );
  };
};

export default App;
