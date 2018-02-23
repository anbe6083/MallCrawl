import Nightlife_Entry from './Nightlife_Entry.js';
import React, { Component } from 'react';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
  }

  componentDidMount() {
    this.callApi('/api/yelp')
      .then(res => {
        this.setState({
          businesses: res.businesses
        });
      })
      .catch(err => console.log(err));
  }

  callApi = async api => {
    const response = await fetch(api);
    const body = await response;
    if (response.status !== 200) throw Error(body.message);

    return body.json();
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
