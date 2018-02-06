var myApp = angular.module('myApp', ['ng-admin']);

myApp.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

myApp.config(['RestangularProvider', function (RestangularProvider) {
    RestangularProvider.addFullRequestInterceptor(function (element, operation, what, url, headers, params, httpConfig) {
       
        return { params: params };
    });
}]);

myApp.config(['NgAdminConfigurationProvider', function (NgAdminConfigurationProvider) {
    var nga = NgAdminConfigurationProvider;

    var admin = nga.application('SocialNetwork').baseApiUrl('http://localhost:3000/');
    //entitet
    var users = ngUsers(nga);
    admin.addEntity(users);

     

    admin.menu(nga.menu()
        .addChild(nga.menu(users).icon('<span class="glyphicon glyphicon-question-sign"></span>'))
       
    );

    nga.configure(admin);
}]);