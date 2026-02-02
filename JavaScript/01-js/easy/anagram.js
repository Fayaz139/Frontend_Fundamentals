function isAnagram(str1, str2) {
  
  function checkStr(str) {
    return str.replace(/\s/g, '').toUpperCase().split('').sort().join('');
  }

  return checkStr(str1) === checkStr(str2);
}