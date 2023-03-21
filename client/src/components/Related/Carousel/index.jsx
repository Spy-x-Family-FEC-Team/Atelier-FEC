import React from "React";
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

const scrollRight = () => {
	const list = document.querySelector("#Carousel-List");
	list.scrollBy(200, 0);
};

const scrollLeft = (e) => {
	const list = document.querySelector("#Carousel-List");
	list.scrollBy(-200, 0);
	const button = e.target;
	console.log("position", list.scrollLeft);
	if (list.scrollLeft === 0) {
		button.style.display = "hidden";
	}
};

// const getScrollPosition = () => {
// 	const position = list.scrollLeft;
// 	console.log('position', position);
// }

const Carousel = () => {

	return (
		<CarouselContainer>
			<StyledLeftBtn onClick={(e) => {scrollLeft(e)}}>Left</StyledLeftBtn>
			<CarouselTrack>
				<CarouselList id="Carousel-List">
					{numbers.map( num => {
					return (
					<StyledCard id={num}>I am card number {num}</StyledCard>
					)})}
				</CarouselList>
			</CarouselTrack>
			<StyledRightBtn onClick={scrollRight}>Right</StyledRightBtn>
		</CarouselContainer>
	)

};

export default Carousel;