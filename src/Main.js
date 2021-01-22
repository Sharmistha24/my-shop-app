import React, { Component } from 'react';

import { storeDatas } from './data';

const ProductsContext = React.createContext();


class ProductsProvider extends Component {
    state = {
        products: [],
        storeDatas: storeDatas,
        cart: [],
        cartTotal: 0
    }

    componentDidMount() {
        this.setProducts();
    }

    // getProducts = () => {
    //     axios.get(`https://cdn.shopify.com/s/files/1/0455/2176/4502/files/products.json`)
    //         .then(res => {
    //             this.setState({ data: res.data });

    //         });
    // }

    setProducts = () => {
        let tempProducts = []
        storeDatas.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(() => {
            return { products: tempProducts }
        })
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    addToShopingCart = (id) => {
        let cartProduct = [...this.state.products];
        const index = cartProduct.indexOf(this.getItem(id));
        const product = cartProduct[index];
        product.inCart = true
        product.count = 1;
        const price = product.price;
        product.total = price
        this.setState(() => {
            return { products: cartProduct, cart: [...this.state.cart, product] }
        }, () => {
            this.addTotals();
        })
    }

    handleDetails = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { storeDatas: product }
        })
    }

    incrementedValue = (id) => {
        let tempCart = [...this.state.cart];
        const selectedItem = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedItem);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        this.setState(() => { return { cart: [...tempCart] } }, () => { this.addTotals() })
    }

    decrementedValue = (id) => {
        let tempCart = [...this.state.cart];
        const selectedItem = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedItem);
        const product = tempCart[index];
        product.count = product.count - 1;
        if (product.count === 0) {
            this.deleteItem(id)
        }
        else {
            product.total = product.count * product.price;
            this.setState(() => { return { cart: [...tempCart] } }, () => { this.addTotals() })
        }

    }


    deleteItem = (id) => {
        let tempProduct = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProduct.indexOf(this.getItem(id));
        let removedProducts = tempProduct[index];
        removedProducts.inCart = false;
        removedProducts.count = 0;
        removedProducts.total = 0;
        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProduct]
            }
        }, () => {
            this.addTotals()
        })
    }


    addTotals = () => {
        let totalPrice = 0;
        this.state.cart.map(item => totalPrice += item.total);
        const total = totalPrice;
        this.setState(() => {
            return {
                cartTotal: total
            }
        })
    }

    render() {
        return (
            <ProductsContext.Provider value={{
                ...this.state,
                handleDetails: this.handleDetails,
                addToShopingCart: this.addToShopingCart,
                incrementedValue: this.incrementedValue,
                decrementedValue: this.decrementedValue,
                deleteItem: this.deleteItem
            }}>
                {this.props.children}
            </ProductsContext.Provider>
        )
    }
}

const ProductsConsumer = ProductsContext.Consumer;

export { ProductsProvider, ProductsConsumer }