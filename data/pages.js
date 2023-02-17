import { renderMenu, renderItem, renderItemDetail } from "../rendering.js";
import state from "../state.js";

const pages = {};

pages.landing = `
	<section>
		<h1>Landing</h1>
		
		<button data-route='menu'>Enter</button>

		<button data-action='decrement'>decrement</button>
		<button data-action='increment'>increment</button>
	</section>
`;

pages.menu = `
	<section class='page-menu'>
		<h1>Menu</h1>

		${renderMenu()}
	</section>
`;

pages.itemDetail = `
	<section class='item-detail'>
		<h1>Detail</h1>

		${renderItemDetail()}

		<p>${state.getCount()}</p>
	</section>
`;

export default pages;
