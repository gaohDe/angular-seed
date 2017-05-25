/**
 * Created by gaohuan on 2017/5/25.
 */
app.config(['$stateProvider', '$urlRouterProvider', 'RouterHelperProvider', function ($stateProvider, $urlRouterProvider, helper) {
    'use strict';
    $urlRouterProvider.otherwise('/app');
    $stateProvider
        .state('app', {
            url: '/app',
            title: 'app',
            templateUrl: helper.basePath('partials/app.html')
        })
        .state('app.ggg', {
            url: '/ggg',
            title: 'ggg',
            templateUrl: helper.basePath('partials/ggg.html')
        })
        .state('login', {
            url: '/login',
            title: 'login',
            templateUrl: helper.basePath('partials/login.html')
        })
}]);