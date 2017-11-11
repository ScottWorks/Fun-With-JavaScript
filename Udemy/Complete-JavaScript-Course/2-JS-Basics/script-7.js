
// Lecture: Boolean Logic and Switch Statements

var age=16; 

if(age<18){
    console.log('You cannot join the military yet because you are too young.')
}

else if(age>18 && age<45){
    console.log('Congratulations, you may join the military.')
}

else{
    console.log('You may not join the military because you exceeded the maximum age.')
}


var occupation='Engineer';
occupation=prompt('What does ScottWxrks do???');

switch(occupation){
    case 'Engineer': console.log('ScottWxrks designs cool stuff!');
    break;

    case 'Software Developer': console.log('ScottWxrks builds cool applications!');
    break;
    
    case 'Founder': console.log('ScottWxrks runs a cool startup!');
    break;

    default: console.log('ScottWxrks is a cool guy!');
}