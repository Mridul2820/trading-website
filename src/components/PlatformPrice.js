import React from 'react'

const PlatformPrice = ({ platforms }) => {
    return (
        <table className="platform-price">
            <thead>
                <tr>
                    <th>
                        <h4><span class="pointer">#</span></h4>
                    </th>
                    <th>
                        <h4><span class="pointer">Platform</span></h4>
                    </th>
                    <th>
                        <h4><span class="pointer">Last Traded Price</span></h4>
                    </th>
                    <th>
                        <h4><span class="pointer">Buy / Sell Price</span></h4>
                    </th>
                    <th>
                        <h4><span class="pointer">Difference</span></h4>
                    </th>
                    <th>
                        <h4><span class="pointer">Savings</span></h4>
                    </th>
                </tr>
            </thead>
            <tbody>
                {platforms.map(platform => (
                    <tr key={platform.id}>
                        <td>{platform.id}</td>
                        <td>
                            {/* <img src={} /> */}
                            <h3>{platform.platform}</h3>
                        </td>
                        <td>
                            <h3>₹ {platform.lastprice}</h3>
                        </td>
                        <td>
                            <span>₹ {platform.buyPrice}</span>/
                            <span>₹ {platform.sellPrice}</span>
                        </td>
                        <td>
                            <h3>₹ {platform.buyPrice} - {platform.sellPrice} / 100 %</h3>
                        </td>
                        <td>
                            <h3>₹ {platform.buyPrice} - {platform.sellPrice}</h3>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default PlatformPrice
