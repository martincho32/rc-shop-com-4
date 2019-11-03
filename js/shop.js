const shop = (() => {
    const key = 'productsInCart'
    const url = 'http://localhost:3000/products';
    //Funcion para agregar los productos al carrito 
<<<<<<< Updated upstream
    const addToCart = (item) => {
        item.quantity = 1; 
        const prod = getItem(key);
        if (prod) {
            prod.push(item);
            setItem(key, prod);
        }
        else {
            setItem(key, [prod]);
        }
    }
=======
    const addToCart = () => {
        const prodRequest = getProduct();
        prodRequest.then(prod => {
            // console.log(prod);
            prod.quantity = 1;
            let local = localStorage.getItem(key);
            console.log(typeof key);
            console.log(typeof JSON.parse(local));
            if (local && local.length) {
                var a = [];
                a = JSON.parse(localStorage.getItem(key));
                a.push(prod)
                // console.log(a);
                localStorage.setItem(key, JSON.stringify(a));
                // console.log(prod);
            }
            else {
                setItem(key, [prod]);
                // console.log(prod);
            }
        })
        const timer2 = () => {       
            const random = new Promise((resolve, reject) => {            
                setTimeout(() => {
                    resolve(location.href= 'cart.html');
                }, 1000);
            });
            return random;
        }
        timer2();
    };

>>>>>>> Stashed changes

    const getProducts = () => {
        const requestProducts = fetch(url);
        return requestProducts.then(response => {
            const r =response.json();
            return r.then(products => {
                return products;
            });
        });
    }

    const getProduct = id => {
        const requestProducts = fetch(`${url}/${id}`);
        return requestProducts.then(response => {
            const r =response.json();
            return r.then(products => {
                return products;
            });
        });
    }
    // Modifica los productos en el carrito
    const modifyFromCart = (item, _quantity) => {
        const inLocalStoreProducts = getItem(key);
        for (let i = 0; i < inLocalStoreProducts.lenght; i++) {
            if (inLocalStoreProducts[i].id === item.id) {
                inLocalStoreProducts[i].quantity = _quantity;
            }
        }
        setItem(key, LCproduct);
    }
    // Borra productos en el carrito
    const removeFromCart = (item) => {
        const inLocalStoreProducts = getItem(key);
        for (let i = 0; i < LCproduct.lenght; i++) {
            if (inLocalStoreProducts[i].id === item.id) {
                inLocalStoreProducts[i].splice(i, 1);
            }
        }
        setItem(key, LCproduct);
    }
    // Verifica el proceso de finalizacion de compra
    const doCheckout = () => {
        const products = getItem(key)
        return products;
    }
    const getItem = (key) => {
        let item = JSON.parse(localStorage.getItem(key));
        return item;
    }
    const setItem = (key, value) => {
        let item = JSON.stringify(value);
        localStorage.setItem(key, item);
    }
    
    return {
        addToCart,
        modifyFromCart,
        getItem,
        removeFromCart,
        doCheckout,
        getProduct,
        getProducts
    }
})();

