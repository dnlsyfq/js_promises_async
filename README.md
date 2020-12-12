### Javascript Objects 

### Equality Operator 

* "42" == 42
* 0 == false
* null == undefined
* "" == 0
* [1,2] == "1,2"

### === vs Object.is()

```
NaN not equal to NaN      NaN equals NaN
+0 equals -0              +0 does not equals -0
```

```
Object.is(object_variable_one, object_variable_two)
```

* Object.assign()
copy class

```
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
```

merge class

```
    let person1 = {
        firstName:'Jim',
        lastName:'Cooper',
        age:29,
        isAdult:function(){
            return this.age > 18;
        }
    };

    let healthStats = {
        height:68,
        weight:150
    };

     let test = Object.assign({},person1,healthStats);

```

### constructor 

 ```
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

```

### Object Properties 

Object.defineProperty(person,'firstName',{writable:false})
Object.defineProperty(person,'firstName',{enumerable:false})
Object.defineProperty(person,'firstName',{configurable:false})

### Classes

```
    class Person {
        constructor(firstName,lastName,age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
    }

    let jim = new Person('Jim','Cooper','29');

    display(jim);
```

### getter , setter 

```
    class Person {
        constructor(firstName,lastName,age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }

        get fullName(){
            return `${this.firstName} ${this.lastName}`;
        }

        set fullName(fullName){
            var nameParts = fullName.split(' ');
            this.firstName = nameParts[0];
            this.lastName = nameParts[1];
        }
    }


    let jim = new Person('Jim','Cooper','29');

    jim.fullName = 'Fred Jones';

    display(jim.fullName);
```

### function in class 

```
  class Person {
        constructor(firstName,lastName,age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }

        get fullName(){
            return `${this.firstName} ${this.lastName}`;
        }

        set fullName(fullName){
            var nameParts = fullName.split(' ');
            this.firstName = nameParts[0];
            this.lastName = nameParts[1];
        }

        isAdult(){
            return this.age >= 18;
        }
    }


    let jim = new Person('Jim','Cooper','29');

    jim.fullName = 'Fred Jones';

    display(jim.fullName);

    display(jim.isAdult());
```
### Modifying Property 

Object.defineProperty(Person.prototype,'fullName',{enumerable:True});

### Inheritance in Class

```
class Person {
        constructor(firstName,lastName,age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }

        get fullName(){
            return `${this.firstName} ${this.lastName}`;
        }

        set fullName(fullName){
            var nameParts = fullName.split(' ');
            this.firstName = nameParts[0];
            this.lastName = nameParts[1];
        }

        isAdult(){
            return this.age >= 18;
        }
    }

    class Student extends Person {
        constructor(firstName,lastName,age) {
            super(firstName,lastName,age);
            this._enrolledCourses = [];
        }

        enroll(courseId){
            this._enrolledCourses.push(courseId);
        }

        getCourses(){
            return `${this.fullName}\'s enrolled courses are: ${this._enrolledCourses.join(", ")}`;
        }

    }

    let jim = new Student('Jim','Cooper',29);

    jim.fullName = 'Fred Jones';

    jim.enroll("CS101");

    display(jim.getCourses());

```

### Static Properties and 

```
    class Student extends Person {
        constructor(firstName,lastName,age) {
            super(firstName,lastName,age);
            this._enrolledCourses = [];
        }

        static fromPerson(person){
            return new Student(person.firstName,person.lastName,person.age);
        }

        enroll(courseId){
            this._enrolledCourses.push(courseId);
        }

        getCourses(){
            return `${this.fullName}\'s enrolled courses are: ${this._enrolledCourses.join(", ")}`;
        }

    }

    let jim = new Person('Jim','Cooper',29);

    let jimStudent = Student.fromPerson(jim);

    display(jimStudent);
```

### JS Built In Objects 

Math.PI
Math.max(1,2,2,3)
Math.round(float_Var)

Unix epoch time Jan 1970

    let date = new Date();
    let date = new Date(0); // milliseconds
    let date = new Date(2050,3,25);
    date.getFullYear()
    date.getMonth()
    date.toString();
    date.getUTCDate()
    
    ```
        function checkPasswordComplexity(password){
            let regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$','gi');
            let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/gi;
    
            return regex.test(password);
        }
    
        display(checkPasswordComplexity('Stronger1'));
    ```
    
    ```
        function findAlerts(logData){
            let regex = /ERROR:/;
            return regex.exec(logData);
    
        }
    
        let logData = 'INFO:ok:ERROR:Something broke;'
        let result = findAlerts(logData);
    
        display(result[0]);
        display(result.index);
        display(result.input);
    ```
    
    ```
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
    

    ```