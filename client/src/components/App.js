import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Dashboard = () => {
  return (
    <div>
      <h2> Dashboard</h2>
    </div>
  );
};
const SurveyNew = () => {
  return (
    <div>
      <h2> SurveyNew</h2>
    </div>
  );
};
const Landing = () => {
  return (
    <div>
      <h2> Landing</h2>
    </div>
  );
};
class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
