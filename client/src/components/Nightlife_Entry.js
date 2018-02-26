import React, { Component } from 'react';
import { Card, CardTitle } from 'react-materialize';
import { connect, MapStateToProps } from 'react-redux';
import axios from 'axios';
class Nightlife_Entry extends Component {
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
    let attendingBtn = null;
    if (this.props.auth) {
      attendingBtn = (
        <a
          class="waves-effect waves-light btn"
          onClick={this.updateNumberOfPeopleAttending}
        >
          {' '}
          {this.state.peopleAttending} Attending
        </a>
      );
    }
    return (
      <Card
        className="small"
        header={
          <CardTitle image={this.props.image_url}>{this.props.name}</CardTitle>
        }
        actions={[
          <a href={this.props.url}>{this.props.name} on Yelp!</a>,
          attendingBtn
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

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Nightlife_Entry);
