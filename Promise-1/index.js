// Make a new Promise
const p = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('>>> Success! <<<');
		reject('--- Oops ---');
		reject('--- Oops ---2');
	}, 2000);
});

p.then((message) => {
	console.log('Promise resolved successfully! 😀');
	console.log(message);
}).catch((err) => {
	console.log('Promise rejected 😞');
	console.log(err);
});

// **Problems to solve**

// **1)** What happens when a promise is rejected? Test it by calling `reject()`

//	// When calling reject here, it will print 'Promise rejected 😞' followed by "--- Oops ---"

// **2)** What happens when you call both `resolve` and `reject`? Test this.

//	// When you call both, the first thing there is(reject), will print and skip over resolve since the promise is complete.

// **3)** Does the order matter you call resolve and reject matter? Test this.

//	// Yes, whichever happens first.

// **4)** What happens if you call `resolve` or `reject` more than once? Test this out for yourself.

//	// It will still remain whichever comes first.
