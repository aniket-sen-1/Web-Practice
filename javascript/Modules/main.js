// import { user as printUserName, message, test } from "./library.js";
// or to get with default
// import fixname, { user as printUserName, message, test } from "./library.js";
// or
import fixname, { user as printUserName, message, test } from "./library.js";

console.log(message);
console.log(printUserName("aniket"));

let a = new test();
console.log(message);
fixname();
//OR
// import * as yahoo from "./library.js";
// console.log(yahoo.message);
// console.log(yahoo.user("aniket"));

// let a = new yahoo.test();
// console.log(yahoo.message);
