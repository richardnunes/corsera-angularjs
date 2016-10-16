(function () {
    "use strict";

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', ['$scope', function($scope) {

            $scope.calculateQuantity = function () {
                $scope.message = $scope.getItems();
            };

            $scope.getItems = function () {
                if ($scope.items && $scope.items.length > 0){
                    var itemsBeforeParse = $scope.items.split(",");
                    var parsedItems = [];

                    for (var i=0; i<itemsBeforeParse.length; i++){
                        if (itemsBeforeParse[i].trim().length > 0){
                            parsedItems.push(itemsBeforeParse[i])
                        }
                    }
                    console.log(parsedItems);
                    if (parsedItems.length > 3){
                        $scope.messageStyle = {'color':'green'};
                        $scope.textboxStyle = {'border':'1px solid green'};
                        return "Too Much!";
                    } else if (parsedItems.length > 0){
                        $scope.messageStyle = {'color':'green'};
                        $scope.textboxStyle = {'border':'1px solid green'};
                        return "Enjoy!";
                    } else {
                        $scope.messageStyle = {'color':'red'};
                        $scope.textboxStyle = {'border':'1px solid red'};
                        return "Please enter data first.";
                    }
                } else {
                    $scope.messageStyle = {'color':'red'};
                    $scope.textboxStyle = {'border':'1px solid red'};
                    return "Please enter data first.";
                }


            }
        }]);
})();