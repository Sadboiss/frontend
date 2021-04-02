import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    root: {
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
});

const ImageSlide = ({ url }) => {
    const classes = useStyle();
    return (
        <div className={classes.root}></div>
    );
}

export default ImageSlide;