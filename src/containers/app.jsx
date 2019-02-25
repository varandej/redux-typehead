import React from 'react';
import { connect } from 'react-redux';
import { Typehead } from '../components/typehead.jsx';
import { getData, changeSelectDisplay } from '../actions/typeheadActions.jsx';
import '../css/app.css';

export class App extends React.Component {
    render() {
        const url = 'https://restcountries.eu/rest/v2/name/';
        const { typehead, changeSelectDisplayAction, getDataAction } = this.props;    
        return (
            <div className='wrapper'>
                <div className='container'>
                    <Typehead 
                        url={url}
                        showSelect={typehead.showSelect}
                        inputValue={typehead.inputValue}
                        responseData={typehead.responseData}
                        changeSelectDisplay={changeSelectDisplayAction}
                        getData={getDataAction}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        typehead: store.typehead,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeSelectDisplayAction: boolean => dispatch(changeSelectDisplay(boolean)),
        getDataAction: (url, name) => dispatch(getData(url, name)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App)