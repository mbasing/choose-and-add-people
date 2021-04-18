let app = angular.module("TossThemApp", []);
app.controller("MovePeopleController",function($scope){

    $scope.collection = [];
    $scope.addThisOne = function(z){
        $scope.collection.push(z);
    }

    $scope.Leaders = [
        {"pic":"assets/1.png", "name":"Alexander"},
        {"pic":"assets/2.png", "name":"Amanitore"},
        {"pic":"assets/3.png", "name":"Barbarossa"},
        {"pic":"assets/4.png", "name":"Gandhi"},
        {"pic":"assets/5.png", "name":"Cleoptra"},
        {"pic":"assets/6.png", "name":"Cyrus"},
        {"pic":"assets/7.png", "name":"Dido"},
        {"pic":"assets/8.png", "name":"Chandragupta"},
        {"pic":"assets/9.png", "name":"Gilgamesh"},
    ];  
}); 

