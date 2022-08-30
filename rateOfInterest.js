function calculateInterest(prinsipul, time, rate){
    // let interest = prinsipul * ( 1 + time * rate );
  let a = rate/100;
  let b = time * a;
  let c = b +1;
  let interestWithPrincipal = c * prinsipul;
  console.log(interestWithPrincipal, 'total amount after the time');
    return interestWithPrincipal;
}
// calculateInterest(30000, 5, 5);


function calInterest(prinsipul, time, rateOfInterest){
    let a = rateOfInterest/100;
    interest = prinsipul * time * a;
    console.log(interest);
    return interest;
}
calInterest(3000, 5, 5);