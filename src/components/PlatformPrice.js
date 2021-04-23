import React from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const PlatformPrice = ({ platforms }) => {
    return (
        <table className="platform-price">
            <thead>
                <tr>
                    <th>
                        <h4><span className="pointer">#</span></h4>
                    </th>
                    <th>
                        <h4><span className="pointer">Platform</span></h4>
                    </th>
                    <th>
                        <h4><span className="pointer">Last Traded Price</span></h4>
                    </th>
                    <th>
                        <h4><span className="pointer">Buy / Sell Price</span></h4>
                    </th>
                    <th>
                        <h4><span className="pointer">Difference</span></h4>
                    </th>
                    <th>
                        <h4><span className="pointer">Savings</span></h4>
                    </th>
                </tr>
            </thead>
            <tbody>
                {platforms.map(platform => (
                    <tr key={platform.id}>
                        <td><h4>{platform.id}</h4></td>
                        <td className="platform">
                            <a href={platform.link} target="_blank" rel="noreferrer">
                                <img 
                                    src={`./assets/${platform.image}.png`} 
                                    alt={platform.platform} 
                                    className="platform-image"
                                />
                                <h4>{platform.platform}</h4> 
                            </a>

                        </td>
                        <td>
                            <h4>₹ {platform.lastprice}</h4>
                        </td>
                        <td>
                            <h4>
                                <span>₹ {platform.buyPrice}</span> /
                                <span> ₹ {platform.sellPrice}</span>
                            </h4>
                        </td>
                        <td className="difference">
                            <h4 className={
                                `${(platform.buyPrice - platform.sellPrice) > 0 
                                    ? 'color-pos' 
                                    : 'color-neg' }`
                                }
                            >{(platform.buyPrice - platform.sellPrice) / 100}  %
                            </h4>
                        </td>
                        <td  className="difference">
                            <h4  className={
                                `${(platform.buyPrice - platform.sellPrice) > 0 
                                ? 'color-pos' 
                                : 'color-neg' }`}
                            >
                                {(platform.buyPrice - platform.sellPrice) > 0 
                                ? <ArrowDropDownIcon style={{fontSize: '30px'}} />
                                : <ArrowDropUpIcon size="2x"  /> }
                                ₹ {(platform.buyPrice) - (platform.sellPrice)}
                            </h4>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default PlatformPrice
