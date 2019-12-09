import React from 'react';
import spinner from '../../images/spinner.gif';
import './Spinner.scss';

const Spinner = () => {
    return (
        <div className="spinner">
            <img src={spinner} alt="loading" className="indicator"/>
        </div>
    )
}


export default Spinner;