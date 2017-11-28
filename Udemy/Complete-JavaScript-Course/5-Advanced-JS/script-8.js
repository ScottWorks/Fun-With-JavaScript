
//  Bind, call and apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.'); 
        }
        
        else if (style === 'friendly') {
                console.log('Hey! Whats\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + 'and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }    
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'morning'); //call method allows us to set 'this' variable in johns presnetation function to object 'emily'.

// john.presentation.apply()

var johnFriendly = john.presentation.bind(john, 'friendly'); //sets the first arguement to 'friendly' whenever presentation function is called

johnFriendly('morning');
johnFriendly('night');


var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('afternoon');


// Example

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i=0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes; 
}

function calculateAge(el) {
    return 2017-el;
}

function isFullAge(limit, el) {
    return el >= limit;
}


var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);