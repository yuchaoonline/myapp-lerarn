
var test1= 'test1';

myApp.controller('contractController', function($scope){
    var scrollItems = [];
    for (var i=1; i<=100; i++) {
        scrollItems.push('Item ' + i);
    }
    $scope.scrollItems = scrollItems;

    $scope.welcome = "hello";

    $scope.colorChange =function(color){
       console.log(color);
    }
});


myApp.controller('validateCtrl', function($scope) {
    $scope.user = 'John Doe';
    $scope.email = 'john.doe@gmail.com';
    $scope.ctrlNumber = 0;
    $scope.date =new Date(2013, 9, 22);

});


myApp.controller('ExampleController', function($scope) {
    $scope.items = ['settings', 'home', 'other'];
    $scope.selection = $scope.items[0];
});