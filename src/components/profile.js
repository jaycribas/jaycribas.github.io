import React, { Component } from 'react'

export default class Profile extends Component {
  render() {
    return (
      <div className="profile-details">
        <p>Software Engineer  |  Graphic Designer</p>
        <p className="name-lrg">JAY CRIBAS</p>
        <p className="blurb">Software engineer with a graphic design background. JavaScript developer in Node.js, React, Redux, SQL databases, and API integration.</p>
        <div>
          <a href='https://www.linkedin.com/in/jaycribas/' target="_blank">
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
          <a href='https://github.com/jaycribas' target="_blank">
            <i class="fab fa-github fa-2x"></i>
          </a>
          <a href='https://twitter.com/jaycribas' target="_blank">
            <i class="fab fa-twitter fa-2x"></i>
          </a>
        </div>
      </div>
    )
  }
}
