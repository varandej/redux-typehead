import React from 'react';
import { ResultCard } from './result-card.jsx';
import { InputGroup, FormControl, ListGroup } from 'react-bootstrap';

export class Typehead extends React.Component {
    constructor(props) {
        super(props)

        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }

    handleInputFocus() {
        this.props.changeSelectDisplay(true)
    }

    handleInputChange (event) {
        const value = event.target.value;
        if (value.length > 2) {
            this.props.getData(this.props.url, value);
        }
        console.log(this.props.inputValue.length)
    }

    handleInputBlur() {
        this.props.changeSelectDisplay(false)
    }

    render() {
        const { responseData, inputValue, showSelect } = this.props;
        return (
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
                            onChange={this.handleInputChange}
                        />
                    </InputGroup>
                </div>
                {(showSelect)
                    && <div className='dataFields'>
                        <ListGroup>
                            {responseData.map((item) => {
                                return <ResultCard object={item} className='changebleClass' value={inputValue} />
                            })}
                        </ListGroup>
                    </div>
                }
            </div>
        )
    }
}