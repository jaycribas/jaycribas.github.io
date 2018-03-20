import React from 'react'

const Profile = ({user}) => {
  return (
    <div className="profile-details">
      <p>{user.title}</p>
      <p className="name-lrg">{user.name.toUpperCase()}</p>
      <p className="blurb">{user.bio}</p>
      <div className="social-links">
        <a href={user.linkedin_url}
           target="_blank"
           rel="noopener noreferrer">
          <i className="fab fa-linkedin fa-2x" />
        </a>
        <a href={user.github_url}
           target="_blank"
           rel="noopener noreferrer">
          <i className="fab fa-github fa-2x" />
        </a>
        <a href={user.twitter_url}
           target="_blank"
           rel="noopener noreferrer">
          <i className="fab fa-twitter fa-2x" />
        </a>
        <a href={user.resume_url}
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
