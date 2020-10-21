angular.module('myApp', ['ngAnimate']).controller('userCtrl', function($scope) {
    $scope.fName = '';
    $scope.lName = '';
    $scope.passw1 = '';
    $scope.passw2 = '';
    $scope.users = [
    {id:1, fName:'Hege', lName:"Pege", skills:"C"},
    {id:2, fName:'Kim',  lName:"Pim", skills:"CPP" },
    {id:3, fName:'Sal',  lName:"Smith", skills:"CSS"}
    ];
    $scope.edit = true;
    $scope.error = false;
    $scope.incomplete = false;
    $scope.hideform = true;
    $scope.editUser = function(id) {
      $scope.hideform = false;
      if (id == 'new') {
        $scope.edit = true;
        $scope.incomplete = true;
        $scope.fName = '';
        $scope.lName = '';
        $scope.editButton = true;
        } else {
        $scope.edit = false;
        $scope.fName = $scope.users[id-1].fName;
        $scope.lName = $scope.users[id-1].lName;
        $scope.editButton = false;
      }
    };
    $scope.removeItem = function (id) { 
        $scope.users.splice(id, 1);
    }
    
    $scope.$watch('passw1',function() {$scope.test();});
    $scope.$watch('passw2',function() {$scope.test();});
    $scope.$watch('fName', function() {$scope.test();});
    $scope.$watch('lName', function() {$scope.test();});
    $scope.$watch('addSkill', function() {$scope.test();})
    
    $scope.test = function() {
      if ($scope.passw1 !== $scope.passw2) {
        $scope.error = true;
        } else {
        $scope.error = false;
      }
      $scope.incomplete = false;
      if ($scope.edit && (!$scope.fName.length ||
      !$scope.lName.length ||
      !$scope.passw1.length || !$scope.passw2.length) || !$scope.addSkill.length) {
         $scope.incomplete = true;
      }
    };

    // add multiple skills

    // $scope.skills = ["HTML", "CSS", "Bootstrap", "JS"];
    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addSkill) {return;}
        if ($scope.skills.indexOf($scope.addSkill) == -1) {
            $scope.skills.push($scope.addSkill);
        } else {
            $scope.errortext = "The item is already in your shopping list.";
        }
    }

    $scope.removeItem = function (x) {
        $scope.errortext = "";    
        $scope.skills.splice(x, 1);
    }
    
    });