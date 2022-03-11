import './App.scss';
import axios from 'axios';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import React from 'react';
import Header from './components/Header/Header.jsx';
import Basketball from './pages/Basketball/Basketball.jsx';
const url = 'https://api.the-odds-api.com';
const allSports = '/v4/sports/?apiKey=';
const apiKey = '57a12a0f264c5daba3eec2187f4c0248';

export default class App extends React.Component {

  state = {
    basketballOdds: []
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
          basketballOdds: response.data
        })
      })
  }

  componentDidMount() {
    this.getLiveOddsBasketball();
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Basketball basketballOdds={this.state.basketballOdds}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

