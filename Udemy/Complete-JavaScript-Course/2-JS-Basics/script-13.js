
// Lecture: Iterative Statements


// For Loops

for(var i=0; i<10; i++){
    console.log(i);
}

var names=['Tom', 'Sue', 'Jill', 'Phil'];
for(var i=0; i<names.length; i++){
    console.log(names[i]);
}

for(var i=names.length-1; i>=0; i--){
    console.log(names[i]);    
}


// While Loops

var i=0;
while(i < names.length){
    console.log(names[i]);        
    i++;
}

for(var i=1; i<=5; i++){
    if(i===3){
        break;
    }
}

for(var i=1; i<=5; i++){
    if(i===3){
        continue;
    }
    console.log(i);    
}
