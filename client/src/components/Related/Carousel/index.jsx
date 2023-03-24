import React from "React";
import { useState, useEffect } from "react";
import styled from "styled-components";
import StyledCard from "./Card.jsx";
import { StyledLeftBtn, StyledRightBtn } from "./Button.jsx";
import relatedList from "../../../../../server/exampleData/related.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import localForage from "localforage";

// localForage.setItem('outfits', [40345, 40346, 40347])
// 	.then((data)=> {
// 		return localForage.getItem('outfits');
// 	})
// 	.then((data) => {
// 		console.log('outfits', data);
// 	})
// 	.catch((err) => {
// 		console.log('error');
// 	});
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// localForage.getItem('outfits')
//might have to fix height offset
const CarouselContainer = styled.div`
	position: relative;
	background-color: violet;
	padding: 0;
	margin: 0;
	height: 308px;
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
	grid-template-columns: repeat(${relatedList.length}, fit-content(200px));
	grid-column-gap: 10px;
	overflow-x: scroll;
	overflow-y: hidden;
	scroll-snap-type: x mandatory;
	scroll-behavior: smooth;
	scroll-snap-align: start;
`

const Carousel = ({mode}) => {

	//NEED TO RERENDER UPON WINDOW WIDTH CHANGE
	const [displayLeft, setDisplayLeft] = useState(false);
	const [displayRight, setDisplayRight] = useState(false);
	const [outfit, setOutfit] = useState(relatedList);
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
				<StyledLeftBtn onClick={scrollLeft} display={displayLeft}>
					<FontAwesomeIcon icon={solid('chevron-left')} />
				</StyledLeftBtn>
				<CarouselTrack>
					<CarouselList onScroll={(e) => {handleScroll(e)}} id={carouselID}>
						{mode === 'related' ? null : <StyledCard item={'outfitAdd'}/>}
						{mode === 'related' ? relatedList.map( item => {
							return (
							<StyledCard item={item} mode={mode}/>
						)}) : (
							outfit.map( item => {
								return (
								<StyledCard item={item} mode={mode} setOutfit={setOutfit}/>
						)})
					)}
					</CarouselList>
				</CarouselTrack>
				<StyledRightBtn onClick={scrollRight}  display={displayRight}>
					<FontAwesomeIcon icon={solid('chevron-right')} />
				</StyledRightBtn>
		</CarouselContainer>
		</div>
	)

};

export default Carousel;