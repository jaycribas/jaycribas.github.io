import React from 'react';
import Button from 'muicss/lib/react/button';
import './ResumeButton.css';

const ResumeButton = (props) => {
  return (
    <div>
      <Button className="resume-button">
        {props.title}
      </Button>
      <div >
        lalalala
      </div>
    </div>
  )};

export default ResumeButton;
