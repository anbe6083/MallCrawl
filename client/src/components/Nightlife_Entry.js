import React, { Component } from 'react';
import { Card, CardTitle } from 'react-materialize';
export default class Nightlife_Entry extends Component {
  render() {
    return (
      <Card
        className="small"
        header={
          <CardTitle image={this.props.image_url}>{this.props.name}</CardTitle>
        }
        actions={[
          <a href={this.props.url}>{this.props.name} on Yelp!</a>,
          <a class="waves-effect waves-light btn">Attending</a>
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
