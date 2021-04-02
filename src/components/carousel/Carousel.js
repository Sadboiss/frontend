import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import ImageSlide from "./ImageSlide";
import Arrow from './Arrow';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRightIcon';

const useStyles = makeStyles({
	root: {
		width: '100%',
		height: '100%'
	},
});

const Carousel = ({ productImages }) => {
	const classes = useStyles();

	const nextSlide = () => {

	}

	const previousSlide = () => {

	}
	
	<div className={classes.root}>
		<Arrow 
			direction="left"
			callBack={nextSlide}
			icon={ArrowLeftIcon}
		/>
		<ImageSlide />
		<Arrow 
			direction="right"
			callBack={previousSlide}
			icon={ArrowRightIcon}
		/>
	</div>
};

export default Carousel;