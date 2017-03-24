exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	var newString = '';
  	var stringArr = str.split('');

  	stringArr.forEach(function(elem){
  		if(newString.length<amount){
  			newString+=elem
  		}
  		else{
  			if(elem!==newString[newString.length-amount]){
  				newString+=elem
  			}
  		}
  	})
  	return newString
  },

  wordWrap: function(str, cols) {
  	var newString = ''
  	var stringArr = str.split(' ');
  	var count = 0
  	stringArr.forEach(function(string,i){
  		count+=string.length
  		//First word Logic
  		if(i===0){
  			//1 letter word logic
  			if(string.length===1){
  				return newString+=string+' '
  				count+=1
  			}
  			newString+=string
  			count=0
  			return
  		}
  		//Word greater than cols logic
  		if(count>=cols){
  			newString+='\n'+string
  			count=0
  		}
  		//Word less than cols logic
  		else{
  			//1 letter word logic
  			if(string.length===1){
  				if(count===cols-1){
  					return newString+=string
  				}
  				newString+=string+' '
  				count+=1
  			}
  			else{
  				newString+='\n'+string
  			}
  			
  		}
  
  		
  	})
  	return newString
  },

  reverseString: function(str) {
  	var newString = ''
  	var strArr = str.split('')

  	for (var i = strArr.length-1; i >= 0; i--){
  		newString+=strArr[i]
  	}

  	return newString

  }
};
