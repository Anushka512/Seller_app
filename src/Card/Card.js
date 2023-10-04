import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';
import heartIcon from "../Assests/Images/heart.png";
import data from "./data";
import { FaMapMarkerAlt, FaBuilding, FaBed, FaBath, FaExpandArrowsAlt } from 'react-icons/fa';
import { GiSandsOfTime } from "react-icons/gi";

const Card = ({activeTab}) => {
    const [noOfElement, setnoOfElement] = useState(6);
    const showMore = () => {
        setnoOfElement(noOfElement + 3);
    }

    const navigate = useNavigate(); 

    const filteredData = data.filter(item => item.place === activeTab);
    const slice = filteredData.slice(0, noOfElement);

    const handleCardClick = (propertyId) => {
        navigate(`/property/${propertyId}`); 
    };

    return (
        <>
            <div className="card-container">
                {slice.map((card) => (
                    <div className="card" key={card.id} onClick={() => handleCardClick(card.id)}>
                        <button className="popular-button">Popular</button>
                        <div className="button-top-right">
                            <img src={heartIcon} alt="Heart" className='heart' />
                        </div>
                        <div className="button-top-left">
                            <button className="right">For Sale</button>
                        </div>
                        <img
                            src={card.image}
                            alt="Card"
                            className="card-image"
                        />
                        <div className="location">
                            <p className='locate'><FaMapMarkerAlt style={{ marginRight: "19px" }} />{card.locationIcon}</p>
                            <p className='address'>{card.locationAddress}</p>
                        </div>
                        <div className="icons">
                            <div className="icon" >
                                <FaBuilding />
                                <p className='desc'>3 Rooms</p>
                            </div>
                            <div className="icon" >
                                <FaBed />
                                <p className='desc'>4 Beds</p>
                            </div>
                            <div className="icon" >
                                <FaBath />
                                <p className='desc'>1 Bath</p>
                            </div>
                            <div className="icon" >
                                <FaExpandArrowsAlt />
                                <p className='desc'>732 sft</p>
                            </div>
                        </div>
                        <div className='last'>
                            <div className="price">
                                {card.price} /month
                            </div>
                            <div className="button-flex">
                                <button className='read'>Read More</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="show-more">
                <button className='showmore' onClick={() => showMore()}>
                    <GiSandsOfTime />  Show More
                </button>
            </div>
        </>
    );
};

export default Card;
