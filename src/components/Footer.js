import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="contents">
                <div className="footer-text"><h5>Copyright © 2021</h5></div>
                <div className="footer-text"><h5>Hodlinfo.com</h5></div>
                <div className="footer-text"><h5>Developed By</h5>
                <a rel="nofollow" href="https://www.quadbtech.com" target="_blank" style={{color: 'rgb(61, 198, 193);'}}>QuadBtech</a></div>
                <div className="footer-text-pointer" style={{marginLeft: 'auto;'}}>
                    <a href="mailto:support@hodlinfo.com" className="footer-text-link">Support</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
