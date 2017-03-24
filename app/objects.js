exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
  	obj.sayIt = fn
    // console.log(obj.sayIt)
    return obj.sayIt()
  },

  alterObjects: function(constructor, greeting) {
  	constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
  	var newArray = []

  	for(var prop in obj){
  		if(obj.hasOwnProperty(prop)){
	      newArray.push(prop + ': ' + obj[prop])
	    }
    }
    return newArray
  }
};
