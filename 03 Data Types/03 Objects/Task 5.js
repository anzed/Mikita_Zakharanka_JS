function Person (firstName, lastName, age, groupName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.groupName = groupName;
}

var people = [];

people.push(new Person('Gosho', 'Petrov', 32));
people.push(new Person('Bay', 'Ivan', 81));
people.push(new Person('Sidor', 'Sidorov', 14));

function getSortedArray (arr, group) {
    if (group == 'firstname') {
        people.sort (function (a, b) {
            if (a.firstName < b.firstName) return -1;
            else if (a.firstName > b.firstName) return 1;
            else return 0;
        });
    } else if (group == 'lastname') {
        people.sort (function (a, b) {
            if (a.lastName < b.lastName) return -1;
            else if (a.lastName > b.lastName) return 1;
            else return 0;
        });
    } else if (group == 'age') {
        people.sort (function (a, b) {
            return a.age - b.age;
        });
    } else {
        return 'Wrong value';
    }

    return arr;
}

console.log(getSortedArray(people, 'firstname'));
