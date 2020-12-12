'use strict'; 
(function() {

  // display('Hello World');

    /*
    let person = {
        firstName: 'Jim',
        lastName: 'Cooper',
        //    isAdult: function(){
        // return person.age >= 18;
        // }
    };

    person.age = 29;

    // function

    person.isAdult = function(){
        return this.age >= 18;
    }

    display(person.isAdult());
*/

//     function registerUser(firstName,lastName){
//         let person = {
//             firstName,
//             lastName
//         };
//         display(person);
//     }
//
//     registerUser('Jim','Cooper');
//
//

    /*
    let person = {
        firstName:'Jim',
        lastName:'Cooper',
        age:17,
        isAdult(){
            return this.age >= 18;
        }
    }

    display(person.isAdult());
    display(person);
    display(Object.keys(person));

    for(let propertyName in person){
        display(propertyName);
    }

*/
    /*

    let person1 = {
        firstName:'Jim',
        lastName:'Cooper',
        age:29,
        isAdult:function(){
            return this.age > 18;
        }
    }

    let person2 = {};

    Object.assign(person2,person1)
*/

    // let person1 = {
    //     firstName:'Jim',
    //     lastName:'Cooper',
    //     age:29,
    //     isAdult:function(){
    //         return this.age > 18;
    //     }
    // };
    //
    // let healthStats = {
    //     height:68,
    //     weight:150
    // };
    //
    //  let test = Object.assign({},person1,healthStats);
    //
    // display(person1);
    // display(test);
    // display(person1);

    /*
    function Person(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age ;
        this.isAdult = function(){
            return this.age > 21;
        }
    }

    let jim =new Person('Jim','Cooper',29);
    let sofia = new Person('Sofia','Cooper',17);

    display(jim.isAdult());
    display(sofia.isAdult());

     */

    // class Person {
    //     constructor(firstName,lastName,age) {
    //         this.firstName = firstName;
    //         this.lastName = lastName;
    //         this.age = age;
    //     }
    //
    //     get fullName(){
    //         return `${this.firstName} ${this.lastName}`;
    //     }
    //
    //     set fullName(fullName){
    //         var nameParts = fullName.split(' ');
    //         this.firstName = nameParts[0];
    //         this.lastName = nameParts[1];
    //     }
    //
    //     isAdult(){
    //         return this.age >= 18;
    //     }
    // }
    //
    // class Student extends Person {
    //     constructor(firstName,lastName,age) {
    //         super(firstName,lastName,age);
    //         this._enrolledCourses = [];
    //     }
    //
    //     static fromPerson(person){
    //         return new Student(person.firstName,person.lastName,person.age);
    //     }
    //
    //     enroll(courseId){
    //         this._enrolledCourses.push(courseId);
    //     }
    //
    //     getCourses(){
    //         return `${this.fullName}\'s enrolled courses are: ${this._enrolledCourses.join(", ")}`;
    //     }
    //
    // }
    //
    // let jim = new Person('Jim','Cooper',29);
    //
    // let jimStudent = Student.fromPerson(jim);
    //
    // display(jimStudent);



    // let jim = new Person('Jim','Cooper','29');

    // display(jim.fullName);

    // display(jim.isAdult());
    //
    // let jim = new Student('Jim','Cooper',29);
    //
    // jim.fullName = 'Fred Jones';
    //
    // jim.enroll("CS101");
    //
    // display(jim.getCourses());

    // function checkPasswordComplexity(password){
    //     let regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$','gi');
    //     let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/gi;
    //
    //     return regex.test(password);
    // }
    //
    // display(checkPasswordComplexity('Stronger1'));
    //

    function findAlerts(logData){
        let regex = /ERROR.*?:/g;

        let result = regex.exec(logData);
        while(result !== null){
            display(result[1]);
            display(result[2]);
            result = regex.exec(logData);
        }

    }

    let logData = 'INFO:ok:ERROR:Something broke;'
    findAlerts(logData);



})();

