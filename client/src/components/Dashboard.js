import Nightlife_Entry from './Nightlife_Entry.js';
import React, { Component } from 'react';
import axios from 'axios';
import { Input, Button } from 'react-materialize';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationInput: '',
      businesses: [],
      user: {},
      location: ''
    };
  }

  componentDidUpdate() {
    if (this.state.locationInput != this.state.location) {
      this.setState({ location: this.state.locationInput });
    }
  }

  updateLocation() {
    if (this.state.locationInput != this.state.location) {
      this.yelpApiCall();
      this.state.location = this.state.locationInput;
    }
  }

  yelpApiCall() {
    let route = `/api/yelp/` + this.state.location;
    axios.get(route).then((req, res) => {
      this.setState({
        businesses: req.data['businesses']
      });
    });
  }

  componentDidMount() {
    this.yelpApiCall();
  }

  handleChange = event => {
    this.setState({
      locationInput: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.yelpApiCall();
  };

  render() {
    return (
      <div>
        <div class="input-field col s6">
          <form onSubmit={this.handleSubmit}>
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
        </div>
        {this.state.businesses ? (
          this.state.businesses.map(business => {
            console.log(business);
            return (
              <Nightlife_Entry
                key={business.id}
                image_url={business.image_url}
                location={business.location}
                name={business.name}
                url={business.url}
              />
            );
          })
        ) : (
          <div />
        )}
      </div>
    );
  }
}
