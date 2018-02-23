import Nightlife_Entry from './Nightlife_Entry.js';
import React, { Component } from 'react';
import axios from 'axios';
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [
        {
          id: 'shooters-bar-and-billiards-santa-clarita',
          name: 'Shooters Bar & Billiards',
          image_url:
            'https://s3-media2.fl.yelpcdn.com/bphoto/Uesb4vZv7oU7bwiH4WjC8Q/o.jpg',
          is_closed: false,
          url:
            'https://www.yelp.com/biz/shooters-bar-and-billiards-santa-clarita?adjust_creative=WHRowCjXn_uWBF6FCBiYOw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=WHRowCjXn_uWBF6FCBiYOw',
          review_count: 106,
          categories: [
            {
              alias: 'poolhalls',
              title: 'Pool Halls'
            },
            {
              alias: 'sportsbars',
              title: 'Sports Bars'
            }
          ],
          rating: 4,
          coordinates: {
            latitude: 34.3776228562467,
            longitude: -118.562951087952
          },
          transactions: [],
          price: '$',
          location: {
            address1: '24450 Lyons Ave',
            address2: '',
            address3: '',
            city: 'Santa Clarita',
            zip_code: '91321',
            country: 'US',
            state: 'CA',
            display_address: ['24450 Lyons Ave', 'Santa Clarita, CA 91321']
          },
          phone: '+16612875888',
          display_phone: '(661) 287-5888',
          distance: 6192.698805304425
        }
      ]
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
        console.log(business);
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
