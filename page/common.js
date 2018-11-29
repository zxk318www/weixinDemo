function sayHello(name){
    console.log(`hello,${name}!`);
}

function sayGoodBye(name){
    console.log(`goodbye,${name}`);
}

module.exports.sayHello = sayHello
exports.sayGoodBye = sayGoodBye