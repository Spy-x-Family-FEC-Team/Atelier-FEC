import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import styled from "styled-components";
import StyledCard from "./Card.jsx";
import { StyledLeftBtn, StyledRightBtn } from "./Button.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import localForage from "localforage";

const CarouselHeader = styled.header`
	background-color: white;
	padding: 10vh;
	display: flex;
	justify-content: center;
`

const CarouselContainer = styled.div`
	position: relative;
	padding: 0;
	margin: 0;
	height: 400px;
`

const CarouselTrack = styled.div`
	position: absolute;
	width: 100%;
	padding: 0;
	margin: 0;
	height: 100%;
`
const CarouselList = styled.div`
	background-color: white;
	padding: 0;
	margin: 0;
	height: 100%;
	list-style: none;
	display: grid;
	grid-template-columns: repeat(${props => props ? props.list.length + 1 : 1}, fit-content(200px));
	grid-column-gap: 5%;
	overflow-x: scroll;
	overflow-y: hidden;
	scroll-snap-type: x mandatory;
	scroll-behavior: smooth;
	scroll-snap-align: start;
	// &::-webkit-scrollbar {
  //   width: 6px;
  //   background-color: transparent;
	// }
`

const Carousel = ({product, mode, list, setList, status, setStatus}) => {

	//NEED TO RERENDER UPON WINDOW WIDTH CHANGE
	const [displayLeft, setDisplayLeft] = useState(false);
	const [displayRight, setDisplayRight] = useState(false);
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const carouselID = `Carousel-List-${mode}`

	//if current div is scrollable, display right button
	useEffect( () => {
		const list = document.querySelector(`#${carouselID}`);

		const handleResize= () => {
			setScreenWidth(window.innerWidth);

			const scrollWidth = list.scrollWidth;
			const position = list.scrollLeft;
			const divWidth = list.offsetWidth;
			console.log('scrollwidth', list.scrollWidth, 'clientwidth', list.clientWidth, 'window innerwidth', screenWidth);

			if (list.clientWidth < list.scrollWidth) {
				if (scrollWidth - position <= divWidth) {
					setDisplayRight(false);
				} else if (position === 0) {
					setDisplayLeft(false);
				} else {
					setDisplayLeft(true);
					setDisplayRight(true);
				}
			}
		}

		window.addEventListener("resize", handleResize);
		handleResize();

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

		console.log('window width', window.innerWidth);

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
			{mode === 'related' ? (<CarouselHeader>RELATED PRODUCTS</CarouselHeader>) : <CarouselHeader>YOUR OUTFIT</CarouselHeader>}
			<CarouselContainer>
				<StyledLeftBtn onClick={scrollLeft} disp={displayLeft}>
					<FontAwesomeIcon icon={solid('chevron-left')} />
				</StyledLeftBtn>
				<CarouselTrack>
					<CarouselList onScroll={(e) => {handleScroll(e)}} id={carouselID} list={list}>
						{mode === 'related' ? null :
						<StyledCard item={'outfitAdd'} mode={mode} list={list} setList={setList} product={product}/>}
						{status ? list.map( item => {
							return (
							<StyledCard item={item} mode={mode} list={list} setList={setList} product={product}/>
						)}) : null}
					</CarouselList>
				</CarouselTrack>
				<StyledRightBtn onClick={scrollRight}  disp={displayRight}>
					<FontAwesomeIcon icon={solid('chevron-right')} />
				</StyledRightBtn>
		</CarouselContainer>
		</div>
	)

};

export default Carousel;