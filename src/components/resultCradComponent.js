// @flow

import React from 'react';
import { ListGroup } from 'react-bootstrap';


type Props = {
    item: {
        name: string,
        flag: string,
        capital: string
    }
}

export function ResultCard(props: Props) {
    const { item } = props;

    return (
        <ListGroup.Item className='result-card' key={item.name}>
                <div className='result-card__img-container'>
                    <img src={item.flag} alt='flag.jpg'/>
                </div>
                <div> 
                    <div className='result-card__general-info'>{item.name}</div>
                    <div className='result-card__sub-info'>Captital: {item.capital}</div>
                </div>
        </ListGroup.Item>
    )
}