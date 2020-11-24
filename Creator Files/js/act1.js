/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('act1', [])

.service('Act1', [function(){
    var story = {
        'text': 'Act 1 Text'
    }
    
    return story;
}]);