(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('angularPasswordValidator.config', [])
      .value('angularPasswordValidator.config', {
          debug: true
      });

  // Modules
  angular.module('angularPasswordValidator.directives', []);
  angular.module('angularPasswordValidator.filters', []);
  angular.module('angularPasswordValidator.services', []);
  angular.module('angularPasswordValidator',
      [
          'angularPasswordValidator.config',
          'angularPasswordValidator.directives',
          'angularPasswordValidator.filters',
          'angularPasswordValidator.services',
          'ngResource',
          'ngSanitize'
      ]);

})(angular);
