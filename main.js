let display = document.getElementById('display');
function button(obj) {
	let kondisi = obj.innerHTML;
	if (kondisi == "=") {
		display.innerHTML = eval(display.innerHTML);
	} else if (kondisi == "C") {
		display.innerHTML = "";
	} else if (kondisi == "Del") {
		display.innerHTML = display.innerHTML.slice(0, -1);
	} else {
		if (display.innerHTML == "") {
			display.innerHTML = kondisi;
		} else {
			display.innerHTML += kondisi;
		}
	}
}


function gantiMode(pil) {
	let mode = document.querySelector("link");
	mode.getAttribute("href");
	let tombol = pil.innerHTML;
	if (tombol == "Dark") {
		mode.setAttribute("href", "dark_mode.css");
	} else if (tombol == "Neon") {
		mode.setAttribute("href", "neon_mode.css");
	} else {
		mode.setAttribute("href", "styles.css");
	}
}
