let read = (ids) => {
	return document.getElementById(ids);
};

const API = `htGZD7HBvzKu4QQc-arnVAdS0KKN_U8OYhfALmXAX50`;

import { navbar } from "../components/navbar.js";
read("navbar").innerHTML = navbar();

import { getData, appendData } from "../components/fetch.js";
const url1 = `https://api.unsplash.com/search/photos/?query=wallpapers&order_by=popular&orientation=portrait&per_page=100&client_id=${API}`;
getData(url1).then((data) => {
	appendData(data.results, container);
});

let search = (e) => {
	if (e.key == "Enter") {
		let value = read("query").value;
		const url = `https://api.unsplash.com/search/photos/?query=${value}&order_by=popular&orientation=portrait&per_page=100&client_id=${API}`;
		getData(url).then((data) => {
			console.log(data);
			let container = read("container");
			container.innerHTML = null;
			appendData(data.results, container);
		});
	}
};

read("query").innerHTML = addEventListener("keydown", search);

let categories = read("category").children;
// console.log("categories: ", categories);

function categorySearch() {
	console.log(this.id);
	const url = `https://api.unsplash.com/search/photos/?query=${this.id}&order_by=popular&orientation=portrait&per_page=60&client_id=${API}`;
	getData(url).then((data) => {
		console.log(data);
		let container = read("container");
		container.innerHTML = null;
		appendData(data.results, container);
	});
}

for (let el of categories) {
	el.addEventListener("click", categorySearch);
}
