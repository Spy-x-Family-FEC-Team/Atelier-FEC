import React from "React";
import { useState, useEffect } from "react";
import axios from 'axios';
import styled from "styled-components";
import StyledCard from "./Card.jsx";
import { StyledLeftBtn, StyledRightBtn } from "./Button.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import localForage from "localforage";

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
	grid-template-columns: repeat(${props => props ? props.list.length + 1 : 1}, fit-content(200px));
	grid-column-gap: 10px;
	overflow-x: scroll;
	overflow-y: hidden;
	scroll-snap-type: x mandatory;
	scroll-behavior: smooth;
	scroll-snap-align: start;
`

const Carousel = ({product, mode, list, setList}) => {

	//NEED TO RERENDER UPON WINDOW WIDTH CHANGE
	const [displayLeft, setDisplayLeft] = useState(false);
	const [displayRight, setDisplayRight] = useState(false);
	const [itemsList, setItemsList] = useState([]);
	const carouselID = `Carousel-List-${mode}`

	//get request for all item info
	console.log('list inside carousel', list, mode);
	useEffect( () => {

		const allItemPromises = list.map( item => {
			console.log('item inside carousel promise', item);
			const id = item;
			console.log(id, 'item id inside promise req')

			const promise1 = axios.get(`/api/products/${id}`)
				.then(results => results.data)
				.catch(err => err);

			const promise2 = axios.get(`/api/reviews/meta/${id}`)
				.then(results => results.data)
				.catch(err => err);

			const promise3 = axios.get(`/api/products/${id}/styles`)
				.then(results => results.data)
				.catch(err => err);

			Promise.all([promise1, promise2, promise3])
				.then((results) => {
					return results;
				})
				.catch( err => {
					console.log('error retrieving individual item info promise');
			})});

		Promise.all(allItemPromises)
			.then( results => {
				console.log(results, 'all item info promise');
				setItemsList(results);
			})
			.catch( err => {
				console.log('error retrieving all product info')
			});
	}, [])

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
					<CarouselList onScroll={(e) => {handleScroll(e)}} id={carouselID} list={list}>
						{mode === 'related' ? null : <StyledCard item={'outfitAdd'} mode={mode} list={list} setList={setList} product={product}/>}
						{itemsList.map( item => {
							return (
							<StyledCard item={item} mode={mode} list={list} setList={setList} product={product}/>
						)})}
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