const food = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('My favorite food is nagiri sushi!');
		reject("Uh.... What's food again?");
	}, 2000);
});

food
	.then((message) => {
		console.log('accepted');
		console.log(message);
	})
	.catch((err) => {
		console.log('rejected');
		console.log(err);
	});

// resolve food here:

// **Challenge 1** Resolve your promise with the name of your favorite food.
// Do this by calling the `resolve` with an argument.

// **Challenge 2** Resolve the `food` promise with that `.then()` syntax
// and print your favorite food to the console.
