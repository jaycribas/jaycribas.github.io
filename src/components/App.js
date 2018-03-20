import React, { Component } from 'react';
import Header from './Header';
import Image from './Image';
import Profile from './Profile';
import Airtable from 'airtable';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      user: {},
    };

    this.getUserData = this.getUserData.bind(this);
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData() {
    const base = new Airtable({ apiKey: 'keyBYNrYN374Kxn11' })
      .base('appnxPTF9NYkjSa73');

    base('bio_data').find('recpNoWt3h1UJkduz', (err, record) => {
      if (err) { console.error(err); return; }
      this.setState({
        loading: false,
        user: record.fields,
      });
    });
  }

  render() {
    const { user } = this.state;

    while (this.state.loading) {
      return <div />;
    }

    return (
      <div className="container">
        <Header name={user.name} />
        <Image imgUrl={user.profile_img_url} />
        <Profile user={user} />
      </div>
    );
  }
}

export default App;
