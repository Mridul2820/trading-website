import React from 'react';
import Button from '@material-ui/core/Button';
import TelegramIcon from '@material-ui/icons/Telegram';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Switch, withStyles } from '@material-ui/core'

function Header({ lightMode, setlightMode }) {


    const ISOSwitch = withStyles({
        root: {
            width: 60,
            height: 34,
            padding: 0,
        },
        switchBase: {
            padding: 4,
            '&$checked': {
              transform: 'translateX(26px)',
              color: '#3dc6c1',
              '& + $track': {
                backgroundColor: '#2e3241',
                opacity: 1,
                border: 'none',
              },
            },
          },
          thumb: {
            width: 26,
            height: 26,
            color: '#3dc6c1'
          },
          track: {
            borderRadius: 34 / 2,
            border: '1px solid #3dc6c1',
            backgroundColor: '#f8f9fa',
            opacity: 1,
            transition: '.5s',
          },
          checked: {},
    })(Switch);

    return (
        <div className="header">
            <div className="header-width header-logo">
                <a href="/">
                    <div className="logo">
                        <img className="logo-img" src="https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png" alt="logo" />
                    </div>
                </a>
                <p>Powered By <span>Finstreet</span></p>
            </div>
            <div className="header-width header-buttons">
                <div className="header-button">
                    <Button 
                        style={{
                            backgroundColor: '#2e3241', 
                            color: '#fff', 
                            borderRadius: '10px',
                            fontSize: '16px',
                            padding: '4px 14px',
                            fontWeight: 400,
                        }}
                        >INR <ArrowDropDownIcon />
                    </Button>
                </div>
                <div className="header-button">
                    <Button 
                        style={{
                            backgroundColor: '#2e3241', 
                            color: '#fff', 
                            borderRadius: '10px',
                            fontSize: '16px',
                            padding: '4px 14px',
                            fontWeight: 400,
                        }}
                        >BTC <ArrowDropDownIcon />
                    </Button>
                </div>
                <div className="header-button">
                    <Button 
                        style={{
                            backgroundColor: '#2e3241', 
                            color: '#fff', 
                            borderRadius: '10px',
                            fontSize: '16px',
                            padding: '4px 14px',
                            fontWeight: 400,
                        }}>BUY BTC
                    </Button>
                </div>
            </div>
            <div className="header-width header-right">
                <div className="progress-bar">
                    <p>15</p>
                </div>
                <div className="telegram-button">
                    <Button className="telegram"><TelegramIcon style={{marginRight: '10px'}} />Connect Telegram</Button>
                </div>
                <div className="toggle-theme">
                    {/* Switch */}
                    <div className="switch">
                        <ISOSwitch 
                            checked={!lightMode} 
                            onChange={() => setlightMode(!lightMode)} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
