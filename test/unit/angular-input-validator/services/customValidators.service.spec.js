'use strict';

describe('', function() {

	var nmCustomValidators;

	beforeEach(module('angularInputValidator.services.customValidators'));

	beforeEach(inject(function(_nmCustomValidators_){
		nmCustomValidators = _nmCustomValidators_;
	}));

	it('should exist', function() {
		expect(nmCustomValidators).to.be.ok;
	});

	describe('getRule', function(){

		describe('required', function(){
			
			it('should get default rule', function(){
				expect(nmCustomValidators.getRule('required')).to.be.a('object');
			});

			/*it('required rule should validate that the field is not empty', function(){
				Math.floor((Math.random() * 95) + 32); // Generate an ascii printable value.
				expect(true).to.be.a('boolean');
			});*/

			describe('should return validation false', function(){
				it('if tested string is empty', function(){
					expect(nmCustomValidators.getRule('required').fn('')).to.be.false;
				});
			});

			describe('should return validation true', function(){
				it('if tested string is not empty', function(){
					expect(nmCustomValidators.getRule('required').fn('a')).to.be.true;
					expect(nmCustomValidators.getRule('required').fn('0')).to.be.true;
					expect(nmCustomValidators.getRule('required').fn('+')).to.be.true;
					expect(nmCustomValidators.getRule('required').fn(' ')).to.be.true;
					expect(nmCustomValidators.getRule('required').fn('/')).to.be.true;
					expect(nmCustomValidators.getRule('required').fn('-')).to.be.true;
					expect(nmCustomValidators.getRule('required').fn('something')).to.be.true;
				});
			});

		});

	});

});
