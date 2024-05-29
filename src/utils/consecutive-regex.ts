const patternGenerator = () => {
    const patterns = [];
    for (let i = 0; i < 24; i++){
      const start = String.fromCharCode(97 + i)
      const middle = String.fromCharCode(98 + i)
      const end = String.fromCharCode(99 + i)
      patterns.push(`${start}${middle}${end}`)
    }
  
    return patterns;
}


export const consecutiveLettersRegex = () => {
    const patterns = patternGenerator();
    const regex = new RegExp(patterns.join('|'), 'i');
    return regex;
}