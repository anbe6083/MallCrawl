import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Nightlife_Entry from './Nightlife_Entry';
import Landing from './Landing';
import { Footer } from 'react-materialize';
const Dashboard = () => {
  return (
    <div>
      <h2> Dashboard</h2>
      <Nightlife_Entry />
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
            <Footer
              copyrights="Copyright 2018 Andrew Berumen"
              links={
                <ul>
                  <li>
                    <a
                      className="grey-text text-lighten-3"
                      href="https://github.com/anbe6083"
                    >
                      Check me out on Github!
                    </a>
                  </li>
                </ul>
              }
              className=" blue-grey"
            >
              <p className="grey-text text-lighten-4 ">
                Built by Andrew Berumen
              </p>
            </Footer>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
