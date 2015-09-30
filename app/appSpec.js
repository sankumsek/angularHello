// Tests go on this page

describe('MyCtrl1', function () {
  var scope, $httpBackend; 

  //mock Application allows us to inject our own dependencies
  beforeEach(angular.mock.module('myApp.controllers'));
  beforeEach(angular.mock.inject(function ($rootScope, $controller) {
          //empty scope
          scope = $rootScope.$new();
          //declared the controller
          $controller('MyCtrl1', {
              $scope: scope
          });
      }));
      // tests start here
      it('should have variable name = "Hello World!"', function () {
          expect(scope.name).toBe('Hello World!');
      });
  });