/**
 * Created by 放 on 2017/1/12.
 */
// var app = angular.module("myApp",["ngRoute"]);
// app.config(['$routeProvider',function ($routeProvider) {
//     $routeProvider
//         .when("/",{
//             templateUrl:'logon/logon.html',
//             controller:'logonCtrl'
//         })
//         .when("/find",{
//             templateUrl:'find/find.html',
//             controller:'findCtrl'
//         })
//         .when("/linkman",{
//             templateUrl:'linkman/linkman.html',
//             controller:'linkmanCtrl'
//         })
//         .when("/mine",{
//             templateUrl:'mine/mine.html',
//             controller:'mineCtrl'
//         })
//         // .otherwise({
//         //     redirectTo:"/"//重定向到首页
//         // })
// }])

define(['angular', 'require', 'angular-route'], function (angular, require) {

    var myApp = angular.module('myApp',['ngRoute']);

    myApp.config(['$routeProvider','$controllerProvider',
        function($routeProvider,$controllerProvider) {
            $routeProvider
                .when('/', {
                    templateUrl:'logon/logon.html',
                    controller: 'logonCtrl',
                    resolve:{
                        delay : ctrlRegister('logonCtrl',['logon/js/logon.js'])
                    }
                })
                .when('/find', {
                    templateUrl:'find/find.html',
                    controller: 'findCtrl',
                    resolve:{
                        delay : ctrlRegister('findCtrl',['find/js/find.js'])
                    }
                })
                .when('/linkman', {
                    templateUrl:'linkman/linkman.html',
                    controller: 'linkmanCtrl',
                    resolve:{
                        delay : ctrlRegister('linkmanCtrl',['linkman/js/linkman.js'])
                    }
                })
                .when('/mine', {
                    templateUrl:'mine/mine.html',
                    controller: 'mineCtrl',
                    resolve:{
                        delay : ctrlRegister('mineCtrl',['mine/js/mine.js'])
                    }
                })
                .otherwise({
                    redirectTo: '/'
                });

            function ctrlRegister (ctrlName, ctrlModule) {
                return function ($q) {
                    var defer = $q.defer();
                    require(ctrlModule, function (controller) {

                        $controllerProvider.register(ctrlName, controller);

                        defer.resolve();
                    });
                    return defer.promise;
                }
            }
        }
    ]);

    return myApp;
});