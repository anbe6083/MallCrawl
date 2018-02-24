import React, { Component } from 'react';
import { Input, Button } from 'react-materialize';
import axios from 'axios';
class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({
      location: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { location } = this.state;
    const res = await axios.post('/api/location', { location });
    console.log(res);
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>MallCrawl</h1>
        Coordinate your nightlife plans with your friends!
        <div class="input-field col s6">
          <form onSubmit={this.handleSubmit}>
            <Input
              s={6}
              type="text"
              value={this.state.location}
              label="Location"
              onChange={this.handleChange}
            />
            <Button waves="light" type="submit">
              Search
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default Landing;
