import React from "React";
import { useState, useEffect } from "react";
import styled from "styled-components";
import StyledCard from "./Card.jsx";
import { StyledLeftBtn, StyledRightBtn } from "./Button.jsx";

const numbers = [0, 1, 2, 3, 4, 5, 6]

const CarouselContainer = styled.div`
	position: relative;
	background-color: violet;
	padding: 0;
	margin: 0;
	height: 300px;
`

const CarouselTrack = styled.div`
	background-color: grey;
	position: absolute;
	width: 100%;
	padding: 0;
	margin: 0;
	height: 100%;
`
const CarouselList = styled.div`
	background-color: yellow;
	padding: 0;
	margin: 0;
	height: 100%;
	list-style: none;
	display: grid;
	grid-template-columns: repeat(${numbers.length}, 200px);
	grid-column-gap: 10px;
	overflow: scroll;
	scroll-snap-type: x mandatory;
	scroll-behavior: smooth;
	scroll-snap-align: start;
`

const Carousel = () => {

	/*
	add event listener to carousel list
		when scroll position changes
		if scroll position is more than 0, set display left button
		if scroll position is equal to width, set right button to hidden
	*/

	const [displayLeft, setDisplayLeft] = useState(false);
	const [displayRight, setDisplayRight] = useState(false);

	useEffect( () => {

		const list = document.querySelector("#Carousel-List");

		if (list.clientWidth < list.scrollWidth) {
			setDisplayRight(true);
		}

	}, []);



	const scrollRight = () => {
		const list = document.querySelector("#Carousel-List");
		list.scrollBy(200, 0);
	};

	const scrollLeft = () => {
		const list = document.querySelector("#Carousel-List");
		list.scrollBy(-200, 0);
	};

	const handleScroll = (e) => {

		const track = e.target;

		const position = track.scrollLeft;
		const divWidth = track.offsetWidth;
		const scrollWidth = track.scrollWidth;

		console.log('position', position, 'divWidth', divWidth, 'scrollWidth', scrollWidth);

		if (scrollWidth - position <= divWidth) {
			setDisplayRight(false);
		} else if (position === 0) {
			setDisplayLeft(false);
		} else {
			setDisplayLeft(true);
			setDisplayRight(true);
		}
	}

	return (
		<CarouselContainer>
			<StyledLeftBtn onClick={scrollLeft} display={displayLeft}>Left</StyledLeftBtn>
			<CarouselTrack>
				<CarouselList onScroll={(e) => {handleScroll(e)}} id="Carousel-List">
					{numbers.map( num => {
					return (
					<StyledCard id={num}>I am card number {num}</StyledCard>
					)})}
				</CarouselList>
			</CarouselTrack>
			<StyledRightBtn onClick={scrollRight}  display={displayRight}>Right</StyledRightBtn>
		</CarouselContainer>
	)

};

export default Carousel;