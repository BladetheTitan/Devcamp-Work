import React, { Component } from 'react';
import Navigation from './navigation';
import PageContent from './pagecontent';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>DevCamp React Starter</h1>
        
        <Navigation />
        <PageContent />
      </div>
    );
  }
}