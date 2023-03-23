import React from "React";
import { useState, useEffect } from "react";
import styled from "styled-components";
import StyledCard from "./Card.jsx";
import { StyledLeftBtn, StyledRightBtn } from "./Button.jsx";
import currentProduct from "../../../../../server/exampleData/product.json"

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

const Carousel = ({mode}) => {

	const currentID = currentProduct.id;

	//NEED TO RERENDER UPON WINDOW WIDTH CHANGE
	const [displayLeft, setDisplayLeft] = useState(false);
	const [displayRight, setDisplayRight] = useState(false);
	const carouselID = `Carousel-List-${mode}`

	//if current div is scrollable, display right button
	useEffect( () => {
		const list = document.querySelector(`#${carouselID}`);
		if (list.clientWidth < list.scrollWidth) {
			setDisplayRight(true);
		}
	}, []);

	//scroll left and right functions
	const scrollRight = () => {
		const list = document.querySelector(`#${carouselID}`);
		list.scrollBy(200, 0);
	};

	const scrollLeft = () => {
		const list = document.querySelector(`#${carouselID}`);
		list.scrollBy(-200, 0);
	};

	//update right/left button visibility based on scroll position
	const handleScroll = (e) => {

		const track = e.target;
		const position = track.scrollLeft;
		const divWidth = track.offsetWidth;
		const scrollWidth = track.scrollWidth;

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
		<div>
			{mode === 'related' ? (<h3>RELATED PRODUCTS</h3>) : <h3>YOUR OUTFIT</h3>}
			<CarouselContainer>
			<StyledLeftBtn onClick={scrollLeft} display={displayLeft}>Left</StyledLeftBtn>
			<CarouselTrack>
				<CarouselList onScroll={(e) => {handleScroll(e)}} id={carouselID}>
					{numbers.map( num => {
					return (
					<StyledCard id={num}>I am card number {num}</StyledCard>
					)})}
				</CarouselList>
			</CarouselTrack>
			<StyledRightBtn onClick={scrollRight}  display={displayRight}>Right</StyledRightBtn>
		</CarouselContainer>
		</div>
	)

};

export default Carousel;