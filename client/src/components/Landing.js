import React, { Component } from 'react';
import { Input, Button } from 'react-materialize';
import axios from 'axios';
import { connect, MapStateToProps } from 'react-redux';
import Dashboard from './Dashboard';
class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationInput: '',
      location: '',
      businesses: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({
      locationInput: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ location: this.state.locationInput });
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>MallCrawl</h1>
        Coordinate your nightlife plans with your friends!
        {/* <div class="input-field col s6">
          <form
            method="post"
            onSubmit={this.handleSubmit}
            action="/api/location"
          >
            <Input
              s={6}
              type="text"
              value={this.state.locationInput}
              label="Location"
              name="locationInput"
              onChange={this.handleChange}
            />
            <Button waves="light" type="submit">
              Search
            </Button>
          </form>
          <Dashboard location={this.state.location} />
        </div> */}
        <Dashboard location={this.state.location} />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Landing);
