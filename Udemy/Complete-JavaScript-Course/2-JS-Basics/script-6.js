
// Lecture: Branching Statements
var name='Morty';
var numGlubGlarbs=21;
var wubbalubbadubdub='yes';

if(wubbalubbadubdub==='no'){
    console.log(name+' meh, nothing to see here...');
}

else{
    console.log(name+' is in great pain and needs help!')
}


wubbalubbadubdub=false;

if(wubbalubbadubdub){
    console.log('send help!')
}

else{
    console.log('meh...')
}


// type coercion
if(23="23"){
    console.log('String is coerced into num data typed.')
}