import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './Loading.css';

function Loading() {
    return (
        <Spinner className="loading" animation="border" variant="light" />
      );
}

export default Loading;