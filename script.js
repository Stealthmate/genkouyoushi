var myApp = angular.module('genkouyoushi', []);

const ROMAJI = /[a-zA-Z]/;
const PUNCT = /[。、」]/;

myApp.controller('MyCtrl', ['$scope', function($scope) {
    $scope.n_masu = 10;
    $scope.formattedText = []
    $scope.$watch('text', function(text, old) {

        let str = []
        let curr = 0;
        let i = 0;
        $scope.masuCount = 0
        $scope.charCount = 0;
        while (i < text.length) {

            if (i < text.length - 1 && text[i].match(ROMAJI) && text[i + 1].match(ROMAJI)) {
                str[curr] = text[i] + text[i + 1]
                $scope.masuCount += 1
                $scope.charCount += 2;
                i += 1;
            } else if (text[i] == "\n") {
                if (curr % 20 == 0) curr -= 1;
                else {
                    for (let j = 0; j < 20 - (curr % 20); j++) {
                        str[curr + j] = "";
                    }
                    curr += 19 - (curr % 20)
                }
            } else if (text[i].match(PUNCT) && curr % 20 == 0 && curr > 0) {
                curr -= 1;
                str[curr] += text[i]
                $scope.charCount += 1
            } else {
                str[curr] = text[i]
                $scope.masuCount += 1
                $scope.charCount += 1
            }
            curr += 1;
            i += 1;
        }
        if (curr % 20 != 0) {
            for (let j = 0; j < 20 - (curr % 20); j++) {
                str[curr + j] = "";
            }
        }

        $scope.formattedText = []
        while (str.length > 0) {
            $scope.formattedText.push(str.splice(0, 20))
        }
    });
}]);
