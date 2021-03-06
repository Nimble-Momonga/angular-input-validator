'use strict';

describe('', function() {

	var module;
	var dependencies;
	dependencies = [];

	var hasModule = function(module) {
		return dependencies.indexOf(module) >= 0;
	};

	beforeEach(function() {

		// Get module
		module = angular.module('angularInputValidator');
		dependencies = module.requires;
	});

	it('should load config module', function() {
		expect(hasModule('angularInputValidator.config')).to.be.ok;
	});

	it('should load providers module', function() {
		expect(hasModule('angularInputValidator.providers')).to.be.ok;
	});

	it('should load directives module', function() {
		expect(hasModule('angularInputValidator.directives')).to.be.ok;
	});

	it('should load services module', function() {
		expect(hasModule('angularInputValidator.services')).to.be.ok;
	});

});
