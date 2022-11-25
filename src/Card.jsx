import React from 'react'
import star from '../public/assets/star.png'


function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card-status">{badgeText}</div>}
            <img src={props.item.coverImg} className='image' />
            <div className="rating">
                <img src={star} className='star'/>
                <span className='avg-rating'>{props.item.stats.rating}</span>
                <span className='ppl-rated'>({props.item.stats.reviewCount})</span>
                <span className='center-dot'>•</span>
                <span className='country'>{props.item.location}</span>
            </div>
            <p className="title">{props.item.title}</p>
            <p className="cost"><span className='cost-bold'>From ${props.item.price}</span> / person</p>
        </div>  
    )
}

export default Card