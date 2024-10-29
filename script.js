
angular.module("rentalApp", [])
.controller("rentalController", function($scope, $http) {
    $scope.products = [
        { name: "Camping Tent", description: "Sturdy pop-up tents for quick setup and durability.", price: 30, image: "http://127.0.0.1:8000/images/tent.jpg" },
        { name: "Very Cool Cooler", description: "Our coolers keep frozen goods frozen for up to 48 hours.", price: 15, image: "http://127.0.0.1:8000/images/cooler.jpg" },
        { name: "Camping Stove", description: "Camping stove for your outdoor kitchen.", price: 20, image: "http://127.0.0.1:8000/images/stove.jpg" }
    ];


    $http.get("http://127.0.0.1:8000/welcome")
        .then(function(response) {
            $scope.welcomeMessage = response.data.message;
        })
        .catch(function(error) {
            console.error("Error fetching the welcome message:", error);
        });
});