import React from 'react';
import { ResultCard } from './result-card.jsx';
import { InputGroup, FormControl, ListGroup } from 'react-bootstrap';

export class Typehead extends React.Component {
    constructor(props) {
        super(props)

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputDisplay = this.handleInputDisplay.bind(this);
    }

    handleInputChange (event) {
        const value = event.target.value;
        this.props.getData(this.props.url, value);
    }

    handleInputDisplay() {
        this.props.changeSelectDisplay(this.props.data);
    }

    render() {
        const { data, inputValue } = this.props;
        return (
            <div className='container'>
                <div className='frame'>
                    <InputGroup size="sm" className="mb-3" >
                        <FormControl
                            aria-label='Small'
                            aria-describedby='inputGroup-sizing-sm'
                            type='text'
                            placeholder="Let's search for something!.."
                            value={inputValue}
                            onBlur={this.handleInputDisplay}
                            onFocus={this.handleInputDisplay}
                            onChange={this.handleInputChange}
                        />
                    </InputGroup>
                </div>
                {(data.length > 0)
                    && <div className='dataFields'>
                        <ListGroup>
                            {data.map((item) => {
                                return <ResultCard object={item} className='changebleClass' key={item.name}/>
                            })}
                        </ListGroup>
                    </div>
                }
            </div>
        )
    }
}