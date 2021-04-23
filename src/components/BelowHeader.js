import React from 'react';


function BelowHeader() {
    return (
        <div className="belowHeader">
            <div className="numbers">
                <div className="number">
                    <div className="topHeader">
                        <h2>0.72%</h2>
                    </div>
                    <div className="subHeader">
                        <h3>5 Mins</h3>
                    </div>
                </div>
                <div className="number">
                    <div className="topHeader">
                        <h2>1.25%</h2>
                    </div>
                    <div className="subHeader">
                        <h3>1 Hour</h3>
                    </div>
                </div>
                <div className="main" style={{maxWidth: '40%', color: '#fff'}}>
                    <div className="upperHeading">
                        <span>Best Price to Trade</span>
                    </div>
                    <div className="middle" style={{paddingBottom: '10px'}}>
                        <h2>₹ 40,20,649</h2>
                    </div>
                    <div className="lowerHeading">
                        <h3>Average BTC/INR net price including commission</h3>
                    </div>
                </div>
                <div className="number">
                    <div className="topHeader">
                        <h2>8.6%</h2>
                    </div>
                    <div className="subHeader">
                        <h3>1 Day</h3>
                    </div>
                </div>
                <div className="number">
                    <div className="topHeader">
                        <h2>16.9%</h2>
                    </div>
                    <div className="subHeader">
                        <h3>7 Days</h3>
                    </div>
                </div>
            </div>
            <a href="https://finstreet.in/" target="_blank">
                <img src="https://hodlinfo.com/static/media/cryptonews.54869ee3.png" style={{width: '100%', padding: '0px 0px 20px'}}/>
            </a>
        </div>
    )
}

export default BelowHeader
