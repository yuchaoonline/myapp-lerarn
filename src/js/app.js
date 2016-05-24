angular.module('MyApp', [
  'ngRoute',
  'mobile-angular-ui',
  'MyApp.controllers.Main',
    'chart.js'
])
    .config(['ChartJsProvider', function (ChartJsProvider) {
        // Configure all charts
        ChartJsProvider.setOptions({
            colours: ['#FF5252', '#FF8A80'],
            responsive: false
        });
        // Configure all line charts
        ChartJsProvider.setOptions('Line', {
            datasetFill: false
        });
    }])
.config(function($routeProvider,$httpProvider) {
        $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});

        $routeProvider.when('/scrollable', {templateUrl:'scrollable.html',  reloadOnSearch: false});
        $routeProvider.when('/bootstraptable', {templateUrl:'bootstraptable.html',  reloadOnSearch: false});
        $routeProvider.when('/chart', {templateUrl:'chart.html',  reloadOnSearch: false});
        $routeProvider.when('/contract', {templateUrl:'contract.html',  reloadOnSearch: false});
        $routeProvider.when('/invalid', {templateUrl:'invalid.html',  reloadOnSearch: false});
        $routeProvider.when('/ng-switch', {templateUrl:'ng-switch.html',  reloadOnSearch: false});

      //解决ng post数据格式
      $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
      $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
      //Override $http service's default transformRequest
      $httpProvider.defaults.transformRequest = [function(data) {
        /**
         * The workhorse; converts an object to x-www-form-urlencoded serialization.
         * @param {Object} obj
         * @return {String}
         */
        var param = function(obj) {
          var query = '';
          var name, value, fullSubName, subName, subValue, innerObj, i;

          for (name in obj) {
            value = obj[name];

            if (value instanceof Array) {
              for (i = 0; i < value.length; ++i) {
                subValue = value[i];
                fullSubName = name + '[' + i + ']';
                innerObj = {};
                innerObj[fullSubName] = subValue;
                query += param(innerObj) + '&';
              }
            } else if (value instanceof Object) {
              for (subName in value) {
                subValue = value[subName];
                fullSubName = name + '[' + subName + ']';
                innerObj = {};
                innerObj[fullSubName] = subValue;
                query += param(innerObj) + '&';
              }
            } else if (value !== undefined && value !== null) {
              query += encodeURIComponent(name) + '='
                  + encodeURIComponent(value) + '&';
            }
          }

          return query.length ? query.substr(0, query.length - 1) : query;
        };

        return angular.isObject(data) && String(data) !== '[object File]'
            ? param(data)
            : data;
      }];

});