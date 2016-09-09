'use strict';

angular.module('angularInputValidator.providers.customValidators', [])
	.provider('nmCustomValidators', function(){
		var rules = {};

		var regexFn = function(ruleRegex){
			return function(value){
				var regex = new RegExp(ruleRegex);
				return regex.test(value);
			};
		};

		var newRegexRule = function(ruleName, ruleRegex){
			rules[ruleName] = {name: ruleName, fn: regexFn(ruleRegex)};
		};

		var getRule = function(ruleName){
			return rules[ruleName];
		}

		return {
			$get: function(){
				return {
					newRegexRule: newRegexRule,
					getRule: getRule
				}
			}
		}
	});