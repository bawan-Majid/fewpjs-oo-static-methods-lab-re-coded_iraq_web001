class Formatter {
  //add static methods here
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  
  static sanitize(str){
    return str.replace(/[^A-Za-z0-9-' ]+/g, '')
  }
  
  static titleize(str){
    let word = str.split(' ');
    let except = ['this','these','those','the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from','in','on']
    
    word[0] = this.capitalize(word[0]);
    for (let w = 1; w < word.length; w++) {
      if(!except.find(nonWord => nonWord == word[i])){
         word[w] = this.capitalize(word[w]);
      }
    }
    
    return words.join(' ');
}
}