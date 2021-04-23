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
    const [lightMode, setlightMode] = useState(false)

    return (
        <div className="app">
            <Header 
                lightMode={lightMode} 
                setlightMode={setlightMode} 
            />
            <BelowHeader />

            <PlatformPrice platforms={platforms} />
            <BannerImage 
                srcLink={"https://ftx.com/"}
                srcBanner={"https://hodlinfo.com/static/media/BannerFTXNews.d0cd974b.png"}
                style={{padding: '20px'}}
            />
            <Footer />
        </div>
    )
}

export default App

