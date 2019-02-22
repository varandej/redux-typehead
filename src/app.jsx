import React from 'react';
import { Typehead } from './components/typehead.jsx';
import './css/app.css';

export const App = () => {

const url = 'https://restcountries.eu/rest/v2/name/';

    return (
        <div className='wrapper'>
            <div className='container'>
                <Typehead url={url}/>
            </div>
        </div>
    )
}