import React from 'react';
import { ReusableComponent } from './reusable-component.jsx';
import './app.css';

export const App = () => {
    return (
        <div className='wrapper'>
            <div className='container'>
                <ReusableComponent/>
            </div>
        </div>
    )
}