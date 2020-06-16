class Formatter {
  //add static methods here
  static capitalize(str){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }
  
  static titleize(string){
    let word = string.split(' ');
    let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    word[0] = this.capitalize(word[0]);
    for (let i = 1; i < words.length; i++) {
      if(!except.find(e => e == word[i])){
         word[i] = this.capitalize(word[i]);
      }
    }
    
    return words.join(' ');
}
}