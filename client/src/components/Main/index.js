import React from 'react';
import Header from '../Header';
import TopStats from '../TopStats';
import InputBox from '../InputBox';
import Graph from '../Graph';
import Footer from '../Footer';
import './index.css';
function Main() {
    return (
        <div className="flex">
            <div className="mainHeader"> <Header /> </div>
            <div className="mainTopStatsInput">
                <TopStats />
                <InputBox />
                <Graph />
            </div>
            {/* <div className="mainGraph"></div> */}
            <div className="mainFooter"><Footer /></div>
        </div>

    )
}

export default Main;