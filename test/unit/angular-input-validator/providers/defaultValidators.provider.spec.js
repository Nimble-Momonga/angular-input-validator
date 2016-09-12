'use strict';

describe('', function() {

	var nmDefaultValidators;

	beforeEach(module('angularInputValidator.providers.defaultValidators'));

	beforeEach(inject(function(_nmDefaultValidators_){
		nmDefaultValidators = _nmDefaultValidators_;
	}));

	it('should exist', function() {
		expect(nmDefaultValidators).to.be.ok;
	});

	it('should have all the default rules', function(){
		var rules = nmDefaultValidators.getDefaultRules();
		expect(rules.required.name).to.be.string('required');
		expect(rules.required.fn).to.be.a('function');
		expect(rules.natural.name).to.be.string('natural');
		expect(rules.natural.fn).to.be.a('function');
		expect(rules.integer.name).to.be.string('integer');
		expect(rules.integer.fn).to.be.a('function');
		expect(rules.real.name).to.be.string('real');
		expect(rules.real.fn).to.be.a('function');
		expect(rules.lowercaseOnly.name).to.be.string('lowercaseOnly');
		expect(rules.lowercaseOnly.fn).to.be.a('function');
		expect(rules.uppercaseOnly.name).to.be.string('uppercaseOnly');
		expect(rules.uppercaseOnly.fn).to.be.a('function');
		expect(rules.lettersOnly.name).to.be.string('lettersOnly');
		expect(rules.lettersOnly.fn).to.be.a('function');
		expect(rules.hasDigits.name).to.be.string('hasDigits');
		expect(rules.hasDigits.fn).to.be.a('function');
		expect(rules.hasLowercase.name).to.be.string('hasLowercase');
		expect(rules.hasLowercase.fn).to.be.a('function');
		expect(rules.hasUppercase.name).to.be.string('hasUppercase');
		expect(rules.hasUppercase.fn).to.be.a('function');
		expect(rules.hasLetters.name).to.be.string('hasLetters');
		expect(rules.hasLetters.fn).to.be.a('function');
	});

});
