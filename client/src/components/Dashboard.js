import Nightlife_Entry from './Nightlife_Entry.js';
import React, { Component } from 'react';
import axios from 'axios';
import { Input, Button } from 'react-materialize';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      user: {},
      location: ''
    };
  }

  componentDidUpdate() {
    if (this.props.location != this.state.location) {
      this.yelpApiCall();
      this.state.location = this.props.location;
    }
  }

  yelpApiCall() {
    let route = `/api/yelp/` + this.props.location;
    axios.get(route).then((req, res) => {
      this.setState({
        businesses: req.data['businesses']
      });
    });
  }

  componentDidMount() {
    this.yelpApiCall();
  }

  callApi = async api => {
    const response = await fetch(api);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div>
        {this.state.businesses.map(business => {
          return (
            <Nightlife_Entry
              key={business.id}
              image_url={business.image_url}
              location={business.location}
              name={business.name}
              url={business.url}
            />
          );
        })}
      </div>
    );
  }
}
