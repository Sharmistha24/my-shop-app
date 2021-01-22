import React, { Component } from 'react';

import TitlePage from './TitlePage';
import { ProductsConsumer } from '../Main';
import AllProduct from './AllProduct';

export default class ProductsList extends Component {

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
                        <TitlePage name="all" title="Products" />
                        <div className="row">
                            <ProductsConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <AllProduct key={product.id} product={product} />
                                    })
                                }}
                            </ProductsConsumer>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}
