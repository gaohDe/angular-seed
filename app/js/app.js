/**
 * Created by gaohuan on 2017/5/25.
 */
var app = angular.module('myApp', [
    'ui.router'
]);
app.provider('RouterHelper', ['APP_REQUIRES', function (appRequires) {
    this.basePath = function (uri) {
        return 'app/views/' + uri;
    };
    this.$get = function () {
    }
}]);
