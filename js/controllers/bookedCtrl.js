angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv) {

  $scope.travelData = mainSrv.travelInfo;
})
