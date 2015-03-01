/**
 * Created by michaelzhao007 on 11/27/2014.
 */
/**
 * Created by michaelzhao007 on 11/26/2014.
 */
angular.module('myApp')
    .factory('uriFactory', function() {
        // AngularJS will instantiate a singleton by calling "new" on this function
        var env = 'aws';
        return {
        geturi: function() {
            if (env === 'local') {
                return 'http://localhost:10080/chong/rest/';
            }
            else{
                return 'http://54.191.114.26:8080/chong/rest/';
            }
        }

        };

    });
