
// Lecture: Objects

var who={
    firstName: 'Vaughn',
    lastName: 'Ferrel',
    yearOfBirth: 1978,
    job: 'Founder',
    isMarried: false,
    family: ['Owen', 'Sarah', 'Chris', 'Dave', 'Amy'],
    calculateAge: function(){
        return 2017-this.yearOfBirth; 
    }
};

console.log(who.family[1]);
// console.log(who.calculateAge(1990));
console.log(who.calculateAge());

var age=who.calculateAge();
who.age=age;

console.log(who);


var who2={
    firstName: 'Vaughn',
    lastName: 'Ferrel',
    yearOfBirth: 1966,
    job: 'Founder',
    isMarried: false,
    family: ['Owen', 'Sarah', 'Chris', 'Dave', 'Amy'],
    calculateAge: function(){
        this.age=2017-this.yearOfBirth;
    }
};

who2.calculateAge();
console.log(who2);

