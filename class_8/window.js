// when create global execution context / global scope
// then create global window object(in browser)
// this is window object
// this is pointed execution context
var a = 10;
function b() {
    var x = 5;
}

// console.log(window.a); // window is not define
console.log(global); // undefine
/**
 * <ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 27.237696999683976,
      nodeStart: 0.1475990004837513,
      v8Start: 0.8701789993792772,
      bootstrapComplete: 21.870379000902176,
      environment: 11.791121000424027,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1663056210328.401
  },
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
}
 */

// in global level this point window object
/**
 * The Window Object
 * The window object is supported by all browsers. It represents the browser's window.
 * All global JavaScript objects, functions, and variables automatically become members of the window object.
 * Global variables are properties of the window object.
 * Global functions are methods of the window object.
 */