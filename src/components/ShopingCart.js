import React, { Component } from 'react';

import Title from './Title';
import CartColumn from './cart/CartColumn';
import EmptyCart from './cart/EmptyCart';
import { ProductConsumer } from '../Context';
import CartList from './cart/CartList';

export default class ShopingCart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const { cart } = value;
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <Title name="your" title="cart"></Title>
                                    <CartColumn />
                                    <CartList value={value} />
                                </React.Fragment>
                            );
                        }
                        else {
                            return <EmptyCart />
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}
