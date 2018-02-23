import Nightlife_Entry from './Nightlife_Entry.js';
import React, { Component } from 'react';
import axios from 'axios';
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
  }

  componentDidMount() {
    // this.callApi('/api/yelp')
    //   .then(res => {
    //     this.setState({
    //       businesses: res.jsonBody.businesses
    //     });
    //   })
    //   .catch(err => console.log(err));
    const res = axios.get('/api/yelp').then(res => {
      var businessArr = this.state.businesses.slice();
      res.data.map(business => {
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
    console.log(this.state);
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
