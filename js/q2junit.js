/*global QUnit, exports, require */
/*jshint strict:false,eqeqeq:false,smarttabs:true */
(function(global) {
	
	"use strict";
	
	//get QUnit
	var QUnit;
	if(!global.QUnit && typeof require !== "undefined") {
		QUnit = require("qunit");
	} else if(global.QUnit) {
		QUnit = global.QUnit;
	} else {
		throw new Error("You must first include QUnit to use Q2JUnit.");
	}
	
	//Convert args to qunit format when calling ok assertions
	var getOkArgs = function() {
				
		var args = arguments[0];
		var assertion = {};
		if(args.length < 2) {
			assertion.message = null;
			assertion.actual = args[0];
		} else {
			assertion.message = args[0];
			assertion.actual = args[1];			
		}
		return assertion;
	};

	//Convert args to qunit format when calling equal assertions
	var getEqualArgs = function() {
		
		var args = arguments[0];
		var assertion = {};
		if(args.length < 3) {
			//no message
			assertion.message = null;
			assertion.expected = args[0];
			assertion.actual = args[1];
			
		} else {
			//message
			assertion.message = args[0];
			assertion.expected = args[1];
			assertion.actual = args[2];
		}
		return assertion;
	};	
	
	// Convert args to qunit format when calling typeof assertions
	var getTypeArgs = function() {
		
		var args = arguments[0];
		var assertion = {};
		if(args.length < 3) {
			//no message
			assertion.message = null;
			assertion.type = args[0];
			assertion.actual = args[1];
			
		} else {
			//message
			assertion.message = args[0];
			assertion.type = args[1];
			assertion.actual = args[2];
		}
		return assertion;
	};	
	
	var Q2JUnit = {
	
		/**
		 * assertEquals([message], expected, actual)
		 */
		assertEquals: function() {
			var args = getEqualArgs(arguments);
			var condition = args.actual == args.expected;
			QUnit.push(condition, args.actual, args.expected, args.message || "Values should be equal");
		},
	
		/**
		 * assertNotEquals([message], expected, actual)
		 */
		assertNotEquals: function() {
			var args = getEqualArgs(arguments);
			var condition = args.actual != args.expected;
			QUnit.push(condition, args.actual, args.expected, args.message || "Values should not be equal");
		},
		
		/**
		 * assertArrayEquals([message], expected, actual)
		 */
		assertArrayEquals: function() {
			var args = getEqualArgs(arguments);
			var condition = QUnit.equiv(args.actual, args.expected);
			QUnit.push(condition, args.actual, args.expected, args.message || "Arrays should be equal");
		},

		/**
		 * assertArrayNotEquals([message], expected, actual)
		 */
		assertArrayNotEquals: function() {
			var args = getEqualArgs(arguments);
			var condition = !QUnit.equiv(args.actual, args.expected);
			QUnit.push(condition, args.actual, args.expected, args.message || "Arrays should not be equal");
		},
	
		/**
		 * assertSame([message], expected, actual)
		 */
		assertSame: function() {
			var args = getEqualArgs(arguments);
			var condition = args.actual === args.expected;
			QUnit.push(condition, args.actual, args.expected,  args.message || "Values should be the same");
		},
		
		/**
		 * assertNotSame([message], expected, actual)
		 */
		assertNotSame: function() {
			var args = getEqualArgs(arguments);
			var condition = args.actual !== args.expected;
			QUnit.push(condition, args.actual, args.expected, args.message || "Values should not be the same");
		},
	
		/**
		 * Asserts actual is truthy
		 * assertTrue([message], actual)
		 */
		assertTrue: function() {
			var args = getOkArgs(arguments);
			var condition = args.actual;
			QUnit.push(condition, args.actual, true, args.message || "Value should be true (truthy)");
		},
	
		/**
		 * assertFalse([message], actual)
		 */
		assertFalse: function() {
			var args = getOkArgs(arguments);
			var condition = !args.actual;
			QUnit.push(condition, args.actual, false, args.message || "Value should be false (falsy)");
		},
	
		/**
		 * assertTypeOf([message], type, actual)
		 */
		assertTypeOf: function() {
			var args = getTypeArgs(arguments);
			var condition = typeof args.actual === args.type;
			QUnit.push(condition, typeof args.actual, args.type, args.message || "Value should be of type " + args.type);
		},
		
		/**
		 * assertInstanceOf([message], type, actual)
		 */
		assertInstanceOf: function() {
			
			//TOOD: improve reporting for instanceof assertions
			var args = getTypeArgs(arguments);
			var condition = args.actual instanceof args.type;
			QUnit.push(condition, args.actual, args.type, args.message || "Value should be an instance of " + args.type);
		},
		
		/**
		 * assertInstanceOf([message], type, actual)
		 */
		assertNotInstanceOf: function() {
			
			//TOOD: improve reporting for instance of assertions
			var args = getTypeArgs(arguments);
			var condition = !(args.actual instanceof args.type);
			QUnit.push(condition, args.actual, args.type, args.message || "Value should not be an instance of " + args.type);
		},
		
		/**
		 * asserts true if the actual is type of number or an instance of Number
		 * assertNumber([message], actual)
		 */
		assertNumber: function() {
			var args = getOkArgs(arguments);
			var condition = typeof args.actual === "number" || args.actual instanceof Number;
			QUnit.push(condition, args.actual, "[number]", args.message || "Value should be a number");
		},
		
		/**
		 * asserts true if the actual is type of string or an instance of String
		 * assertString([message], actual)
		 */
		assertString: function() {
			var args = getOkArgs(arguments);
			var condition = typeof args.actual === "string" || args.actual instanceof String;
			QUnit.push(condition, args.actual, "[string]", args.message || "Value should be a string");
		},
		
		/**
		 * asserts true if the actual is type of boolean or an instance of Boolean
		 * assertBoolean([message], actual)
		 */
		assertBoolean: function() {
			var args = getOkArgs(arguments);
			var condition = typeof args.actual === "boolean" || args.actual instanceof Boolean;
			QUnit.push(condition, args.actual, "[boolean]", args.message || "Value should be a boolean");
		},
	
		/**
		 * assertFunction([message], actual)
		 */
		assertFunction: function() {
			var args = getOkArgs(arguments);
			var condition = args.actual instanceof Function;
			QUnit.push(condition, args.actual, "[Function]", args.message || "Value should be a function");
		},
		
		/**
		 * assertObject([message], actual)
		 */
		assertObject: function() {
			var args = getOkArgs(arguments);
			var condition = args.actual && (typeof args.actual === "object" || typeof args.actual === "function");
			QUnit.push(condition, args.actual, "[Object]", args.message || "Value should be an object");
		},
		
		/**
		 * assertArray([message], actual)
		 */
		assertArray: function() {
			var args = getOkArgs(arguments);
			var condition;
			if (Array.isArray){
				condition = Array.isArray(args.actual);
			} else {
				condition = Object.prototype.toString.call(args.actual) === "[object Array]";
			}
			QUnit.push(condition, args.actual, "[Array]", args.message || "Value should be an array");
		},
		
		/**
		 * assertNull([message], actual)
		 */
		assertNull: function() {
			var args = getOkArgs(arguments);
			var condition = args.actual === null;
			QUnit.push(condition, args.actual, "[null]", args.message || "Value should be null");
		},
		
		/**
		 * assertNotNull([message], actual)
		 */
		assertNotNull: function() {
			var args = getOkArgs(arguments);
			var condition = args.actual !== null;
			QUnit.push(condition, args.actual, "[not null]", args.message || "Value should not be null");
		},
	
		/**
		 * assertUndefined([message], actual)
		 */
		assertUndefined: function() {
			var args = getOkArgs(arguments);
			var condition = typeof args.actual === "undefined";
			QUnit.push(condition, args.actual, "[undefined]", args.message || "Value should be undefined");
		},
	
		/**
		 * assertNotUndefined([message], actual)
		 */
		assertNotUndefined: function() {
			var args = getOkArgs(arguments);
			var condition = typeof args.actual !== "undefined";
			QUnit.push(condition, args.actual, "[not undefined]", args.message || "Value should not be undefined");
		},
	
		/**
		 * assertNaN([message], actual)
		 */
		assertNaN: function() {
			var args = getOkArgs(arguments);
			var condition = isNaN(args.actual);
			QUnit.push(condition, args.actual, "[NaN]", args.message || "Value should be NaN");
		},
		
		/**
		 * assertNotNaN([message], actual)
		 */
		assertNotNaN: function() {
			var args = getOkArgs(arguments);
			var condition = !isNaN(args.actual);
			QUnit.push(condition, args.actual, "[not NaN]", args.message || "Value should not be NaN");
		},
		
		/**
		 * fail([message])
		 */
		fail: function() {
			QUnit.push(false === true, true, false,  arguments[0] || "Forced failure");
		}
	};
	
	//taken from QUnit
	var extend = function( a, b ) {
		for ( var prop in b ) {
			if ( b[ prop ] === undefined ) {
				delete a[ prop ];

			// Avoid "Member not found" error in IE8 caused by setting window.constructor
			} else if ( prop !== "constructor" || a !== window ) {
				a[ prop ] = b[ prop ];
			}
		}

		return a;
	};
		
	//expose
	if ( typeof exports !== "undefined" ) {
		extend(exports, Q2JUnit);
	} else {
		extend(global, Q2JUnit);
		global.Q2JUnit = Q2JUnit;
	}
	
}( (function() {return this;}.call()) ));
