'use strict';

angular.module('sentience-web', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/home',
    templateUrl: './views/home.html'
  });

  $urlRouterProvider.otherwise('/home');
});
'use strict';

angular.module('sentience-web').controller('mainCtrl', function ($scope) {

  $scope.test = 'test';
});
'use strict';

angular.module('sentience-web').service('mainService', function ($http) {});
//# sourceMappingURL=bundle.js.map
