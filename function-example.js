/* function functionName (peramitar){
    //function body
    //return
}

var returnValue = functionName(peramiterValue); */

function myAvaregeNumber (assinmentMarks1, assinmentMarks2, assinmentMarks3){
    const marksTotal = assinmentMarks1 + assinmentMarks2 + assinmentMarks3;
    const avarege = marksTotal / 3;
    return avarege;
}
 const marks1 = 60;
 const marks2 = 58;
 const marks3 = 59;
 
 const myAvarege = myAvaregeNumber( marks1, marks2, marks3);
console.log('dekho ami paisi avarege e : ', myAvarege);