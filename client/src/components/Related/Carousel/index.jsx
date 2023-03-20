import React from "React";
import styled from "styled-components";
import StyledCard from "./Card.jsx";
import StyledBtn from "./Button.jsx";

const numbers = [0, 1, 2, 3]

const CarouselContainer = styled.div`
	position: relative;
	background-color: violet;
	padding: 0;
	margin: 0;
	height: 300px;
`

const CarouselTrack = styled.div`
	background-color: grey;
	position: relative;
	padding: 0;
	margin: 0;
	height: 100%;
`
const CarouselList = styled.ul`
	background-color: yellow;
	padding: 0;
	margin: 0;
	height: 100%;
	list-style: none;
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
			<StyledBtn>Right</StyledBtn>
		</CarouselContainer>
	)

};

export default Carousel;