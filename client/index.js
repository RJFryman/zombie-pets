(function(){
  'use strict';

  angular.module('zombie-chow', [])
  .controller('MainController', ['$scope', function($scope){

    $scope.addPet = function(){
      var index = $scope.pet.weapon * 1;
      $scope.pet.weapon = $scope.weapons[index];
      $scope.pets.push($scope.pet);
      $scope.pet = {health:100};
    };

    $scope.addWeapon = function(){
      $scope.weapons.push($scope.weapon);
      $scope.weapon = {};
      $('#name').focus();
    };

    $scope.fight = function(){
      var num = Math.floor(Math.random() * 2) + 1,
          p1  = $scope['player' + num],
          p2  = $scope['player' + (num === 1 ? 2 : 1)];

      hit(p1, p2);
      hit(p2, p1);
    };

    function hit(p1, p2){
      var max  = p1.isZombie ? 3 : p1.weapon.damage,
          hurt = Math.floor(Math.random() * (max + 1));

      p2.health -= hurt;
      p2.isZombie = p2.health <= 0;
      p2.health = p2.isZombie ? 0 : p2.health;
    }

    $scope.pet = {health:100};
    $scope.pets = [];

    $scope.player1 = null;
    $scope.player2 = null;

    $scope.setPlayer = function(num){
      $scope['player' + num] = this.p;
    };

    $scope.title = 'Zombie Chow';

    $scope.togglePet = function(){
      $scope.hidePet = !!!$scope.hidePet;
    };

    $scope.toggleWeapon = function(){
      $scope.hideWeapon = !!!$scope.hideWeapon;
    };

    $scope.weapon = {};
    $scope.weapons = [];

  }]);
})();
