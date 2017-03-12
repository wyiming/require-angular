

define(['angular'], function (angular) {
    //将本控制器函数作为结果返回给router.js
    return function ListCtrl( $scope ){
        $scope.lists = ['1','2','3',"4"];
    };
});