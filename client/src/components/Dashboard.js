import Nightlife_Entry from './Nightlife_Entry.js';
import React, { Component } from 'react';
import axios from 'axios';
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      user: {}
    };
  }

  async componentDidMount() {
    // const res = await axios.get('/api/current_user');
    // console.log(res.data);
    // this.setState({
    //   user: res.data
    // });
    const res = axios.get('/api/yelp').then(async (req, res) => {
      const newBusinesses = await req.data['businesses'];
      console.log(req.data['businesses']);
      var businessArr = this.state.businesses.slice();
      newBusinesses.map(business => {
        businessArr.push(business);
      });
      this.setState({
        businesses: businessArr
      });
    });

    // console.log(apiBusinesses);
    // var businessArr = this.state.businesses.slice();
    // apiBusinesses.map(business => {
    //   businessArr.push(business);
    // });
    // this.setState({
    //   businesses: businessArr
    // });
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
        {/* {this.state.user.googleId} */}
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
