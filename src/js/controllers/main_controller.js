var test2 = 'tank';

var myApp = angular.module('MyApp.controllers.Main', []);




myApp.controller('MainController', function($scope){

//alert(test2);
    var scrollItems = [];

    for (var i=1; i<=100; i++) {
        scrollItems.push('Item ' + i);
    }

    $scope.scrollItems = scrollItems;
});




myApp.directive('xiaoquItem', function () {
    var bgColors =[ "#f66467", "#f67749", "#57b5e0", "#4fdac3", "#fac954", "#92ce68", "#d27d15", "#7aa129"];

    return {
        restrict: 'AE',
        scope:false,
        link: function (scope, elem, attrs) {
            var elemColor =bgColors[scope.$index % bgColors.length];
            elem.css({'height': elem[0].clientWidth + "px",'background':elemColor});



            elem.bind('click', function () {

                window.location.href="#/fangwulist?"+scope.item.fangjianshu;



                //   window.open(scope.item.url, "_blank");
            });
        }
    };
});
