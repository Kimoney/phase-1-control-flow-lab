function scuberGreetingForFeet(howFar){
  // Write your code here!
  if (howFar <= 400){
    return 'This one is on me!'
  }
  else if (howFar > 400 && howFar <= 2500){
    return 'I will gladly take your thirty bucks.'
  }
  else {
    return 'No can do.'
  }
}

function ternaryCheckCity(whichCity){
  // Write your code here!
  return whichCity === 'NYC' ? 'Ok, sounds good.' : 'No go.';

}

function switchOnCharmFromTip(tips){
  // Write your code here!
  switch(tips){
    case 'generous':
      return 'Thank you so much.';
      break
    case 'not as generous':
      return 'Thank you.';
    case 'thanks for everything':
      return 'Bye.'
  }
}