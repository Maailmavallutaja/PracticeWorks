/*
function calc() {
	let a = parseInt(document.querySelector("#value1").value);
	let b = parseInt(document.querySelector("#value2").value);
	let op = document.querySelector("#operator").value;
	var calculate;

	if (op === 'add') {
		calculate = a + b;
	} else if (op === 'min') {
		calculate = a - b;
	} else if (op === 'div') {
		calculate = a / b;
	} else if (op === 'mult') {
		calculate = a * b;
	}

	document.querySelector("#result").innerHTML = calculate;
}
	*/



function arvutapalk ()  {
	 let tunnid = parseInt(document.querySelector("#tunnid").value);
	 let tunnihinne = parseInt(document.querySelector("#tunnihind").value);
	 let kgaruuduhind = parseInt(document.querySelector("#kgaruuduhind").value);
	 let kgaruudud = parseInt(document.querySelector("#kgaruudud").value);
	 let ktaruuduhind = parseInt(document.querySelector("#ktaruuduhind").value);
	 let ktaruudud = parseInt(document.querySelector("#ktaruudud").value);
	 let sruudud = parseInt(document.querySelector("#sruudud").value);
	 let sruuduhind = parseInt(document.querySelector("#sruuduhind").value);
	 
	 let verop = parseInt(document.querySelector("#verop").value);
	let tyol = 7.7, lomaprotsent = 18.5;
	let ktaruuduraha = Math.floor(ktaruuduhind * ktaruudud);
	let kgaruuduraha = Math.floor(kgaruuduhind * kgaruudud);
	let sruuduraha = Math.floor(sruudud * sruuduhind);
	let ruuduraha = Math.floor(sruuduraha + ktaruuduraha + kgaruuduraha);
	let tunniraha = Math.floor(tunnid * tunnihinne);
	let pohipalk = Math.floor(ruuduraha + tunniraha);
	let lomaraha = Math.floor(lomaprotsent * pohipalk /100);
	let tyolraha = Math.floor(tyol * pohipalk / 100);
	let brutopalk = Math.floor(pohipalk + tyolraha + lomaraha);
	let tootumaksuprotsent = 1.9;
	let tootumaks = Math.floor(tootumaksuprotsent * brutopalk / 100);
	let tootukindlustusprotsent = 6.35;
	let tootukindlustus = Math.floor(tootukindlustusprotsent * brutopalk / 100);
	let veromaks = Math.floor(brutopalk * verop /100);
	let maksud = Math.floor(veromaks + tootukindlustus + tootumaks);
	let netopalk = Math.floor(brutopalk - veromaks - tootukindlustus - tootumaks);
	
	document.querySelector("#ktaruuduraha").innerHTML = ktaruuduraha;
	document.querySelector("#kgaruuduraha").innerHTML = kgaruuduraha;
	document.querySelector("#sruuduraha").innerHTML = sruuduraha;
	document.querySelector("#ruuduraha").innerHTML = ruuduraha;
	document.querySelector("#tunniraha").innerHTML = tunniraha;
	document.querySelector("#pohipalk").innerHTML = pohipalk;
	document.querySelector("#tyolraha").innerHTML = tyolraha;
	document.querySelector("#lomaraha").innerHTML = lomaraha;
	document.querySelector("#brutopalk").innerHTML = brutopalk;
	document.querySelector("#veromaks").innerHTML = veromaks;
	document.querySelector("#tootumaks").innerHTML = tootumaks;
	document.querySelector("#tootukindlustus").innerHTML = tootukindlustus;
	document.querySelector("#veromaks").innerHTML = veromaks;
	document.querySelector("#maksud").innerHTML = maksud;
	document.querySelector("#netopalk").innerHTML = netopalk;
}

	/* arvutaruudud () {
		this.ruuduraha = this.ruudud * this.ruuduhinne;
	},

	arvutatunnid () {
		this.tunniraha = this.tunnid * this.tunnihinne;
	},
	 arvutapohipalk () {
	 	this.pohipalk = this.arvutatunnid + this.arvutaruudud;
	},
	 arvutalyhlisa () {
		this.tyolraha = pohipalk * this.tyol / 100
	},
	 arvutaloma () {
		this.loma = pohipalk * this.lomaprotsent / 100
	},
	arvutabruto () {
		this.brutopalk = this.pohipalk + this.lomaraha + this.tyolraha;
	},
	arvutatootutoetus () {
		this.tootumaks = this.tootumaksuprotsent * this.brutopalk / 100
	},
	arvutatootukindlustus () {
		this.tootukindlustus = this.tootukindlustusprotsent * this.brutopalk / 100
	},
	arvutaveromaks () {
		this.veromaks = this.brutopalk * this.verop /100
	},
	arvutanetopalk () {
		this.netopalk = this.brutopalk - this.veromaks - this.tootukindlustus - this.tootumaks
	},

*/