function scuberGreetingForFeet(distanceInFeet){

  
  if(distanceInFeet==199){
  
   return 'This one is on me!'
  
}else if(distanceInFeet>2000 && distanceInFeet<=2500){
  return 'I will gladly take your thirty bucks.';
}else{
  return 'No can do.';
}




}

function ternaryCheckCity(newCity){
  // Write your code here!
  if(newCity==='NYC'){
    return 'Ok, sounds good.'

  }else{
    return 'No go.'
  }
  
}
 

function switchOnCharmFromTip(newTip){
  // Write your code here!
  switch(newTip){
    case 'generous':
      return 'Thank you so much.'
  
  case 'not as generous':
    return 'Thank you.'

  default:
      return 'Bye.'

  }

}