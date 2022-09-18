/**
* What is scope?
* Scope can be defined as the space in which variables and statements are accessible. It makes it possible to have variables with the same name without colliding with one another and prevents outer scopes from having access to inner scopes.
* In Javascript we have three types of scope: global scope, function/local scope and block scope. Let's learn what those are:
*/

/**
 * Global scope
 * The default scope
 * There is only one global scope in the program
 * It is the top scope that englobes the entire code
 * The declarations inside this space can be accessed anywhere in the code
 */

const age = 28;
function getAge() {
    return age;
}
console.log(getAge()); // 28
/**
 * The function getAge is able to reference the age that is outside the function but located in the global scope.
 */