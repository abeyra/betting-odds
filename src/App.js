import './App.scss';
import axios from 'axios';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import React from 'react';
import Header from './components/Header/Header.jsx';
import Basketball from './pages/Basketball/Basketball.jsx';
import Hockey from './pages/Hockey/Hockey.jsx';
const url = 'https://api.the-odds-api.com';
const allSports = '/v4/sports/?apiKey=';
const apiKey = '57a12a0f264c5daba3eec2187f4c0248';

export default class App extends React.Component {

  state = {
    basketballOdds: [],
    hockeyOdds: []
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

  getLiveOddsHockey = () => {
    axios.get(url + '/v4/sports/icehockey_nhl/odds/?apiKey='+ apiKey +'&regions=us&markets=spreads')
      .then(response => {
        console.log(response.data);
        this.setState({
          hockeyOdds: response.data
        })
      })
  }

  // getLiveOddsMma = () => {
  //   axios.get(url + '/v4/sports/mma_mixed_martial_arts/odds/?apiKey='+ apiKey +'&regions=us&markets=spreads')
  //     .then(response => {
  //       console.log(response.data);
  //       this.setState({
  //         mmaOdds: response.data
  //       })
  //     })
  // }

  componentDidMount() {
    this.getAllSports();
    this.getLiveOddsBasketball();
    this.getLiveOddsHockey();
    // this.getLiveOddsMma();
  }

  // componentDidUpdate() {

  // }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact render={routerProps => <Basketball {...routerProps} basketballOdds={this.state.basketballOdds}/>} />
          <Route path="/Hockey" exact render={routerProps => <Hockey {...routerProps} hockeyOdds={this.state.hockeyOdds}/>} />
          {/* <Route path="/Mma" exact render={routerProps => <Mma {...routerProps} mmaOdds={this.state.mmaOdds}/>} /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

