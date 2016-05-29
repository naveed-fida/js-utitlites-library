function _(element) {
  u = {
    first: function() {
      return element[0];
    },

    last: function() {
      return element[element.length -1]; 
    },

    without: function() {
      var args = Array.from(arguments);
      var newArray = [];
      for ( var i = 0; i < element.length; i++) {
        if (!args.includes(element[i])) newArray.push(element[i]);
      }
      return newArray;
    },

    

  };

  return u;
}