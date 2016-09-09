(function(angular) {

	// Create all modules and define dependencies to make sure they exist
	// and are loaded in the correct order to satisfy dependency injection
	// before all nested files are concatenated by Gulp

	// Config
	angular.module('angularInputValidator.config', [])
		.value('angularInputValidator.config', {
			debug: true
		});

	// Modules
	angular.module('angularInputValidator.directives', [
		'angularInputValidator.directives.customValidators'
	]);
	angular.module('angularInputValidator.providers', [
		'angularInputValidator.providers.customValidators',
		'angularInputValidator.providers.defaultValidators'
	]);
	angular.module('angularInputValidator', [
		'angularInputValidator.config',
		'angularInputValidator.directives',
		'angularInputValidator.providers',
		'ngResource',
		'ngSanitize'
	]);

})(angular);
