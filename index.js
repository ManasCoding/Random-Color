const divElem = document.getElementById("divID");
		function randomcolor() {
			return Math.floor(Math.random() * 255);
		}
		divElem.addEventListener('click', () => {
			document.body.style.backgroundColor = 'rgba('
				+ randomcolor() + ',' + randomcolor()
				+ ',' + randomcolor() + '\)'
		});

		/*divElem.addEventListener('click', () => {
			document.body.style.backgroundColor = "#" + randomcolor();
		})*/