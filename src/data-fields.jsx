import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './data-fields.css';

export const DataFields = (props) => {
    return (
            <ListGroup.Item className='reusable_container' key={props.object.name}>
                <div className='reusable_imgContainer'>
                    <img src={props.object.flag} alt='flag'/>
                </div>
                <div className='reusable_dataContainer'>
                    <div className='reusable_generalInfo'> 
                        <div className='reusable_general'>{props.object.name}</div>
                        <div className='reusable_subGeneral'>Captital: {props.object.capital}</div>
                    </div>
                </div>
            </ListGroup.Item>
    )
}