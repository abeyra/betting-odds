import './App.scss';
import axios from 'axios';
import React from 'react';
import Homepage from './pages/Homepage.jsx';
const url = 'https://api.the-odds-api.com';
const allSports = '/v4/sports/?apiKey=';
const apiKey = '57a12a0f264c5daba3eec2187f4c0248';

export default class App extends React.Component {

  state = {
    odds: []
  }

  getAllSports = () => {
   axios.get(url + allSports + apiKey)
      .then(response => {
        console.log(response);
      });
  }

  getLiveOddsBasketball = () => {
    axios.get(url + '/v4/sports/basketball_nba/odds/?apiKey='+ apiKey +'&regions=us&markets=spreads')
      .then(response => {
        console.log(response.data);
        this.setState({
          odds: response.data
        })
      })
  }

  componentDidMount() {
    this.getLiveOddsBasketball();
  }

  render() {
    return (
      <div className="App">
        <Homepage odds={this.state.odds}/>
      </div>
    );
  }
}

