import React from 'react';
import Axios from 'axios';
import { ResultCard } from './result-card.jsx';
import { InputGroup, FormControl, ListGroup } from 'react-bootstrap';

export class ReusableComponent extends React.Component {

    constructor(props) {
        super(props);
            
        this.state = {
            showFields: false,
            inputValue: '',
            objectArr: []
        };

        this.search = this.search.bind(this);
        this.handeInputChange = this.handeInputChange.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
        this.handleInputFocus = this.handleInputFocus.bind(this);
    }

    search(value){
        const url = this.props.url+value;
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
        (value.length > 2)
        && this.search(value);
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
                    <InputGroup size="sm" className="mb-3" >    
                        <FormControl 
                            aria-label='Small'
                            aria-describedby='inputGroup-sizing-sm'
                            type='text'
                            placeholder="Let's search for something!.."
                            onBlur={this.handleInputBlur}
                            onFocus={this.handleInputFocus}
                            onChange={this.handeInputChange}
                        />
                    </InputGroup>
                </div>
                {this.state.showFields 
                && <div className='dataFields'>
                    <ListGroup>
                        {arr.map((item) => {
                            return <ResultCard object={item} className='changebleClass' value={this.state.inputValue}/>
                        })}
                    </ListGroup>
                </div>
                }
            </div>
        )
    }
}