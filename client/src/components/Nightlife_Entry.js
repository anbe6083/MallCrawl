import React, { Component } from 'react';
import { Card, CardTitle } from 'react-materialize';
import axios from 'axios';

export default class Nightlife_Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yelpData: [],
      peopleAttending: 0,
      isAttending: false
    };

    this.updateNumberOfPeopleAttending = this.updateNumberOfPeopleAttending.bind(
      this
    );
  }

  updateNumberOfPeopleAttending() {
    let numOfPeopleAttending = this.state.peopleAttending;
    if (this.state.isAttending) {
      this.setState({
        isAttending: false,
        peopleAttending: --numOfPeopleAttending
      });
    } else {
      this.setState({
        isAttending: true,
        peopleAttending: ++numOfPeopleAttending
      });
    }
  }

  render() {
    return (
      <Card
        className="small"
        header={
          <CardTitle image={this.props.image_url}>{this.props.name}</CardTitle>
        }
        actions={[
          <a href={this.props.url}>{this.props.name} on Yelp!</a>,
          <a
            class="waves-effect waves-light btn"
            onClick={this.updateNumberOfPeopleAttending}
          >
            {' '}
            {this.state.peopleAttending} Attending
          </a>
        ]}
      >
        {this.props.location.address1}
        {'\n'}
        {this.props.location.city}
        {'\n'}
        {this.props.location.state}
      </Card>
    );
  }
}
