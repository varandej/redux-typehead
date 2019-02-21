import React from 'react';
import Axios from 'axios';
import { DataFields } from './data-fields.jsx';
import { InputGroup, FormControl, ListGroup } from 'react-bootstrap';

export class ReusableComponent extends React.Component {

    constructor(props) {
        super(props);
            
        this.state = {
            showFields: false,
            inputValue: '',
            objectArr: []
        };

        this.handeInputChange = this.handeInputChange.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
        this.handleInputFocus = this.handleInputFocus.bind(this);
    }

    search(value){
        const url = `https://restcountries.eu/rest/v2/name/${value}`;
        Axios.get(url)
        .then((response) => {
            this.setState({
                objectArr: response.data,
                showFields: true
            })       
        })
        .catch((error) => {
            this.setState({
                showFields: false
            })
        })
    }

    handleInputFocus() {
        (this.state.inputValue.length > 0) && this.setState({
            showFields: true
        })
    }

    handeInputChange(event) {
        let value = event.target.value;
        this.setState({
            inputValue: value
        });
        (value.length > 1)
        && this.search(value)
    }

    handleInputBlur() {
        this.setState({
            showFields: false
        })
    }

    render() {
        let arr = this.state.objectArr;
        return(
            <div className='container'>
                <div className='frame'>
                    <div>
                        <InputGroup size="sm" className="mb-3" >    
                            <FormControl 
                                aria-label='Small'
                                aria-describedby='inputGroup-sizing-sm'
                                type='text'
                                onBlur={this.handleInputBlur}
                                onFocus={this.handleInputFocus}
                                onChange={this.handeInputChange}
                            />
                        </InputGroup>
                    </div>
                </div>
                {this.state.showFields 
                && <div className='dataFields'>
                        <ListGroup>
                            {arr.map((item) => {
                                return <DataFields object={item} value={this.state.inputValue}/>
                            })}
                        </ListGroup>
                    </div>
                }
            </div>
        )
    }
}