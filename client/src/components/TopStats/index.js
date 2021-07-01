import React from 'react';
import './index.css';

function TopStats() {
    return (
        <div className="top-stats">
            <div className="need-most">
                <div className="min"></div>
                <h3>MOST NEEDED ITEM</h3>
            </div>

            <div className="total-donations">
                <div className="sum"></div>
                <h3>TOTAL DONATIONS</h3>
            </div>

            <div className="have-most">
                <div className="max"></div>
                <h3>MOST DONATED ITEM</h3>
            </div>
        </div>
    )
}

export default TopStats;