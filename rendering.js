import menuItems from "./data/menu-items.js";
import state from "./state.js";

function renderPage(template) {
	document.querySelector('[data-outlet="main"]').innerHTML = template;
}

function renderItem(item) {
	return `
		<article class='item' data-id='${item.slug}'>
			<h2>${item.name}</h2>
			<p>${item.price}</p>

			<button data-route='itemDetail'>Details<idutton>

			<button data-action='add'>Add to cart</button>
		</article>
	`;
}

function renderMenu() {
	return menuItems
		.map(function (item) {
			return renderItem(item);
		})
		.join("");
	// just a little tidier than forEach.. but also a little more mysterious
}

function renderItemDetail() {
	return `
		<button data-action='decrement'>decrement</button>
		<button data-action='increment'>increment</button>
	`;
}

export { renderPage, renderItem, renderMenu, renderItemDetail };
