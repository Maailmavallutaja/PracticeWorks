let input = "Inimeste pohimotted kannavad edasi vaartusi";
let vowels = ['a', 'e', 'i', 'o', 'u', 'õ', 'ä', 'ö', 'ü'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++){
    if(input[i] === vowels[j]){
           if(input[i] === 'e'){
        resultArray.push('ee')
      } else if (input[i] === 'u') {
        resultArray.push('uu')
      }else{
         resultArray.push(input[i]);
      }
    }
    
  }
  
}
console.log (resultArray.join('').toUpperCase());