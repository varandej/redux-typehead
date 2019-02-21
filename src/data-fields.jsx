import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './app.css';

export const DataFields = (props) => {
    return (
            <ListGroup.Item className='reusable_container' key={props.object.name}>
                <div className='reusable_imgContainer'>
                    <img src={props.object.flag} alt='flag' height='40px'/>
                </div>
                <div className='reusable_dataContainer'>
                    <div className='reusable_generalInfo'> 
                        <div className='reusable_general'>{props.object.name}</div>
                        <div className='reusable_subGeneral'>{props.object.capital}</div>
                    </div>
                    <div className='reusable_subInfo'>
                        <div className='reusable_subInfoLeft'>{props.object.languages[0].iso639_2}</div>
                        <div className='reusable_subInfoRight'>{props.object.population}</div>
                    </div>
                </div>
            </ListGroup.Item>
    )
}