import React from 'react';
import classes from './Backdrop.module.css';

const background = (props) => {
    return(
        props.show ? 
            <div 
                className={classes.Backdrop} 
                onClick={props.clicked}>
            </div> : null
    );
}

export default background;