const user = {
    username: "alpha",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to world`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function coffee(){
//     let username = "alpha"
//     console.log(this.username);
// }

// coffee()

// const coffee = function () {
//     let username = "alpha"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "alpha"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "alpha"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()