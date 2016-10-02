var app = require('../js/main.js');





describe("power()", function() {
  xit("power (+)", function() {
  	var result;
  	result = app.power(2,3);
    expect(result).toEqual(8);
  });

  it("power (-)", function() {
  	var result;
  	result = app.power(2,-3);
    expect(result).toEqual(0.125);
  });

  it("power (0)", function() {
  	var result;
  	result = app.power(1,0);
    expect(result).toEqual(1);
  });
});
