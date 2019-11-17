
// preview-section
const newProd = productObj => {

	var clothes = document.getElementById('clothes');
	var accesories = document.getElementById('accesories');

	if (productObj.preview.match('.jpg')) {

		var dataCard = document.createElement('datacard');
		var cardLink = document.createElement('a');
		var heading = document.createElement('h4');
		var p1 = document.createElement('p');
		var p2 = document.createElement('p');
		var image = document.createElement('img');
		var caption = document.createElement('caption');

		image.src = productObj.preview;
		cardLink.href = "details.html?product-id=" + productObj.id;
		cardLink.appendChild(image);
		heading.innerHTML = productObj.name;
		p1.className = "desc";
		p2.className = "price";
		p1.innerHTML = productObj.brand;
		p2.innerHTML = productObj.price;

		dataCard.appendChild(cardLink);
		dataCard.appendChild(caption);
		caption.appendChild(heading);
		caption.appendChild(p1);
		caption.appendChild(p2);

		if (productObj.isAccessory === false) clothes.appendChild(dataCard);
		if (productObj.isAccessory === true) accesories.appendChild(dataCard);
	}
};

const getData = () => {
	var http = new XMLHttpRequest();

	http.onreadystatechange = function() {
		if (this.readyState === 4) {
			if (this.status === 200) {
				var productObj = JSON.parse (this.responseText);
					productObj.map (item => {
						newProd(item);
					});
			} else console.log ('Call failed');
		}
	};

	http.open('GET', 'https://5d76bf96515d1a0014085cf9.mockapi.io/product', true);
	http.send();	
};

getData();