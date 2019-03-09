// Rest parameterss
//function printCards(num1, ...nums) {
//    console.log('num1', num1);
//    nums.forEach(num => console.log(num));
//}
//printCards(1, 2, 3);

// Destructuring Arrays
//let personsId = [1, 2, 3, 4];
//let [person1, person2, ...persons] = personsId;
//console.log('person1', person1); 
//console.log('person2', person2); 
//console.log('person3', persons); 

// Destructuring Arrays

//let person = {id: 10, name:'Axity'};
//let {id, name} = person;
//console.log('id', id);
//console.log('name', name);

// Spread Syntax
//function procesPersons(person1, person2, person3) {
//    console.log(person1, person2, person3);    
//}

//let personsId = 'abc';
//procesPersons(...personsId);

//console.log(typeof(1));
//console.log(typeof(true));
//console.log(typeof('Hello'));
//console.log(typeof( function(){} ));
//console.log(typeof({}));
//console.log(typeof(null)); //null object refer to C,C++
//console.log(typeof(undefined));
//console.log(typeof(NaN));

/*let id = 10;
console.log(typeof(id));
console.log(typeof(id.toString()));

console.log(Number.parseInt('55'));
console.log(Number.parseInt('55ABC'));*/

//Loops
//for (let i = 0; i < 12; i++) {
//    if(i ===  2) {
//        continue;
//    }
//    console.log(i);
//}

//console.log(1 == 1);
//console.log(1 == '1');
//console.log(1 === '1');
//console.log(1 != '1');
//console.log(1 !== '1');
//let year = 2010;
//console.log(year);
//year >>=2;
//console.log(year);
//year <<=2;
//console.log(year);

//Function Scope
/*function findPerson() {
    message = 'Finding';
    let findFn = function searchKey() {
        message = 'Override';
    };
    findFn();
}

findPerson();
console.log(message);*/

//IIFE Pattern
/*let app = (function() {
    console.log('function');
    function hola() {
        console.log('Hola');
    }
    hola();
})();*/

//closure
/*function sumaIva(change) {
    return function(amount) {
        return change * amount;
    };
}

let iva = sumaIva(.16);
console.log(iva(20));
console.log(iva(30));
console.log(iva(50));*/

//THIS
/*let o = {
    personId: 123,
    getId: function () {
        return this.personId;
    }
};

console.log(o.getId());*/

// call()
/*let o = {
    personId: 123,
    otro: 1444,
    getId: function () {
        return this.personId + this.otro;
    },
    getOtro: function () {
        return this.personId + this.otro;
    }
};

let newPerson = {
    personId: 456,
    otro: 10
};

console.log(o.getId.call(newPerson));
console.log(o.getId());*/

//Apply
/*let o = {
    personId: 10,
    otro: 5,
    prueba:20,

    getId: function (tittle, action) {
        return  `${tittle} - ${this.personId} - ${action}`;
    },
};

let newPerson = {
    personId: 10,
    otro: 20
};

console.log(o.getId.apply(newPerson,['Person', 'Oops']));*/
//Bind
/*let o = {
    personId: 10,
    otro: 5,
    prueba:20,

    getId: function (fn1, fn2) {
        return  `${fn1} ${++this.personId} - ${fn2}`;
    },
};

let newPerson = {
    personId: 30,
    otro: 20
};

let newFn = o.getId.bind(newPerson,'hello', 'Oops');
console.log(newFn());*/

//Arrow functions
/*let getId1 = () => 123;
let getId2 = function() {return 123;};
let getId3 = (prefix) => {
    return prefix + 123;
};
console.log(getId1());
console.log(getId2());
console.log(getId3(12));*/

// Prototype
/*function person(id){
    //console.log(this);
    this.personId = id;
    //this.register = function(){
    //    console.log(`Register ${this.personId}`);
    //};
};

person.prototype.register = function() {
    console.log(`Register ${this.personId}`);
};

let person1 = new person(123);
person1.register();*/

//JSON
/*let person = [{
    id: 123,
    age: 12
},
{
    id: 123,
    age: 12
}];

console.log(JSON.stringify(person));

let obj = `[{"id":123,"age":12},
            {"id":123,"age":12}]`;

console.log(JSON.parse(obj));*/

// Array
//reduce
/*let result = [1,2,3,4,5,6].reduce((before,after) => before + after);
console.log(result);
*/

//forEach
let persons = [
    { personId: 123, age: 10, name: 'Javier'},
    { personId: 321, age: 20, name: 'Rodriguez'},
    { personId: 231, age: 30, name: 'Olvera'}
];

// persons.forEach(p => console.log(p));
//let result = persons.filter(p => p.age > 10);
//console.log(result);

//let result = persons.map(p => { p.age = p.age * 10; return p;});
//console.log(result);

//let result = persons.find(p => p.age >= 10);
//console.log(result);

//let result = persons.every(p => p.age >= 10);

/*let result = persons
                .filter(p => p.age > 10)
                .map(p => { p.age = p.age * 10; return p;})
                .find(p => p.age >= 10);
console.log(result);
console.log(persons);*/

// ECMA ES6

// class Person {
//     constructor(id){
//         this.id = id;
//     }
//     identify(suffix){
//         return `person ${suffix}`;
//     }
// }
// let person = new Person(123);

// console.log(person);
// let result = person.identify('Hola');
// console.log(result);

//  class Engine {
//     constructor(){
//         this.type = 'Hibrid';
//     }
//     start(){
//         return `Starting: ${this.type}`;
//     }
// }

// class Car extends Engine {
//     constructor(){
//         super();
//     }
//     start() {
//         //return `Car to Starting: ${this.type}`;
//         return super.start();
//     }
// }

// let car = new Car();
// console.log(car.start()); 

// try {
//     // let person = newPerson;
//     throw new Error('Trone :(');
// } catch (error) {
//     console.error(`Error ${error}`);
// } finally {
//     console.log('Finally');
// }

let promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        try {
            resolve('Todo Ok :D');
        } catch (error) {
            reject('El(la) no te ama :(');
        }
    }, 5 * 1000);
});

promise.then(success => console.log(`ok ${success}`), 
            error => console.log(`Error ${error}`));