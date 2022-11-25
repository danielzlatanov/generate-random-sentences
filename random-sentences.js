function generateRandomSentence() {
	const readline = require('readline').createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	//The sentence needs -> [Who from where], [Action], and [Detail] to be created.

	let names = [
		'Legion',
		'Onslaught',
		'Franklin Richards',
		'Jean Grey',
		'Apocalypse',
		'Professor X',
		'Quentin Quire',
		'Magneto',
		'Rogue',
		'Iceman',
	];
	let places = [
		'The Savage Land',
		'Asteroid M',
		'Bermuda Island Base',
		"N'Garai Dimension",
		'Krakoa, The Living Island',
		'Muir Island',
	];
	let verbs = [
		'eats',
		'holds',
		'sees',
		'plays with',
		'brings',
		'approaches',
		'takes',
		'suspects',
		'kicks',
		'hesitates',
		'prevents',
	];
	let nouns = [
		'stones',
		'cakes',
		'apples',
		'laptops',
		'bikes',
		'blood',
		'cigarettes',
		'wood',
		'chests',
		'recipes',
	];
	let adverbs = [
		'slowly',
		'diligently',
		'warmly',
		'sadly',
		'rapidly',
		'woefully',
		'physically',
		'tremendously',
		'arrogantly',
		'kindheartedly',
		'scarily',
	];
	let details = [
		'near the river',
		'at home',
		'in the park',
		'in the city',
		'in the jungle',
		'on the bench',
		'at the beach',
	];

	function getRandomWord(array) {
		let word = array[Math.floor(Math.random() * array.length)];
		return word;
	}

	console.log(`Below is your randomly generated sentence:`);

	let recursiveAsyncReadLine = function () {
		let randomName = getRandomWord(names);
		let randomPlace = getRandomWord(places);
		let randomVerb = getRandomWord(verbs);
		let randomNoun = getRandomWord(nouns);
		let randomAdverb = getRandomWord(adverbs);
		let randomDetail = getRandomWord(details);

		let who = `${randomName} from ${randomPlace}`;
		let action = `${randomAdverb} ${randomVerb} ${randomNoun}`;

		let sentence = `${who} ${action} ${randomDetail}`;
		console.log(`${sentence}`);

		readline.question('Press [Enter] to generate a new one:', (input) => {
			recursiveAsyncReadLine();
		});
	};
	recursiveAsyncReadLine();
}
generateRandomSentence();
