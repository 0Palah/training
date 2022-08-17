function checkForSpam(message) {
  let result;
  // Change code below this line
  const normalizedMessage = message.toLowerCase();
  if (normalizedMessage.includes('spam')) { result = 'true';}
  else if (normalizedMessage.includes('sale')) {result = 'true';}
  else {result = 'false';}
  // Change code above this line
  return result;
}