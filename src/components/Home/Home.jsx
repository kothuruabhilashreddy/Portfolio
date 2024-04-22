import React from 'react';
import ME from '../../assets/me.JPG'
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import './Home.css';
import ContentCard from '../custom_comp/ContentCard/ContentCard';
import profile_info from '../../assets/data/profile_info';

const Home = () => {
    const displayContentCards = () => {
        return profile_info.contentCards.map((card) => {
            return <ContentCard heading={card.heading}  content={card.content}/>
        });
    }
    
    return (
        <div className="home">
            <div className="home-intro">
                <div className="home-profile-img">
                    <img src={ME} alt="My image" />
                </div>
                <ProfileInfo />
            </div>
            {displayContentCards()}
            
        </div>
    )
}

export default Home;