import React from 'react';
import { ListGroup } from 'react-bootstrap';
import '../css/data-fields.css';

export const DataFields = ({object}) => {
    return (
            <ListGroup.Item className='reusable_container' key={object.name}>
                <div className='reusable_imgContainer'>
                    <img src={object.flag} alt='flag'/>
                </div>
                <div className='reusable_dataContainer'>
                    <div className='reusable_generalInfo'> 
                        <div className='reusable_general'>{object.name}</div>
                        <div className='reusable_subGeneral'>Captital: {object.capital}</div>
                    </div>
                </div>
            </ListGroup.Item>
    )
}