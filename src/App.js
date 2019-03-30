import React, { Component } from 'react';
import Nav from './components/navbar/index'
import ImgContainer from './components/images'
import Card from './components/card'
import cards from './card.json'
import Jumbo from './components/jumbotron'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props) 
    this.state = {
      cards,
      score: 0
    };
  }
  


  handleClick = () => {
    console.log('this is:', this);
    let score = this.state.score;
    score++;
    this.setState({score: score});
    console.log(this.state.score);
  }


  render() {
    return (
      <div>
      <Nav
       score={this.state.score}
      />
      <Jumbo/>
      <ImgContainer>
      {this.state.cards.map(card => (
        <Card
          id={card.id}
          key={card.id}
          name={card.name}
          image={card.image}
         
          handleClick={this.handleClick}
        />
      ))};
      </ImgContainer>
      </div>
    );
  };
};

export default App;
