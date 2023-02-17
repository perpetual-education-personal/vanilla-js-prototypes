import menuItems from "./data/menu-items.js";
import pages from "./data/pages.js";
import state from "./state.js";

import { renderPage, renderItemDetail } from "./rendering.js";

console.clear();

window.addEventListener("click", function (event) {
	if (event.target.matches("[data-route]")) {
		let route = event.target.dataset.route;
		console.log("to ", route);

		if (route == "itemDetail") {
			var to = event.target.closest("article").dataset.id; // 'apple'
			renderPage(pages[route]); // itemDetail
		}

		if (route == "menu") {
			renderPage(pages[route]);
		}

		if (route == "landing") {
			renderPage(pages[route]);
		}
	}

	if (event.target.matches("[data-action]")) {
		let action = event.target.dataset.action;

		if (action == "increment") {
			state.increment();
		}
		if (action == "decrement") {
			state.decrement();
		}
	}
});

renderPage(pages["landing"]); // setup // could be 'landing' etc -
