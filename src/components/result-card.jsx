import React from 'react';
import { ListGroup } from 'react-bootstrap';
import '../css/result-card.css';

export const ResultCard = ({object}) => {
    return (
        <ListGroup.Item className='resultCard_container' key={object.name}>
            <div className='resultCard_imgContainer'>
                <img src={object.flag} alt='flag.jpg'/>
            </div>
            <div className='resultCard_generalInfo'> 
                <div className='resultCard_general'>{object.name}</div>
                <div className='resultCard_subGeneral'>Captital: {object.capital}</div>
            </div>
        </ListGroup.Item>
    )
}