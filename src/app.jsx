import React from 'react';
import Axios from 'axios';
import { SelectComponent } from './select-component.jsx';
import { ObjectView } from './object-view.jsx';

export class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            options: [],
            object: {},
            selectedObjectName: '',
            showSelect: true
        }

        this.handleOptionSelected = this.handleOptionSelected.bind(this);
    }


    componentDidMount() {
        const url = `https://restcountries.eu/rest/v2/all?fields=name`;

        Axios.get(url)
        .then((response) => {
            let arr = response.data;
            let newArr = arr.map((item) => {
                return { value: item.name.toLowerCase(), label: item.name };
            })
            this.setState({
                options: newArr
            })
        })
        .catch((error) => {
            console.log(error.message)
        })
    }


    handleOptionSelected(selectedObject) {
        const selectedObjectValue = selectedObject.value;
        const url = `https://restcountries.eu/rest/v2/name/${selectedObjectValue}`;
        this.setState({
            selectedObject: selectedObjectValue
        })

        Axios.get(url)
        .then((response) => {
            this.setState({
                object: response.data[0],
                showSelect: false
            })
            console.log(this.state.object.name)
        })
        .catch((error) => {
            console.log(error.message);
        })
        console.log

    }

    render() {
        return(
            <div>
                {(this.state.showSelect)
                    ? <SelectComponent
                        options={this.state.options}
                        onChange={this.handleOptionSelected}
                    />
                    : <ObjectView
                        object={this.state.object}
                    />
                }
            </div>
        )
    }
}
