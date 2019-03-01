import React from 'react';
import { ListGroup } from 'react-bootstrap';
import '../styles/_result-card.scss';


export const ResultCard = ({item}) => {
    return (
        <ListGroup.Item className='resultCard_container' key={item.name}>
                <div className='resultCard_imgContainer'>
                    <img src={item.flag} alt='flag.jpg'/>
                </div>
                <div> 
                    <div className='resultCard_general'>{item.name}</div>
                    <div className='resultCard_subGeneral'>Captital: {item.capital}</div>
                </div>
        </ListGroup.Item>
    )
}