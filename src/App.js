import { useState } from 'react';
import BannerImage from './components/BannerImage';
import BelowHeader from './components/BelowHeader';
import Footer from './components/Footer';
import Header from './components/Header';
import PlatformPrice from './components/PlatformPrice';

import data from './data'

import './styles/app.scss'

const App = () => {

    const [platforms] = useState(data)

    return (
        <div className="app">
            <Header />
            <BelowHeader />
            <BannerImage 
                srcLink={"https://finstreet.in/"}
                srcBanner={"https://hodlinfo.com/static/media/cryptonews.54869ee3.png"}
            />
            <PlatformPrice platforms={platforms} />
            <BannerImage 
                srcLink={"https://ftx.com/"}
                srcBanner={"https://hodlinfo.com/static/media/BannerFTXNews.d0cd974b.png"}
            />
            <Footer />
        </div>
    )
}

export default App

