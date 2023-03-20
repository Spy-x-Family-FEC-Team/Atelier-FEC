import React from "React";
import styled from "styled-components";
import StyledCard from "./Card.jsx";
import { StyledBtn, StyledRightBtn } from "./Button.jsx";

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
`

const Carousel = () => {

	return (
		<CarouselContainer>
			<StyledBtn>Left</StyledBtn>
			<CarouselTrack>
				<CarouselList>
					{numbers.map( num => {
					return (
					<StyledCard>I am card number {num}</StyledCard>
					)})}
				</CarouselList>
			</CarouselTrack>
			<StyledRightBtn>Right</StyledRightBtn>
		</CarouselContainer>
	)

};

export default Carousel;