// @flow

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Typehead } from '../components/typeheadComponent';
import { getData, changeSelectDisplay } from '../actions/typeheadActions';
import type { State } from '../types/State';
import type { Dispatch } from '../types/Store';
import type { Props, Item } from '../types/Typehead';

export class TypeheadContainer extends React.Component<Props> {
    render() {
        const url = 'https://restcountries.eu/rest/v2/name/';
        const { inputValue, data, changeSelectDisplay, getData } = this.props;    
        return (
            <div className='container'>
                <Typehead 
                    url={url}
                    inputValue={inputValue}
                    data={data}
                    changeSelectDisplay={changeSelectDisplay}
                    getData={getData}
                />
            </div>
        )
    }
}

const mapStateToProps = ({ typehead }: State) => ({
    inputValue: typehead.inputValue,
    data: typehead.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        changeSelectDisplay: data => dispatch(changeSelectDisplay(data)),
        getData: (url, name) => dispatch(getData(url, name)),
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(TypeheadContainer))