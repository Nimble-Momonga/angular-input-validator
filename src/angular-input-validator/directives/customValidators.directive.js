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
						validations.forEach(function(validation){
							validation.value = ctrl.$isEmpty(modelValue) || validation.validator.fn(modelValue);
						});
						var fails = validations.reduce(function(memo, validation){
							return (validation.value) ? memo : memo + 1;
						}, 0);
						validations.forEach(function(validation){
							ctrl.$setValidity(validation.validator.name, (fails <= allowedFails) || validation.value);
						});
				},
					setValidators = function(newValidators){
						if(newValidators){
							validations = [];
							newValidators.forEach(function(validatorName){
								validations.push({validator: nmCustomValidators.getRule(validatorName)});
							});
						}
						runValidators(ctrl.$modelValue);
				};

				scope.$watch('nmCustomValidators', setValidators);
				scope.$watch(function(){return ctrl.$modelValue;}, runValidators);
				attrs.$observe('nmAllowFails', function(newAllowedFails){
					allowedFails = (newAllowedFails) ? parseInt(newAllowedFails) : 0;
				});
			}
		};
	});