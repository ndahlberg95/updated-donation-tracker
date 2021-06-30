import React from 'react';
function TopStats() {
    return (
        <div id="top-stats">
            <div id="need-most">
                <div id="min"></div>
                <h3>MOST NEEDED ITEM</h3>
            </div>

            <div id="total-donations">
                <div id="sum"></div>
                <h3>TOTAL DONATIONS</h3>
            </div>

            <div id="have-most">
                <div id="max"></div>
                <h3>MOST DONATED ITEM</h3>
            </div>
        </div>
    )
}

export default TopStats;