function disemvowel(str) {
  let string_to_array = str.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let vowel_less;
  for (let i=0; i<=string_to_array.length - 1; i++){
    for (let j=0; j<=vowels.length; j++){
        if(string_to_array[i] === vowels[j]){
            delete string_to_array[i];    
        }
    }
  }
  let filtered = string_to_array.filter(function(string_to_array){
      return string_to_array != null;
  })
  let array_to_string = filtered.toString();
  for(let k=0;k<=array_to_string.length - 1; k++){
    if(array_to_string[k] = ','){
        array_to_string = array_to_string.replace(',', '');
        array_to_string = array_to_string.replace('\n', '\\n');
    }
  }
    return array_to_string;
}