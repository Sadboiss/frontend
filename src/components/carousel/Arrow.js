import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		width: '100%',
		height: '100%'
    },
    left: {
        left: '1rem'
    },
    right: {
        right: '1rem'
    }
});

const Arrow = ({ direction, callBack, icon }) => {
    const classes = useStyles();

    return (
        <div className={classes[direction]}>

        </div>
    )
}

export default Arrow;