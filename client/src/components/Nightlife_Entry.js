import React, { Component } from 'react';
import { Card, CardTitle } from 'react-materialize';
export default class Nightlife_Entry extends Component {
  render() {
    return (
      <Card
        className="small"
        header={<CardTitle image="./img/sample-1.jpg">Card Title</CardTitle>}
        actions={[<a href="#">Yelp!</a>]}
      >
        I am a very simple card. I am good at containing small bits of
        information. I am convenient because I require little markup to use
        effectively.
      </Card>
    );
  }
}
