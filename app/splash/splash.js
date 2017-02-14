angular.module('splash', []).controller('splashController', splashController);

//splashController.$inject = ['$location'];

function splashController() {
//    alert('sfdfsdf');
    var spCntrol = this;

    //bindable objects at beginning of controller definition
//    spCntrol.authenticateUser = authenticateUser;

    spCntrol.productList = [{"Shoes": [{name: 'Boots', imageSrc: "assets/ItemSlider/images/15.jpg"}, {name: 'Oxfords', imageSrc: "assets/ItemSlider/images/15.jpg"}, {name: 'Loafers', imageSrc: "assets/ItemSlider/images/15.jpg"}, {name: 'Sneakers', imageSrc: "assets/ItemSlider/images/15.jpg"}]},
        {"Handbags": [{name: 'Duffel Bags', imageSrc: "assets/ItemSlider/images/15.jpg"}, {name: 'Laptop Bags', imageSrc: "assets/ItemSlider/images/15.jpg"}, {name: 'Carry Ons', imageSrc: "assets/ItemSlider/images/15.jpg"}, {name: 'Brief Cases', imageSrc: "assets/ItemSlider/images/15.jpg"}]}
    ];


    angular.forEach(spCntrol.productList, function (category) {
//        alert(category);
        console.log(category);
        
//        console.log(items);
        
        angular.forEach(category, function (items) {
           console.log(items);
 angular.forEach(items, function (item) {
           console.log(item.name);

        });
        });

    });
//expect(log).toEqual(['name: misko', 'gender: male']);
//       alert(spCntrol.productList);
}