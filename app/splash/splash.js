angular.module('splash', []).controller('splashController', splashController);

splashController.$inject = ['cartFactory'];

function splashController(cartFactory) {
//    alert('sfdfsdf');
    var spCntrol = this;
    spCntrol.cart = [];
    //bindable objects at beginning of controller definition
//    spCntrol.authenticateUser = authenticateUser;

    spCntrol.productList = [{"category": "Shoes", "items": [{name: 'Boots', imageSrc: "assets/ItemSlider/images/11.jpg"}, {name: 'Oxfords', imageSrc: "assets/ItemSlider/images/15.jpg"}, {name: 'Loafers', imageSrc: "assets/ItemSlider/images/13.jpg"}, {name: 'Sneakers', imageSrc: "assets/ItemSlider/images/10.jpg"}]},
        {"category": "Handbags", "items": [{name: 'Duffel Bags', imageSrc: "assets/ItemSlider/images/12.jpg"}, {name: 'Laptop Bags', imageSrc: "assets/ItemSlider/images/15.jpg"}, {name: 'Carry Ons', imageSrc: "assets/ItemSlider/images/14.jpg"}, {name: 'Brief Cases', imageSrc: "assets/ItemSlider/images/11.jpg"}]}
    ];


    spCntrol.addToCart = addToCart;
    spCntrol.removeFromCart = removeFromCart;
    function addToCart(cart, item, quantity)
    {
        cartFactory.addToCart(cart, item, quantity);
    }
    function removeFromCart(cart, item, quantity)
    {
        cartFactory.removeFromCart(cart, item, quantity);
    }


}