
// Lecture: Objects

var who={
    firstName: 'Elon',
    lastName: 'Musk',
    yearOfBirth: 1978,
    job: 'Founder',
    isMarried: false
};

console.log(who.lastName); 
console.log(who['lastName']); 

var xyz='job'

console.log(who[xyz]);

who.firstName='Jamel';
who['job']='System Designer';

console.log(who);

var me=new Object();
me.firstName='Scott';
me.lastName='Wxrks';
me.yearOfBirth=1990;
me['job']='Engineer';
me['isMarried']=false;

console.log(me);