"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parser0001_1 = require("./parser0001");
var tests = [
    ["well at least there is this", ["well", "at", "least", "there", "is", "this"]],
    ["this  is [ so ] simple", ["this", "is", "[", "so", "]", "simple"]],
    ["# this caviare is not organically sourced!\n    non-comment-word-here\n    # a first-class comment (get it)", ["# this caviare is not organically sourced!", "non-comment-word-here", "# a first-class comment (get it)"]],
];
// ugh not another cheap object comparison
var objEq = function (obj1, obj2) { return JSON.stringify(obj1) === JSON.stringify(obj2); };
var all_good = true; // everything is going to be all right, in purr we trust.
console.log("parse tests for purr! " + tests.length + " tests started.\n");
tests.map(function (test) {
    if (!objEq(parser0001_1.parse(test[0]), test[1])) {
        all_good = false;
        console.log("A real purr kill! \"" + test[0] + "\" \n        failed our parse test, got this instead " + JSON.stringify(parser0001_1.parse(test[0])) + "\n        \n");
    }
});
if (all_good) {
    console.log("----Purrrrrrrrfect----- all purr parse tests passed.\n");
}
//# sourceMappingURL=parser0001.test.js.map