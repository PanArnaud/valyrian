var Valyrian = (function() {

	/**
	 * Fonctions d'initialisation
	 * - Disponibles uniquement dans ce fichier -
	 */

	 /**
	  * Fonction retournant les syllabes permettant la génération
	  * des noms.
	  * @return {Array} Tableau de syllabes.
	  */
	function getSyllables() {
		return ["kha" ,  "da" , "vos" , "vys" , "gen", "dry" ,
				"cres", "sen" , "vic" , "rion", "lo" , "my"  ,
				"bran", "i"   , "lyn" , "ty"  , "win", "rick",
				"way" , "mar" , "jo"  , "jen" , "don", "ja"  ,
				"mie" , "yo"  , "ren" , "lor" , "as" , "hal" ,
				"ne"  , "sam" , "well", "rob" , "ert", "edd" ,
				"py"  , "cell", "qy"  , "burn", "ren", "ly"  ,
				"ae"  , "gon" , "rion", "ri"  , "bar", "dy"  ,
				"ris" , "tan" , "ke"  , "van" , "tu" , "a"   ,
				"e"   , "u"   , "dae" , "rys" , "ry" , "rie" ,
				"tar" , "mis" , "dei" , "san" , "eo" , "eos"
		];
	}

	/**
	 * fonction utilitaire permettant d'obtenir un nombre entier
	 * aléatoire compris entre les bornes min et max.
	 * @param  {Number} min
	 * @param  {Number} max
	 * @return {Number}     Nombre aléatoire compris entre min et max.
	 */
	function random(min, max){
		return Math.floor(Math.random() * (max - min)) + min;
	}


	/**
	 * Constructeur de l'objet permettant de générer des noms
	 */
	function Valyrian(sylMin, sylMax) {
		this.sylMin = sylMin || 2; // Nombre minimum de syllabes des noms
		this.sylMax = sylMax || 3; // Nombre maximum de syllabes des noms

		// On récupère le dictionnaire des syllabes permettant
		// de générer les noms
		this.firstNameSyllables = getSyllables();

		// Cache permettant de garder les noms générés inchangés tant
		// qu'il n'y a pas eu de nouvel appel aux méthodes de génération de
		// noms.
		this.names;
	}

	/**
	 * Méthode renvoyant un nom généré aléatoirement
	 * @param  {Number} sylMin Nombre minimum de syllabes du nom
	 * @param  {Number} sylMax Nombre maximum de syllabes du nom
	 * @return {String}        Nom généré
	 */
	Valyrian.prototype.createNewName = function() {
		var firstName = "";
		var numberOfSyllablesInFirstName = random(this.sylMin, this.sylMax + 1);

		for (var i = 0; i < numberOfSyllablesInFirstName; i++) {
			firstName += this.firstNameSyllables[random(0, this.firstNameSyllables.length)];
		}

		var firstNameLetter = firstName.substring(0, 1);
		return firstNameLetter.toUpperCase() + firstName.substr(1);
	};

	/**
	 * Méthode renvoyant le nom généré en fonction des paramètres passés.
	 * @param  {Number} nb     Nombre de noms à renvoyer
	 * @param  {Number} sylMin Nombre de syllabes minimum que le nom doit contenir
	 * @param  {Number} sylMax Nombre de syllabes maximum que le nom doit contenir
	 * @return {Array}         Tableau contenant l'ensemble des noms générés.
	 */
	Valyrian.prototype.generateNames = function(nb) {
		var names = [],
			nb    = nb || 10;

		for (var i = 0; i < nb; ++i) {
			names.push(this.createNewName(this.sylMin, this.sylMax));
		}

		this.names = names;

		return this.names;
	};

	Valyrian.prototype.appendTo = function(node) {
		if (node) {
			var listNames = document.createElement('ul');
			for (var i = 0; i < this.names.length; ++i) {
				var li = document.createElement('li');
				li.textContent = this.names[i];
				listNames.appendChild(li);
			}
			node.appendChild(listNames);
		} else {
			throw new Error("Impossible d'ajouter les noms à un noeud non défini");
		}
	};

	// On retourne la classe nouvellement créée.
	return Valyrian;
})();