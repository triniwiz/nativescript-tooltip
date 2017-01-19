var Tooltip = require("nativescript-tooltip").Tooltip;
var tooltip = new Tooltip();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("functionname", function() {
  it("exists", function() {
    expect(tooltip.functionname).toBeDefined();
  });

  it("returns a promise", function() {
    expect(tooltip.functionname()).toEqual(jasmine.any(Promise));
  });
});