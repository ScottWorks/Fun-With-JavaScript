
// Lecture: Arrays

var names=['Lil Uzi Vert', 'The Weeknd', 'Future'];
var numRecords=new Array(3, 5, 8);

console.log(names[0]);

names[1]= '2 Chainz';

console.log(names);

var ScottWxrks=['Scott', 'Wxrks', 1990, 'Engineer', true];
ScottWxrks.push('McLaren');
ScottWxrks.unshift('Mr.')
ScottWxrks.pop();
ScottWxrks.shift();

console.log(ScottWxrks);

if(ScottWxrks.indexOf('Teacher')==-1){
    console.log('ScottWxrks is NOT an Teacher.')
}

// alert(ScottWxrks.indexOf('Wxrks'));