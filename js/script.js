/**
 * @author : courcecube
 */
function testingVar() {
    // var int = 10;

    var string = 'test';
    var boolean = true;
    var object = {
        'firstName': 'test'
    };
    var users = [
        {
            "name": {
                "firstName": "abc",
                "lastName": "xyz"
            },
            "age": 10,
            "username": "abcxyz",
            "password": null,
            "loggedIn": true,
            "address": [
                {
                    "type": "home",
                    "description": "bangalore"
                },
                {
                    "type": "office",
                    "description": "bangalore east"
                }
            ]
        },
        {
            "name": {
                "firstName": "abc",
                "lastName": "xyz"
            },
            "age": 10,
            "username": "abcxyz",
            "password": "abc",
            "loggedIn": true
        }
    ]

    if (boolean) {
        console.log(users);
    }

    for (let i = 0; i < users.length; i++) {
        console.log("counter - " + i);
    }

    for (const iterator of users) {
        console.log(iterator);
        for (const key in iterator) {
            console.log(key);
        }
    }

    try {
        users.forEach((value, i) => {
            console.log(value);
            console.log(i);
        })  
        throw 'test error';
    } catch (error) {
        console.log(error);
    }

    var x = 5;
    var y = x + 2;

    console.log(y);
}

testingVar();

var x = myFunction(4,3);
console.log(x);
function myFunction(a, b){
    return a*b;
}

function goBack(){
    window.history.back();
}

function Person(firstName, lastName, age, eyecolor){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyecolor = eyecolor;
}

Person.prototype.nationality = 'Indian';

Person.prototype.name = function(){
    return this.firstName + " " + this.lastName;
};

var myFather = new Person('jhon','doe', 50, 'blue');
var myMother = new Person('Sally','Rally', 48, 'green');

console.log(myFather);
console.log(myMother);





