exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null,arr)
  },

  speak: function(fn, obj) {
    return fn.call(obj)
  },

  functionFunction: function(str) {
    return function(nextArg) {
      return str + ', ' + nextArg;
    };
  },

  makeClosures: function(arr, fn) {
    var functionArr = [];

    var applyFunction = function(val) {
      return function() { return fn(val); };
    };

    for (var i = 0; i < arr.length; i++) {
      functionArr.push(applyFunction(arr[i]));
    }

    return functionArr;
  },

  partial: function(fn, str1, str2) {
    return function(userInput){
      return fn(str1,str2,userInput)
    }
  },

  useArguments: function() {
    var sum = 0;

    for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }

    return sum;
  },

  callIt: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function() {
        var moreArgs = args.concat(Array.prototype.slice.call(arguments));
        return fn.apply(null, moreArgs);
    };
  },

  curryIt: function(fn) {
    function applyArguments(_fn, args) {
      return _fn.apply(null, args);
    }
  }
};
