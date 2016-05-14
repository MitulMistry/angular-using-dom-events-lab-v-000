function Counter() {
	return {
		template: [
			'<div>',
				'<h3>Counter</h3>',
				'<div>Click anywhere to increment the counter!</div>',
				'<div>Current count: {{ countCtrl.count }}</div>',
			'</div>'
		].join(''),
		controller: function ($scope) {
			this.count = 0;
		},
		controllerAs: 'countCtrl',
		require: 'counter',
		link: function(scope, element, attrs, ctrl){
			element.on('click', function(){
				ctrl.count++;
				scope.$apply();
			});

			scope.$on('$destroy', function(){
				element.off();
			});
		}
	};
}

angular
	.module('app')
	.directive('counter', Counter);
