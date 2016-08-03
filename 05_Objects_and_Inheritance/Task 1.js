var Person = (function () {
    function Person (firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        var _firstname,
            _lastname,
            _age;
    };

    Object.defineProperty(Person.prototype, 'firstname', {
        get: function() {
            return this._firstname;
        },
        set: function(value) {
            if (/^[A-Za-z]+$/.test(value) === false) throw new Error ('First name should contain only Latin letters');
            else if (typeof(value) !== 'string') throw new Error ('First name should be a String');
            else if (value.length < 3 || value.length > 20) throw new Error ('First name length should be between 3 and 20 letters');
            else this._firstname = value;
        }
    });

    Object.defineProperty(Person.prototype, 'lastname', {
        get: function() {
            return this._lastname;
        },
        set: function(value) {
            if (/^[A-Za-z]+$/.test(value) === false) throw new Error ('Last name should contain only Latin letters');
            else if (typeof(value) !== 'string') throw new Error ('Last name should be a String');
            else if (value.length < 3 || value.length > 20) throw new Error ('Last name length should be between 3 and 20 letters');
            else this._lastname = value;
        }
    });

    Object.defineProperty(Person.prototype, 'age', {
        get: function() {
            return this._age;
        },
        set: function(value) {
            var parseValue = parseInt(value, 10);
            if (parseValue < 0 || parseValue > 150) throw new Error ('Age should be in range between 0 and 150');
            else this._age = parseValue;
        }
    });

    Object.defineProperty(Person.prototype, 'fullname', {
        get: function() {
            return this.firstname + ' ' + this.lastname;
        },
        set: function(value) {
            var parseValue = value.split(' ');
            this.firstname = parseValue[0];
            this.lastname = parseValue[1];
        }
    });

    Person.prototype.introduce = function() {
        return 'Hello! My name is ' + this.fullname + ' and I am ' + this.age + '-years-old!';
    };

    return Person;

}());

var ivan = new Person('Ivan', 'Ivanov', '20');
console.log(ivan.fullname);
console.log(ivan.introduce());