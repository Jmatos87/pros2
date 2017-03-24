exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return (/\d/).test(str);
  },

  containsRepeatingLetter: function(str) {
    return (/([A-Za-z])\1/).test(str);
  },

  endsWithVowel: function(str) {
    var char = str.toLowerCase().split('')
         console.log(char)


        var last = char[char.length-1]

        console.log(last)

        if(last=== 'a'||last==='e'||last==='i'||last==='o'||last==='u'){
            return true
        }
        else return false
  },

  captureThreeNumbers: function(str) {
    var matches = (/\d{3}/).exec(str);
        return matches ? matches[0] : false;
  },

  matchesPattern: function(str) {
    return (/^\d{3}-\d{3}-\d{4}$/).test(str);
  },

  isUSD: function(str) {
    return (/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/).test(str);
  }
};
