import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import './Detail.css';

function Detail(props) {
    const location = useLocation().state;
    const navigate = useNavigate();

    React.useEffect(() => {
        if (location === null) {
            navigate("/");
        }
    }, [location, navigate]);

    return (
        location === null ? null
            : <div className="detail__container">
                <h1>{location.title}</h1>
                <img src={location.cover_image} alt={location.title}/>
                <h2>{location.year}</h2>
                <h2>{location.genres}</h2>
                <h3>{location.summary}</h3>
              </div>
    );
}

export default Detail;