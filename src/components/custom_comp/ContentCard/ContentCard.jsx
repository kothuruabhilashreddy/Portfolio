import React from 'react';
import './ContentCard.css'

const ContentCard = ({heading, content}) => {
    return (
        <div className='content-card'>
            <heading>{heading}</heading>
            <p>
                {content}
            </p>
        </div>
    )
}

export default ContentCard;