import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Typehead } from '../components/typeheadComponent';
import { getData, changeSelectDisplay } from '../actions/typeheadActions.jsx';

export class TypeheadContainer extends React.Component {
    render() {
        const url = 'https://restcountries.eu/rest/v2/name/';
        const { typehead, changeSelectDisplayAction, getDataAction } = this.props;    
        return (
            <div className='container'>
                <Typehead 
                    url={url}
                    inputValue={typehead.inputValue}
                    data={typehead.data}
                    changeSelectDisplay={changeSelectDisplayAction}
                    getData={getDataAction}
                />
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
        changeSelectDisplayAction: data => dispatch(changeSelectDisplay(data)),
        getDataAction: (url, name) => dispatch(getData(url, name)),
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(TypeheadContainer))