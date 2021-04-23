import { useState } from 'react';
import BelowHeader from './components/BelowHeader';
import Footer from './components/Footer';
import Header from './components/Header';
import PlatformPrice from './components/PlatformPrice';

import data from './data'

import './styles/app.scss'

const App = () => {

    const [platforms, setPlatforms] = useState(data)

    return (
        <div className="app">
            <Header />
            <BelowHeader />

            <PlatformPrice platforms={platforms} />
            <Footer />
        </div>
    )
}

export default App

