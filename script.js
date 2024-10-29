
angular.module("rentalApp", [])
.controller("rentalController", function($scope, $http) {
    $scope.products = [
        { name: "Camping Tent", description: "Sturdy pop-up tents for quick setup and durability.", price: 30, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXWcDcA__fGCI8lYLdfk15qcCP50hTOkgIwA&s" },
        { name: "Very Cool Cooler", description: "Our coolers keep frozen goods frozen for up to 48 hours.", price: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF32egYk2KF16HifpF6e6HppWSbBUpam6aKA&s" },
        { name: "Camping Stove", description: "Camping stove for your outdoor kitchen.", price: 20, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvl0IuKiP2PjCXdewxfRMpqvtukoKekvpSVg&s" }
    ];


    $http.get("http://127.0.0.1:8000/welcome")
        .then(function(response) {
            $scope.welcomeMessage = response.data.message;
        })
        .catch(function(error) {
            console.error("Error fetching the welcome message:", error);
        });
});