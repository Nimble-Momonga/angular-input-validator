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
			required: {
				name: 'required',
				fn: createRegexFn('^.+$')
			},
			natural: {
				name: 'natural',
				fn: createRegexFn('^[0-9]*$')
			},
			integer: {
				name: 'integer',
				fn: createRegexFn('^([-+][0-9])?[0-9]*$')
			},
			real: {
				name: 'real',
				fn: createRegexFn('^(([-+]?[0-9]*\.?[0-9]+)|([-+]?[0-9]+\.?[0-9]*)|())$')
			},
			lowercaseOnly: {
				name: 'lowercaseOnly',
				fn: createRegexFn('^[a-z]*$')
			},
			uppercaseOnly: {
				name: 'uppercaseOnly',
				fn: createRegexFn('^[A-Z]*$')
			},
			lettersOnly: {
				name: 'lettersOnly',
				fn: createRegexFn('^[a-zA-Z]*$')
			},
			hasDigits: {
				name: 'hasDigits',
				fn: createRegexFn('[0-9]+')
			},
			hasLowercase: {
				name: 'hasLowercase',
				fn: createRegexFn('[a-z]+')
			},
			hasUppercase: {
				name: 'hasUppercase',
				fn: createRegexFn('[A-Z]+')
			},
			hasLetters: {
				name: 'hasLetters',
				fn: createRegexFn('[a-zA-Z]+')
			}
			/*min,//numerico / length / fecha ??
			max,//numerico / length / fecha ??
			email,//something@something.something
			url,
			date,
			time,
			phone*/
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