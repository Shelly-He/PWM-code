/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('party', [])

.service('Guests', [function(){
    var items = [
        {
            'title': 'Jordan',
            'char': 'John Smith',
            'img': 'https://cdn3.iconfinder.com/data/icons/business-vol-13/100/Artboard_1-512.png',
            'desc': 'Jordan description',
            'vote': 'none'
        },
        {
            'title': 'Noah',
            'char': 'Jacob Lee',
            'img': 'https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png',
            'desc': 'Noah description',
            'vote': 'none'
        },
        {
            'title': 'Siyi',
            'char': 'Sarah Lyn',
            'img': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuoscRugjMEECkFGYGTUPY_nowkHsyBb6zmO9IGa6FrH3Z_cyb',
            'desc': 'Siyi description',
            'vote': 'none'
        }
    ];
    
    var guests = {
        'items': items
    };
    
    return guests;
}]);