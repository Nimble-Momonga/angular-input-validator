(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('angularInputValidator.config', [])
      .value('angularInputValidator.config', {
          debug: true
      });

  // Modules
  angular.module('angularInputValidator.directives', []);
  angular.module('angularInputValidator.filters', []);
  angular.module('angularInputValidator.services', []);
  angular.module('angularInputValidator',
      [
          'angularInputValidator.config',
          'angularInputValidator.directives',
          'angularInputValidator.filters',
          'angularInputValidator.services',
          'ngResource',
          'ngSanitize'
      ]);

})(angular);
