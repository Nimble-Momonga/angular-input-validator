'use strict';

angular.module('angularInputValidator.providers.defaultValidators', [])
	.provider('nmDefaultValidators', function(){
		var createRegexFn = function(regexString){
			return function(value){
				var regex = new RegExp(regexString);
				return regex.test(value);
			};
		};		

		var rules = {
			numbersOnly: {
				name: 'numbersOnly',
				fn: createRegexFn('^[0-9]*$')
			}
		};

		var getDefaultRules = function(){
			return rules;
		};

		return {
			$get: function(){
				return {
					getDefaultRules: getDefaultRules
				}
			}
		}
	});