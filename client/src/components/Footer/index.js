import React from 'react';
import moment from 'moment'
import Moment from 'react-moment';

function Footer() {
  const currentDateTime = moment()
  return (
    <footer>
      <h3>Made with Luv</h3>
      <div id="currentDay">
        <div className="time">
          <Moment format='MMMM Do YYYY, h:mm a'>{currentDateTime}</Moment>
        </div>
        <p>Copyright 2021 by Chinchillas</p>
      </div>
    </footer>
  )
}
export default Footer;