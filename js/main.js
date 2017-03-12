/**
 * Created by dell on 2017/1/22.
 */
// main.js

'use strict';

(function (win) {
    require.config({
        // baseUrl: './',
        // // 依赖相对路径
        paths: {
            'angular': 'angular.min',
            'angular-route': 'angular-route.min',

        },
        // 引入没有使用requirejs模块写法的类库
        shim: {
            'angular': {
                exports: 'angular'
            },
            'angular-route': {
                // angular-route依赖angular
                deps: ['angular'],
                exports: 'ngRoute'
            }
        }
    });

    // 自动导入router.js模块，由于后缀名可以省略，故写作'router',
    // 并将模块返回的结果赋予到router中。
    require(['angular','route'], function(angular,router){
        // 手动启动angularjs，特别说明此处的bootstrap不是那个ui框架，
        // 而是angularjs的一个手动启动框架的函数
        angular.bootstrap(document, ['myApp']);
    });
//    在页面加载之前就执行
})(window);