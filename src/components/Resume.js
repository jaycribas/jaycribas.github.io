import React, { Component } from 'react';
import ResumeButton from './ResumeButton';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
    };
  }

  render() {
    return (
      <div>
        <ResumeButton title="Skills" onClick={this.handleClick} />
        <ResumeButton title="Work Experience" onClick={this.handleClick} />
        <ResumeButton title="Projects" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Resume;
