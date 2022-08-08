let getData = async (url) => {
	try {
		let res = await fetch(url);
		let data = res.json();
		return data;
	} catch (e) {
		console.log("e: ", e);
	}
};

let appendData = (data, container) => {
	data.map(({ urls: { small } }) => {
		let img = document.createElement("img");
		img.src = small;

		let btn = document.createElement("button");
		btn.addEventListener("click", function () {
			btnDownload(small);
		});
		btn.innerText = "Download";

		let box = document.createElement("div");
		box.append(img, btn);

		container.append(box);
	});
};

function btnDownload(small) {
	let imgPath = small;
	let fileName = getFileName(imgPath);
	saveAs(imgPath, fileName);
}
function getFileName(str) {
	return str.substring(str.lastIndexOf("&") + 1);
}

export { getData, appendData };
