/**
 * Variables
 * A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.

    To create a variable in JavaScript, use the var, let keyword.
 */

let user = 'John';
let age = 25;
let message = 'Hello';

/**
 * Variable naming
 * There are two limitations on variable names in JavaScript:
 * The name must contain only letters, digits, or the symbols $ and _.
 * The first character must not be a digit.
 * When the name contains multiple words, camelCase is commonly used. That is: words go one after another, each word except first starting with a capital letter: myVeryLongName.
 * What’s interesting – the dollar sign '$' and the underscore '_' can also be used in names. They are regular symbols, just like letters, without any special meaning.
 * These names are valid:
*/

let $ = 1; 
let _ = 2; 

// Case matters Variables named apple and APPLE are two different variables.
 
/**
 * Non-Latin letters are allowed, but not recommended
 * It is possible to use any language, including cyrillic letters or even hieroglyphs, like this:
 */
 let имя = '...';
 let 我 = '...';

 /**
  * There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords
  */

 // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var