const person = {
    name: "Dharamveer",

    greet() {
        console.log(`Hi, I am ${this.name}`);
    }
};

person.greet();
const greetFunction = person.greet;
greetFunction();

const boundGreet = person.greet.bind({ name: "John" });
boundGreet();

/*
.call(thisArg, arg1, arg2, …)
Immediately invokes the function, setting this to thisArg, and passing subsequent arguments one by one.
*/

function introduce(greeting, punctuation) {
    console.log(`${greeting}, I am ${this.name}${punctuation}`);
}

const alice = { name: 'Alice' };
introduce.call(alice, 'Hello', '!');

/*  
.apply(thisArg, [argsArray])
Like.call(), but takes arguments as an array(or array - like).
*/

const bob = { name: 'Bob' };
const args = ['Hey there', '...?'];

introduce.apply(bob, args);

/*
.bind(thisArg, arg1, arg2, …)
Doesn’t invoke immediately.Returns a new function permanently bound so that when called later, this is thisArg and leading arguments are pre - filled.
*/

const carol = { name: 'Carol' };

// Create a bound function where `this` is always carol
const carolIntro = introduce.bind(carol, 'Hiya');

carolIntro('!!!');  