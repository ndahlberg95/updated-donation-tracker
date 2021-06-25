import React from 'react';

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
                            <img src="./assets/images/logo-white.png" alt="YWCA Utah Logo"></img>
                        </figure>

                    </div>
                </div>
            </nav>
        </header>
    
    );
    
}

export default Header;