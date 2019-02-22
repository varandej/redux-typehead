import React from 'react';
import { ReusableComponent } from './components/reusable-component.jsx';
import './css/app.css';

export const App = () => {

const url = 'https://restcountries.eu/rest/v2/name/';

    return (
        <div className='wrapper'>
            <div className='container'>
                <ReusableComponent url={url}/>
            </div>
        </div>
    )
}