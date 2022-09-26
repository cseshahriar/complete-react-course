// callback function
/**
 * In JavaScript, functions are objects. Can we pass objects to functions as parameters? Yes.
 */

function print(callback) {
    callback();
}
/**
 * a function that is passed to another function as a parameter is a callback function. But that’s not all.
 */

/**
 * Why do we need Callback Functions?
 * JavaScript runs code sequentially in top-down order. However, there are some cases that code runs (or must run) after something else happens and also not sequentially. This is called asynchronous programming.
 * 
 * Callbacks make sure that a function is not going to run before a task is completed but will run right after the task has completed. It helps us develop asynchronous JavaScript code and keeps us safe from problems and errors.
 * কলব্যাকগুলি নিশ্চিত করে যে কোনও কাজ শেষ হওয়ার আগে কোনও ফাংশন চালানো যাচ্ছে না তবে কাজটি সম্পূর্ণ হওয়ার পরেই চলবে। এটি আমাদেরকে অ্যাসিঙ্ক্রোনাস জাভাস্ক্রিপ্ট কোড ডেভেলপ করতে সাহায্য করে এবং সমস্যা ও ত্রুটি থেকে আমাদের নিরাপদ রাখে। 
 * In JavaScript, the way to create a callback function is to pass it as a parameter to another function, and then to call it back right after something has happened or some task is completed. Let’s see how…
*/

const message = function() {
    console.log('This message is shown after 3 seconds');
}
setTimeout(message, 3000); // message called after 3 seconds



// with Anonymous Function
setTimeout(function(){
    console.log('This message is shown after 3 seconds');
}, 3000);

// Callback as an Arrow Function
setTimeout(() => {
    console.log("This message is shown after 3 seconds");
}, 3000);

// A callback function can run after another function has finished