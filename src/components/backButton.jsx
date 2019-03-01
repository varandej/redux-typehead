import React from 'react';
import { Button } from 'react-bootstrap';

export function BackButton() {
    const goBack = function() {
        window.history.back()
    }

    return (
        <Button variant="outline-primary" onClick={goBack}>Go Back</Button>
    )
}