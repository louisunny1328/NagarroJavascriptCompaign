/*const num = 6;
const result = (num % 2 != 0) ? "odd" : "even";
// display the result
console.log(`Number is ${result}.`);
*/

/*const div = document.createElement("div");
div.innerText = "Hello Inner";
div.textContent = "Hello Text Content"
const body = document.body;
body.append(div);

let undefineVariavble;
console.log(typeof undefineVariavble);

let nullVariavble = null;
console.log(typeof nullVariavble);
*/
//***********Function without parameter and return*************

/*function addtion() {

    sum = 10 + 20;
    console.log(sum);

}
addtion();

//Function with parameter and return type


function addtionParameter(a, b) {

    sum1 = a + b;
    console.log(sum1);

}
let summ = addtionParameter(20, 30);

*/


//****************************Objects in  JS with literal way*********
/*
var obj = {


    car_Model: "2022",
    car_Brand: "Honda",

    prize: function () {
        return ("Price is 2 lakh");
    }

};

console.log(obj, obj.prize());
*/
/*
//****************************Objects in  JS with object consrtuctor function*****
function cars(car_model, car_brand) {

    this.car_Model = car_model;
    this.car_Brand = car_brand;

    this.prize = function () {

        return ("Price is 2 lakh");
    }
}
var c1 = new cars(2012, "Hoonda");
var c2 = new cars(2023, "Maruti");

console.log(c1, c1.prize, c2, c2.prize);

*/

/*
var str = new String();
//str = "This is string object";
console.log(typeof str, " ");


var bool = new Boolean();
//str = "This is string object";
console.log(typeof bool);

*/

/*
//*************** Adding properties to object after object definition*****
function cars1(car_model, car_brand) {

    this.car_Model = car_model;
    this.car_Brand = car_brand;

    this.prize = function () {

        return ("Price is 2 lakh");
    }
}

var c1 = new cars1(2012, "Hoonda");
c1.Country = "India"
delete c1.car_Model;
console.log(c1);

*/

/*
//****************** Dot operator and this*********
class Person {
    constructor(name) {
        this.name = name;
    }

    printNameArrow() {

        setTimeout(() => {

            console.log('Arrow ' + this.name)
        }, 1000);
    }
    printNameNormal() {

        setTimeout(function () {

            console.log('Function ' + this.name)
        }, 1000);
    }

}

let person = new Person('Loui');

person.printNameArrow();
person.printNameNormal();
*/


//*******************Call Back*******************

/*
var members = ["John Doe", "Sam Smith", "Allie Cartel"];

function addNewMember(newUser, callback) {
    setTimeout(function () {
        members.push(newUser);
        console.log("Member Added");
        callback();
    }, 200);
}

function getAllMembers() {
    setTimeout(function () {
        console.log("Members are:");
        console.log(members);
    }, 100);
}

addNewMember("Alpha", getAllMembers);
*/
//**********Another example for callback*********** 
/*
function watchTutorialCallback(callback, errorCallback) {
    let userLeft = true
    let userWatchingCatMeme = false

    if (userLeft) {
        errorCallback({
            name: 'User Left',
            message: ':('
        })
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: 'User Watching Cat Meme',
            message: 'WebDevSimplified < Cat'
        })
    } else {
        callback('Thumbs up and Subscribe')
    }
}



watchTutorialCallback(message => {
    console.log(message)
}, error => {
    console.log(error.name + ' ' + error.message)

})
*/




//***********************Promises**********

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {

        let userLeft = true
        let userWatchingCatMeme = false;

        if (userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            })
        }

        else if (userWatchingCatMeme) {

            reject({
                name: 'User Watching Cat Meme',
                message: 'WebDevSimplified < Cat'
            })

        }
        else {
            resolve('Thumbs up and Subscribe')

        }
    })
}




watchTutorialPromise().then((message) => {
    console.log(message)
})
    .catch((error) => {
        console.log(error.name + ' ' + error.message)

    })