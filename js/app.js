'use strict'

angular.module('app', [])

		.constant("baseURL","http://quotes.stormconsultancy.co.uk/random.json")
		//.constant("baseURL", "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies")

		.controller('RandomQuoteCtrl', ['$scope','$http','baseURL', '$log', function($scope, $http, baseURL, $log) {

			$scope.quote={};
			$scope.quote={ data: {quote: "Loading..."}};
			$http.get(baseURL)
				.then(function(response) {

				$scope.quote = response;
				console.log($scope.quote);

			});

			$scope.randomQuote = function() {
				$http.get(baseURL)
					.then(function(response) {

						$scope.quote = response;
						console.log($scope.quote);

				});
			};

			$scope.tweetIt = function(){

				$scope.share = "https://twitter.com/intent/tweet?text="+ $scope.quote.data.quote +" – "+ $scope.quote.data.author ; 
				$log.log( "quote obj " + $scope.quote.data);
			}
			
		}])
