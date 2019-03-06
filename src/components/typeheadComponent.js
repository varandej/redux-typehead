// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import { InputGroup, FormControl, ListGroup } from 'react-bootstrap';
import { ResultCard } from './resultCradComponent';
import type { Props, Item } from '../types/Typehead';

export class Typehead extends React.Component<Props> {

    handleInputChange = (event: SyntheticEvent<FormControl>) => {
        (event.currentTarget: FormControl);
        const value = event.currentTarget.value;
        this.props.getData(this.props.url, value);
    }

    callChangeSelectDisplay = () =>  {
        this.props.changeSelectDisplay(this.props.data);
    }

    handleInputDisplay = () => {
        setTimeout(this.callChangeSelectDisplay, 150);
    }

    render() {
        const { data, inputValue } = this.props;
        return (
            <div className='typehead'>
                <InputGroup size="sm" className='typehead__input-group' >
                    <FormControl
                        className='typehead__form-control'
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
                {(data.length > 0)
                    && <ListGroup className='typehead__options'> 
                        {data.map((item: Item) => {
                            if(typeof(item.name) === 'string') {
                                return ( 
                                    <Link 
                                        key={item.name}
                                        to={{
                                            pathname: `/country?name=${item.name.toLowerCase()}`,
                                            state: {item}
                                        }}
                                    >
                                        <ResultCard 
                                            item={item} 
                                        />
                                    </Link>
                                )
                            }
                        })}
                    </ListGroup>
                }
            </div>
        )
    }
}
