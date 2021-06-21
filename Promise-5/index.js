function whatToEat(timeOfDay) {
	// Create a new promise and return it here
	return new Promise((resolve, reject) => {
		if (timeOfDay == 'breakfast') {
			resolve("Let's have some hash browns!");
		} else if (timeOfDay == 'lunch') {
			resolve("My favorite meal of the day! Let's go grab some nigiri sushi!");
		} else if (timeOfDay == 'dinner') {
			resolve(
				"Ah. the last meal of the day. Let's make it hearty with some tsukemen!"
			);
		}
		reject("I'm not hungry right now.");
	});
}

// Call yout function and resolve the promise here!
whatToEat('lunch')
	.then((message) => console.log(message))
	.catch((err) => console.log(err));

// If the `timeOfDay` is 'breakfast', 'lunch', or 'dinner'
// resolve the promise with your favorite food for that time.

// If the `timeOfDay` is anything else reject the promise with
// the 'message' I'm not hungry right now.
