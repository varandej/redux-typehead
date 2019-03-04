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