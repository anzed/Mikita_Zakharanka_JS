function Person (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

var arr = [],
    min = arr[0];

arr.push(new Person('Gosho', 'Petrov', 32));
arr.push(new Person('Bay', 'Ivan', 81));

function ageComparison() {
    var i = 0;

    for (i; i < arr.length - 1; i++) {
        if (arr[i].age < arr[i+1].age) {
            min = arr[i];
        }
    }

    return min;
}

ageComparison();
console.log(min.firstName + ' ' + min.lastName);
