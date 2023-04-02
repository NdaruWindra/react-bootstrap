import React from 'react'

const Card = ({imgSrc, title, description, btnUrl, btnText}) => {
    return (
        <div className="card" style={{ width: "18rem;" }}>
            <img src={imgSrc} className="card-img" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={btnUrl} className="btn btn-primary">
                        {btnText}
                    </a>
                </div>
        </div>
    );
}   

export default Card

