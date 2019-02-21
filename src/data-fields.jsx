import React from 'react';
import { ListGroup } from 'react-bootstrap';

export const DataFields = (props) => {
    return (
            <ListGroup.Item key={props.object.name}>
                <img src={props.object.flag} alt='flag' height='40px'/>
                <div className='reusable_general'>{props.object.name}</div>
                <div className='reusable_subGeneral'>{props.object.capital}</div>
                <div className='reusable_subInfoLeft'>{props.object.languages[0].iso639_2}</div>
                <div className='reusable_subInfoRight'>{props.object.population}</div>
            </ListGroup.Item>
    )
}