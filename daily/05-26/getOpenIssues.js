function getOpenIssues(issues, prs) {
  const prsLength = 4;
  const prsSet = new Set(prs);
  
  const fixed = issues.filter((num) => {    
    const currentLength = (Math.log10(num) | 0) + 1;
    
    for (let targetLength = currentLength; targetLength <= prsLength; targetLength++) {
      let rotateTimes = targetLength;
      let aux = num;
      
      while (rotateTimes > 0) {
        aux = rotateNumberWithLength(aux, targetLength);

        if (aux === num) {
          rotateTimes--;
          continue; 
        }

        if (prsSet.has(aux)) {
          return true;
        }
        
        rotateTimes--;
      }
    }
    return false;
  });
  
  const setFixed = new Set(fixed);
  return issues.filter((num) => !setFixed.has(num));
}

function rotateNumberWithLength(n, length) {
  const multi = Math.pow(10, length - 1);
  
  const lastDigit = n % 10;
  const rest = (n / 10) | 0;
  
  return (multi * lastDigit) + rest;
}

getOpenIssues([123, 345, 16], [345, 231])
// return: [345, 16]
