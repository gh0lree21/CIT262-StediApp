import { sayHello } from "../utils/helloworld.js";

it ("Should say hello", ()=>{
    sayHello();
})

let aThing = sayHello();

console.assert(aThing == "hello", "sayHello() doesn't return 'hello'");