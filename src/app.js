import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TypeheadContainer from './containers/typeheadContainer';
import { Page } from './components/pageComponent';

export function App() {
    return (    
        <div>
            <div className='wrapper'>
                <Switch>
                    <Route exact path='/' component={TypeheadContainer}/>
                    <Route path='/country?name=:name' component={Page}/>
                </Switch>
            </div>
        </div>
    )
}