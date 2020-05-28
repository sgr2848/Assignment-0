function titleCaseEdit(title) {
  array_title = title.split(" ");
  return_string = [] 
  for (i = 0; i < array_title.length; i++){
    current_string = array_title[i].charAt(0).toUpperCase() + array_title[i].slice(1);
    return_string.push(current_string);
  }
  return return_string.join( " ");
}

// Do not edit this line;
module.exports = titleCaseEdit;