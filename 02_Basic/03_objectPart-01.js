// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

/* ----------SYMBOLS REPRESENT */
//SYMBOL ME DATA SHOW KARNE KE LIYE (SQUARE [])KA USE KARTE HAI.


const JsUser = {
    name: "ALPHA",
    "full name": "ALPHA ",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "ALPHA@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "ALPHA@chatgpt.com"
// Object.freeze(JsUser)

/* ----------OBJECT.FREEZ MEANS YOU DON'T CHANGE  */

JsUser.email = "ALPHA@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");

    //"HELLOW JS USER IS A GREETING TYPE TEXT"
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

/* --------------THIS IS USED TO SHOW ALL THE PROPERT OF  UNDER VARIABLE . */
//THIS IS USED TO SHOW SAME OBJECT REFERNECE DATA IN OBJECT.
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





