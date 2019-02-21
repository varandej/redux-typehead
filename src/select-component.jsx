import React from 'react';
import Select from 'react-select';

export const SelectComponent = (props) => (
    <Select 
        isSearchable={true}
        options={props.options}
        onChange={props.onChange}
    />
)