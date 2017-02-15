myApp.factory('cartFactory', cartFactory);

function cartFactory() {

    var cartInstance = {
        //keep adding method functions here
        addToCart: addToCart,
        removeFromCart: removeFromCart
    };

//    var authenticUsers = [['test', 'test']];

    function addToCart(cart, item, quantity) {
//        alert(item);
        var itemExists = false;
        angular.forEach(cart, function (cartStatus) {
            if (cartStatus.name === item)
            {
                itemExists = true;
                cartStatus.quantity+=quantity;
            }
        });
        if (!itemExists)
        {
            var temp = {};
            temp.name = item;
            temp.quantity = quantity;

            cart.push(temp);
        }
    }
    
    function removeFromCart(cart, item, quantity) {

        angular.forEach(cart, function (cartStatus,key) {
            if (cartStatus.name === item)
            {
               cartStatus.quantity-=quantity
                if(cartStatus.quantity==0)
                {
                   cart.splice(key, 1);
                }
                
            }
        });
        console.log(cart);
    }
    ;
    return cartInstance;
}