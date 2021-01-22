import React, { Component } from 'react';

import TitlePage from './TitlePage';
import CartColumn from './cart/CartColumn';
import EmptyCart from './cart/EmptyCart';
import { ProductsConsumer } from '../Main';
import CartList from './cart/CartList';

export default class ShopingCart extends Component {
    render() {
        return (
            <section>
                <ProductsConsumer>
                    {value => {
                        const { cart } = value;
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <TitlePage name="your" title="cart"></TitlePage>
                                    <CartColumn />
                                    <CartList value={value} />
                                </React.Fragment>
                            );
                        }
                        else {
                            return <EmptyCart />
                        }
                    }}
                </ProductsConsumer>
            </section>
        )
    }
}
