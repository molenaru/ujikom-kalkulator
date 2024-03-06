	var display = document.getElementById('display');
		function button	(obj) {
			var kondisi = obj.innerHTML;
			if (kondisi == "=") {
				display.innerHTML = eval(display.innerHTML);
			} else if (kondisi == "C") {
				display.innerHTML = "";
			} else if (kondisi == "Del") {
				display.innerHTML = display.innerHTML.slice(0,-1);
			} else {
				if (display.innerHTML == "") {
					display.innerHTML = kondisi;
				} else {
					display.innerHTML += kondisi;
				}
			}
		}	
		