import React from 'react';

async function logout() {
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }

    // when you logout, you are taken to "Login"
}
  
document.querySelector('#logout').addEventListener('click', logout);

function Header() {
    return ( 
        <header class="header">

    {/* //   Company Name/Logo  */}


            <nav class="level">
    {/* //    left side */}
                <div class="level-left">
                    <div class="level-item">
                        <h2 class="title is-2 has-text-white">Donation Tracker
                        </h2>
                    </div>
                    <div class="level-item">
                    </div>
                </div>

    {/* // Right side  */}
                <div class="level-right">
                    <div class="card-image">
                        <figure class="image is-128x128">
                            <img src="./public/images/logo-white.png" alt="YWCA Utah Logo"></img>
                        </figure>
                        <button id="logout">LOGOUT</button>
                    </div>
                </div>
            </nav>
        </header>
    
    );
    
}

export default Header;