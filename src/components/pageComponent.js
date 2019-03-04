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

export function Page(props: Props) {
    const { item } = props.location.state;

    return (
        <div className='page-wrapper'>
            <div className='page-container'>
                <img className='page-img' src={item.flag} placeholder='flag'/>
                <div className='page-general'>
                    <div className='page-name'>
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
            </div>
            <BackButton/>
        </div>
    )
} 