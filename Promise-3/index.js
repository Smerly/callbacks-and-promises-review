function greet(name) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof name === 'string') {
				resolve('hello ' + name);
			} else {
				reject('Name must be a string!');
			}
		}, 1000);
	});
}

function uppercaser(str) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (typeof str === 'string') {
				resolve(str.toUpperCase());
			} else {
				reject('Argument to uppercaser must be string');
			}
		}, 1000);
	});
}

// Above we have two functions that returns promises.
// These are greet and uppercaser.
// Notice how we chain these promises together. The
// Result of one is then passed to the next.

greet('Your name') // Returns a Promise
	.then((str) => uppercaser(str)) // Upper case the results from greet() Returns a Promise
	.then((str) => console.log(str)) // Log the results of uppercaser()
	.catch((err) => console.log(err)); // Catches an error

// Challenges: get greet() to fail by passing a non string value
// What happens?

//  // It will return a console log of the error followed with 'Name must be a string!'

// Challenge: get uppercaser() to fail by passing a non string value
// What happens?

//  // It will return a console log of str follow

// Challenge: Notice there is only a single .catch() at the end.
// Explain the behavior?

// Two reasons I can see; the first is that if greet passes, that means that the str that will go into uppercaser will be guarranteed to be a string. The second is that I think that .catch might occur for uppercaser too.
