'use strict';

angular.module('angularInputValidator.directives.customValidators', [])
	.directive('nmCustomValidators', function(nmCustomValidators){
		return {
			require: '?ngModel',
			restrict: 'A',
			scope: {
				nmCustomValidators: '=',
			},
			link: function(scope, elm, attrs, ctrl){
				if(!ctrl) return;
				var validations = [],
					allowedFails = 0,
					runValidators = function(modelValue){
						var fails = _.reduce(validations, function(memo, validation){
							validation.value = ctrl.$isEmpty(modelValue) || validation.validator.fn(modelValue);
							return memo + !validation.value;
						}, 0);
						_.each(validations, function(validation){
							ctrl.$setValidity(validation.validator.name, (fails <= allowedFails) || validation.value);
						});
					},
					validatorsChange = function(newValidators, oldValidators){
						setValidators(newValidators);
						removeValidations(_.difference(oldValidators, newValidators));
						runValidators(ctrl.$modelValue);
					},
					removeValidations = function(oldValidators){
						_.each(oldValidators, function(validatorName){
							ctrl.$setValidity(validatorName, true);
						});
					},
					setValidators = function(newValidators){
						validations = _.map(newValidators, function(validatorName){
							return {validator: nmCustomValidators.getRule(validatorName)};
						});
					};

				scope.$watch('nmCustomValidators', validatorsChange);
				scope.$watch(function(){return ctrl.$modelValue;}, runValidators);
				attrs.$observe('nmAllowFails', function(newAllowedFails){
					allowedFails = (newAllowedFails) ? parseInt(newAllowedFails) : 0;
				});
			}
		};
	});