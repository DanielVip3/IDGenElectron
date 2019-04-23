function randomItemFromArray(items) {
	return items[Math.floor(Math.random()*items.length)];
}

function idGenFromTemplate (template, options=null) {
	// esempio di template è "      ****|***-***.*       " e ti genera un id a caso con quel template, esempio "      1784|335-290.2       "
	var lista = [];
	if (options == null) {
		lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	} else {
		if ((options.both_numbers == false || options.both_numbers == null || options.both_numbers == undefined) && (options.numbers == false || options.numbers == null || options.numbers == undefined)) {
			if (options.negative_numbers == true) {
				lista = lista.concat([-1, -2, -3, -4, -5, -6, -7, -8, -9]);
			}
			if (options.positive_numbers == true) {
				lista = lista.concat([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
			}
		} else {
			lista = lista.concat([-1, -2, -3, -4, -5, -6, -7, -8, -9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
		}

		if ((options.both_letters == false || options.both_letters == null || options.both_letters == undefined) && (options.letters == false || options.letters == null || options.letters == undefined)) {
			if (options.low_letters == true) {
				lista = lista.concat("abcdefghijklmnopqrstuvwxyz".split(""));
			}
			if (options.high_letters) {
				lista = lista.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
			}
		} else {
			lista = lista.concat("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
		}

		if (options.special_characters == true) {
			lista = lista.concat("!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split(""));
		}

		if (options.empty_space == true) {
			lista = lista.concat([" "]);
		}

		if (options.no_zero == true) {
			lista.splice(lista.indexOf("0"), 1);
		}

		if (options.custom instanceof Array) {
			lista = lista.concat(options.custom);
		} else if (typeof options.custom == "string" || options.custom instanceof String) {
			lista = lista.concat(options.custom.split(" "));
		}
	}

	if (lista.length == 0) {
		throw "The list is empty!";
	}

	let string = template.replace(new RegExp("\\*", "g"), function() {
		return randomItemFromArray(lista);
	});
	return string;
};

function idGenFromNumber (number, options=null) {
	// esempio : idGenFromNumber(3, {custom: ["a", "b", "c"]}) genera un codice che può essere o abc o acb o cba o cab o bca o bac essendo solo di 3 numeri e non contenendo altre lettere
	// se non a, b e c

	var lista = [];
	if (options == null) {
		lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	} else {
		if ((options.both_numbers == false || options.both_numbers == null || options.both_numbers == undefined) && (options.numbers == false || options.numbers == null || options.numbers == undefined)) {
			if (options.negative_numbers == true) {
				lista = lista.concat([-1, -2, -3, -4, -5, -6, -7, -8, -9]);
			}
			if (options.positive_numbers == true) {
				lista = lista.concat([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
			}
		} else {
			lista = lista.concat([-1, -2, -3, -4, -5, -6, -7, -8, -9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
		}

		if ((options.both_letters == false || options.both_letters == null || options.both_letters == undefined) && (options.letters == false || options.letters == null || options.letters == undefined)) {
			if (options.low_letters == true) {
				lista = lista.concat("abcdefghijklmnopqrstuvwxyz".split(""));
			}
			if (options.high_letters) {
				lista = lista.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
			}
		} else {
			lista = lista.concat("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
		}

		if (options.special_characters == true) {
			lista = lista.concat("!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split(""));
		}

		if (options.empty_space == true) {
			lista = lista.concat([" "]);
		}

		if (options.no_zero == true) {
			lista.splice(lista.indexOf("0"), 1);
		}
		if (options.custom instanceof Array) {
			lista = lista.concat(options.custom);
		} else if (typeof options.custom == "string" || options.custom instanceof String) {
			lista = lista.concat(options.custom.split(" "));
		}
	}

	if (lista.length == 0) {
		throw "The list is empty!";
	}


	var n = 0;
	var strong = "";
	while (n < number) {
		n++;
		strong = strong+"*";
	}

	let string = strong.replace(new RegExp("\\*", "g"), function() {
		return randomItemFromArray(lista);
	});
	return string;
};

//console.log(idGenFromTemplate("*****************************************", {empty_space: true}));
//console.log(idGenFromNumber(10, {custom: ["a", "b", "c", "d", "f", "g"]}));
