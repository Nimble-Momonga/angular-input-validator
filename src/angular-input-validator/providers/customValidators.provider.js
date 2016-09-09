'use strict';

angular.module('angularInputValidator.providers.customValidators', [])
	.provider('nmCustomValidators', function(){
		var rules = {};

		var getRule = function(ruleName){
			return rules[ruleName];
		};

		var createRule = function(ruleName, ruleFn){
			rules[ruleName] = {
				name: ruleName,
				fn: ruleFn
			};
		};

		var createRegexFn = function(regexString){
			return function(value){
				var regex = new RegExp(regexString);
				return regex.test(value);
			};
		};

		var createRegexRule = function(ruleName, regexString){
			createRule(ruleName, createRegexFn(regexString));
		};


		return {
			$get: function(){
				return {
					createRegexRule: createRegexRule,
					getRule: getRule
				}
			}
		}
	});