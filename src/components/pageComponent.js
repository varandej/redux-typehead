// @flow

import * as React from 'react';
import { BackButton } from './backButton';

type Props = {
    location: {
        state: {
            item: {
                flag: string,
                name: string,
                capital: string,
                languages: Array<{
                    name: string
                }>
            }
        }
    }
}

export const Page = (props: Props) => {
    const { item } = props.location.state;

    return (
        <div className='page'>
            <div className='page__container'>
                <img className='page__img' src={item.flag} placeholder='flag'/>
                <div className='page__general-info'>
                    <span>Country name:  </span> 
                    {item.name}
                    <br/>
                    <span>Capital:  </span>
                    {item.capital}
                    <br/>
                    <span>Language:  </span>
                    {item.languages[0].name}
                </div>
            </div>
            <BackButton/>
        </div>
    )
} 