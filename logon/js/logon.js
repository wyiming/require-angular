/**
 * Created by 放 on 2017/1/12.
 */
define(['angular'], function (angular) {
    //将本控制器函数作为结果返回给router.js
    return function ListCtrl( $scope ){
        $scope.lists = ['1','2','3'];
    };
});