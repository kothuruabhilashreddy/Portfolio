import React from 'react';
import ME from '../../assets/me.JPG'
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="home-intro">
                <div className="home-profile-img">
                    <img src={ME} alt="My image" />
                </div>
                <ProfileInfo />
            </div>
        </div>
    )
}

export default Home;