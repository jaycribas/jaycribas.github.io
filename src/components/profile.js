import React from 'react'

const Profile = () => {
  return (
    <div className="profile-details">
      <p>Software Engineer | Graphic Designer</p>
      <p className="name-lrg">JAY CRIBAS</p>
      <p className="blurb">Software engineer with a graphic design background. JavaScript developer in Node.js, React, Redux, SQL databases, and API integration.</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/jaycribas/"
           target="_blank"
           rel="noopener noreferrer">
          <i className="fab fa-linkedin fa-2x" />
        </a>
        <a href="https://github.com/jaycribas"
           target="_blank"
           rel="noopener noreferrer">
          <i className="fab fa-github fa-2x" />
        </a>
        <a href="https://twitter.com/jaycribas"
           target="_blank"
           rel="noopener noreferrer">
          <i className="fab fa-twitter fa-2x" />
        </a>
        <a href="/jay_cribas_resume.pdf"
           target="_blank"
           rel="noopener noreferrer"
           download>
          <i className="fas fa-file-alt fa-2x" />
        </a>
      </div>
    </div>
  );
}

export default Profile
