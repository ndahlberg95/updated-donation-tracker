import React from 'react';

function Footer() {
    return(
        <footer>
    <h3>Made with Luv</h3>
    <p>Copyright 2021 by Chinchillas</p>
    <div> 
      <script src="https://momentjs.com/downloads/moment.js"></script>
      <p id="currentDay" class="lead"></p>
    </div>

    <div  id="currentDay"></div>

  </footer>
    )
}

export default Footer;