import React from 'react';
import './ProfileInfo.css'
import profile_info from '../../assets/data/profile_info';

const ProfileInfo = () => {
    return (
        <div className='profile-info'>
            {profile_info.title}<br />
            {profile_info.subheading1}<br />
            {profile_info.subheading2}<br /> <br />
            LinkedIN: {profile_info.linkedin} <br />
            Github: {profile_info.github} <br />
            Contact: {profile_info.contact} <br />
            Mail: {profile_info.email} <br />
        </div>
    );
}

export default ProfileInfo;