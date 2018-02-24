import Nightlife_Entry from './Nightlife_Entry.js';
import React, { Component } from 'react';
import axios from 'axios';
import { Input, Button } from 'react-materialize';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      user: {}
    };
  }

  async componentDidMount() {
    const res = axios.get('/api/yelp').then(async (req, res) => {
      const newBusinesses = await req.data['businesses'];
      var businessArr = this.state.businesses.slice();
      newBusinesses.map(business => {
        businessArr.push(business);
      });
      this.setState({
        businesses: businessArr
      });
    });
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
