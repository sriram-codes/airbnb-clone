import React, { useState } from 'react'
import './Banner.css'
import Button from '@material-ui/core/Button';
import Search from './Search';

function Banner() {

    const [showSearch, setShowSearch] = useState(false); 

    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <Search />}
                <Button onClick={() => setShowSearch(!showSearch)}className='banner__searchbutton'
                variant="outlined">{showSearch ? "Hide" : "Search Dates"}</Button>
            </div>
            <div className="banner__info">
                <h2>Get out there and stretch your imagination</h2>
                <h5>Lorem ipsum goes here...</h5>
                <Button variant="outlined">Default</Button>
            </div>

        </div>
    )
}

export default Banner
