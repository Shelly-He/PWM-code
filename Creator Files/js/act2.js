/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('act2', [])

.service('Act2', [function(){
    var story = {
        'text': 'Act 2 Text'
    };
    
    return story;
}]);