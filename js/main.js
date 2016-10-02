var app = {
		power: function(base, exponent) {
		var result = 1;

		if (exponent>=0) {
			for (var count = 0; count < exponent; count++)
			result *= base;
			return result;
			}else {
				if(exponent<0){
				for (var count = 0; count > exponent; count--)
				result *= base;
				result=1/result;
				return result;
				}
			};

		}
	};

console.log(app.power(2,-5));


module.exports = app;

