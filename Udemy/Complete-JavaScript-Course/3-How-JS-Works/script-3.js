// Lecture: 'This' Keyword

// console.log(this);

// calculateAge(1986)

// function calculateAge(year){
//     console.log(2017-year);
//     console.log(this);
// }

var john={
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this);
        console.log(2016-this.yearOfBirth);

        // function innerFunc(){
        //     console.log(this);
        // }
        // innerFunc();
    }
}

john.calculateAge()

var mike={
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calculateAge=john.calculateAge;
mike.calculateAge();