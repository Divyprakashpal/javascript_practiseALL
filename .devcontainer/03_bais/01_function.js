
function sayMyName(){
    console.log("A");
    console.log("A");
    console.log("A");
    console.log("A");
    console.log("A");
    console.log("A");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}


/* ==========================NOTE=================================== */

//  function name (){}  =========  syntex of function.
// name is a place of reference and object is used to put data inside it.
// run command is given below

// =======name()==========

// phale reference name then parantheses() use karte hi function exsute ho jata hai .

// only reference tyoe karne se data print nahi hoga.

// ek bar return value pass karne ke bad koi aur function kam nahi karta hai. but return ke phale kar sakta hai.

// example == consol.log(a+b)
//            return(a+b)

// example to not work == return (a+b)
//                        consol.log (a+b)

// *** bina new variable decleare kare direct return ka use kar sakte hai.
// (!exclementry symbol are used to check the vale in true or false).
// == empty string is a false value.(let)


/* ============================================================================================================================== */
/* ==================+++++++++++++++++++++++++++++++==========================+++++++++++++++++++++++++++++++++++++++++++++++++++ */

// console.log(loginUserMessage("ALPHA"))

// console.log(loginUserMessage("ALPHA"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "ALPHA",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));