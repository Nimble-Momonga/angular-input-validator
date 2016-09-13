'use strict';

describe('nmCustomValidators', function() {
	var nmCustomValidators,
		generateAscii = function(value){
			return String.fromCharCode(value);
		},
		randomFromIntervalOrdered = function(a, b){
			return Math.floor((Math.random() * (b-a+1)) + a);
		},
		randomFromInterval = function(a, b){
			return (a === b) ? a : (a < b) ? randomFromIntervalOrdered(a, b) : randomFromIntervalOrdered(b, a);
		},
		digitGenerator = function(){
			return generateAscii(randomFromInterval(48,57));
		},
		nonDigitGenerator = function(){
			return randomFromInterval(0,1) ? generateAscii(randomFromInterval(32,47)) : generateAscii(randomFromInterval(58,126));
		},
		charGenerator = function(){
			return generateAscii(randomFromInterval(32,126));
		},
		asteriskQuantifier = function(generator){
			return _.reduce(_.map(_.range(randomFromInterval(0,10)), function(){
				return generator();
			}), function(memo, char){
				return memo + char;
			}, '');
		},
		plusQuantifier = function(generator){
			return _.reduce(_.map(_.range(randomFromInterval(1,10)), function(){
				return generator();
			}), function(memo, char){
				return memo + char;
			}, '');
		},
		questionMarkQuantifier = function(generator){
			return randomFromInterval(0,1) ? generator() : '';
		},
		generateString = function(generator, quantifier){
			return quantifier(generator);
		};

	beforeEach(module('angularInputValidator.services.customValidators'));

	beforeEach(inject(function(_nmCustomValidators_){
		nmCustomValidators = _nmCustomValidators_;
	}));

	it('should exist', function() {
		expect(nmCustomValidators).to.be.ok;
	});

	describe('getRule', function(){

		var rule;

		describe('required', function(){

			beforeEach(function(){
				rule = nmCustomValidators.getRule('required');
			});
			
			it('should get default rule', function(){
				expect(rule).to.be.a('object');
			});

			it('should return validation ^.+$ false', function(){
				expect(rule.fn('')).to.be.false;
			});

			it('should return validation ^.+$ true', function(){
				_.each(_.range(100), function(){
					var testString = generateString(charGenerator, plusQuantifier);
					expect(rule.fn(testString)).to.be.true;
				});
			});

		});

		describe('natural', function(){

			beforeEach(function(){
				rule = nmCustomValidators.getRule('natural');
			});
			
			it('should get default rule', function(){
				expect(rule).to.be.a('object');
			});

			it('should return validation ^[0-9]*$ false', function(){
				_.each(_.range(100), function(){
					var testString = generateString(nonDigitGenerator, plusQuantifier);
					expect(rule.fn(testString)).to.be.false;
				});
			});

			it('should return validation ^[0-9]*$ true', function(){
				_.each(_.range(100), function(){
					var testString = generateString(digitGenerator, asteriskQuantifier);
					expect(rule.fn(testString)).to.be.true;
				});
			});

		});

		/*describe('integer', function(){

			beforeEach(function(){
				rule = nmCustomValidators.getRule('integer');
			});

			it('should get default rule', function(){
				expect(rule).to.be.a('object');
			});

			it('should return validation ^([-+][0-9])?[0-9]*$ false', function(){
				_.each(_.range(100), function(){
					var testString = generateString(nonDigitGenerator, plusQuantifier);
					expect(rule.fn(testString)).to.be.false;
				});
			});

			it('should return validation ^([-+][0-9])?[0-9]*$ true', function(){
				_.each(_.range(100), function(){
					var testString = generateString(digitGenerator, asteriskQuantifier);
					expect(rule.fn(testString)).to.be.true;
				});
			});

		});*/

	});

});
