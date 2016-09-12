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

});
