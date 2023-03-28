import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import Carousel from "./Carousel";
import localForage from "localforage";

const Related = ({product}) => {

	//takes in current item and related item ids as prop
	// const [relatedData, setRelatedData] = useState([]);
	const [outfit, setOutfit] = useState([]);
	const [related, setRelated] = useState([]);
	const [status, setStatus] = useState(false);

	useEffect( () => {

		//get outfit data objects
		localForage.getItem('outfits')
			.then((data) => {
				if (!data) {
					setOutfit([]);
				} else {
					setOutfit(data);
				}
				// console.log('outfit', outfit);
			})
			.catch(err => {
				// console.log('error retrieving outfit', err);
			});

		// get related items id array then get related prodcuts
			const id = 40344;
			axios.get(`/api/products/${id}/related`)
				.then((results) => {
					// console.log(results.data, 'related results after retrieving promise')
					const allItemPromises = results.data.map( item => {
						// console.log('item inside carousel promise', item);
						const id = item;

						const promise1 = axios.get(`/api/products/${id}`)
							.then((results) => {
								// console.log('related prod info from promise', results.data);
								return results.data;
							})
							.catch(err => err);

						const promise2 = axios.get(`/api/reviews/meta/${id}`)
							.then((results) => {
								// console.log('review prod info from promise', results.data);
								return results.data;
							})
							.catch(err => err);

						const promise3 = axios.get(`/api/products/${id}/styles`)
							.then((results) => {
								// console.log('styles prod info from promise', results.data);
								return results.data;
							})
							.catch(err => err);

						return Promise.all([promise1, promise2, promise3])
							// .then((results) => {
							// 	return results;
							// })
							// .catch( err => {
							// 	console.log('error retrieving individual item info promise');
						});

					Promise.all(allItemPromises)
						.then( results => {
							// console.log(results, 'all item info promise');
							setRelated(results);
							setStatus(true);
						})
						.catch( err => {
							// console.log('error retrieving all product info')
						});
				})
				.catch(err => {
					// console.log('error retrieving related items', err);
				})
	}, []);

	return (
		<div>
			<div>hello we are related</div>
			<Carousel product={product} mode={'related'} list={related} setList={setRelated} status={status} setStatus={setStatus}/>
			<Carousel product={product} mode={'outfit'} list={outfit} setList={setOutfit} status={status} setStatus={setStatus}/>
		</div>
	)

};

export default Related;

/*
Related Items & Comparison
The Related Items & Comparison module will display two sets of related products. The first set will be a list of products, determined internally, that are related to the product currently being viewed. The second set will be a list, custom created by the user, of products which the user has grouped with the current product into an ‘outfit’.
Related Product Cards
The related product lists will consist of cards. Each card will display the information for a single product.
The card itself will be clickable. Clicking the card will navigate to the detail page for that product.
1.4.1.1. Product Information
The following information will appear on the card. This information will all be read-only and will not have any interactivity associated.
Product Category
Product Name
Price - As the price is not actually derived from the product, the price displayed should be that for the default style. Sale prices should be reflected. If the style is currently discounted, then the sale price should appear in red, followed by the original price which is struckthrough.
Star Rating (# of Reviews) - Each product has an average rating based on its reviews. The average rating of the product will be displayed in the format of solid or outlined stars, where the solid stars represent the review score. A total of 5 stars should always appear, and the amount filled in should correspond to the average score.
The visual for rating should be representative of up to a quarter of a review point. For example, if the average is 3.8, this should display as 3¾ solid stars and 1¼ outlined stars. If there are no reviews, this entire section should be hidden.
1.4.1.2. Product Preview Images
The product card should display preview images of the related products. The images which appear on the product card should be the same that appear in the Overview module on the item detail page for that product.
By default, the preview image displayed on each card will be the primary image for that product. This should be the same which first appears on the image detail page’s image gallery.
Future Enhancement - In addition to only being able to load the primary image, users should be able to scroll through additional images associated with a related product.
	Upon hovering over the initial preview image that appears on the card, a carousel of thumbnail images should appear allowing the user to view additional preview images. The carousel will be a row of thumbnails which overlays the bottom portion of the preview image, covering part of the image when hovered. The list should disappear when the user is no longer hovering on the card.
	Four thumbnail images should appear in the carousel at any given time. The carousel should extend the ability to scroll left/right through the list via left and right arrows such that all images for that product can be selected and viewed.
	Clicking on a thumbnail should change the preview image to display the image clicked. The selection of a different image should persist even after no longer hovering over this card.
	Clicking on the preview image, and anywhere on the card other than a thumbnail image carousel, will continue to navigate the user to that product’s detail page.
1.4.1.3. Action button
A button will appear on the top right corner of each product card. This button will trigger different functionality depending on which list, Related Products or Your Outfit, the card appears within. The button will also display a different value depending on which list the card appears within.
List Behavior
Related product lists will be shown as a list of product cards displayed in a carousel fashion scrolling horizontally.
The number of related products will be finite. All of the related products should be present in the list. Due to screen limitations, any product cards that do not fit on screen initially, should appear offscreen in the carousel. On initial load, the list should be centered such that the first related product is all the way on the left hand side of the screen.
In order to navigate through and view the rest of the list, arrows will appear on the right and left hand edges of the list. Clicking the left and right arrow will scroll through the list displaying previous and subsequent cards in the list, respectively. Clicking on the arrow should only scroll through the list one product at a time.
When the first card is all the way on the left of the screen, and no previous cards exist to display, the left arrow should be hidden. This will be the case on initial page load. Similarly, when the last card appears on the far right of the list, the right arrow will be hidden.
Related Products List
The first list for related products will be the same for every customer. It will display products which have been associated with the current product by the company. This list will be determined internally.
User interactions will not change the list. The related products list will be the same each time the product is loaded.
1.4.3.1. Action button
The action button on cards within the Related Products list will appear as a star icon. The button will open a modal window comparing the details of the product of the current page to those of the product that was selected from the list.
1.4.3.2. Comparison Modal
The comparison modal window will pull up and compare the characteristics present for each product. The modal should be titled “Comparing”. The characteristics to be compared are the same as those which appear on the Overview module for each product separately.
In the comparison modal, all characteristics for both products will be combined and reconciled against one another. These characteristics should appear in a table format with the first column representing the product for the current page, the second displaying the characteristic, and the third representing the product to be compared.
Current Product Name


Compared Product Name
Current Product Value
Characteristic
Compared Product Value

Each characteristic should appear on its own line. These characteristics can either be facts regarding the product or values for which the product has a specific quantity. If the characteristic has a specific value it should display. If the characteristic is a fact such that it is ‘true’ for the given product, then the value should be displayed as a checkmark. For any characteristics that do not apply to the product, the value should simply be left blank.
All characteristics should appear in the modal. If the products have no overlapping characteristics listed, then all should appear, but no single characteristic row would have a value for both products.
If the length of the comparison table is too long to display on the modal, the table should become scrollable. In this scenario, the product names should remain fixed atop the list.
Your Outfit List
A second list of products will appear below the standard Related Products section. It will contain products which the user has selected to group together as an outfit. This list will have the same format as the related products section, and will display the same product cards in a carousel like list. This list will be titled “Your Outfit”.
Unlike the related products list that appears first, the products which appear in this list will not be determined internally, but will be unique to each user. Items will be added to the list only when a user explicitly selects them to be added.
Also unlike the related products list, the first card that appears on the left hand side of the list should not contain a product. Instead the card should display a ‘+’ icon and read “Add to Outfit”. This card will act as a button that adds the currently viewed product to the outfit list.
By default, this list should contain no products within it.
Additions will impact individual customers specifically. A selection one customer makes will not impact any other customers.
A product can only be added to an outfit once. While the card to “Add to Outfit” should remain visible, clicking it will not add the item a second time. There is no maximum limit on the number of items a user may add to their outfit.
Each customer will have one outfit list. This list will be the same regardless of which product detail page they are viewing. Therefore, the list items should persist across page navigation.
The list should persist for each customer even if they exit the website and return at a later time.
1.4.4.1. Action button
The action button on cards within the Related Products list will appear as an ‘X’ icon. The button will remove the product from the Outfit list.

*/

