module.exports = function check(str, bracketsConfig) {
  let check = str;
  let index;
  for (let l = 0; l < str.length / 2; l++) {

    for (let i = 0; i < bracketsConfig.length; i++) {
      if (check.indexOf(bracketsConfig[i].join("")) != -1) {
        index = check.indexOf(bracketsConfig[i].join("")); 
        check = check.split("");
        check.splice(index, 2);
        check = check.join("");
      }
    }
  }
  
  if (check.length > 0) return false;
  else return true;
}
