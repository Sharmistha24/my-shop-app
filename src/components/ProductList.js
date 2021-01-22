import React, { Component } from 'react';
import axios from 'axios';

import Title from './Title';
import { ProductConsumer } from '../Context';
import Product from './Product';

export default class ProductList extends Component {

    // state = {
    //     products: 
    // }

    // componentDidMount() {
    //     axios.get(`https://cdn.shopify.com/s/files/1/0455/2176/4502/files/products.json`)
    //         .then(res => {
    //             this.setState({ products: res.data });

    //         });
    // }

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="all" title="Products" />
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product} />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}
