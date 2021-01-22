import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ProductConsumer } from '../Context';

export default class DetailsPage extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { id, vendor, name, image_src, price } = value.storeProducts;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-blue my-5">
                                    <h1>{name}</h1>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={image_src} className="img-fluid img-thumbnail" alt="product" />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>Item: {name}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        Vendor:<span className="text-uppercase">{vendor}</span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            Price: <span>$</span>{price}
                                        </strong>
                                    </h4>
                                    <div className="mt-4">
                                        <Link to="/">
                                            <button className="btn btn-outline-primary">Back To Product</button>
                                        </Link> &nbsp;&nbsp;&nbsp;
                                    <button
                                            className="btn btn-outline-warning"
                                            onClick={() => {
                                                value.addToShopingCart(id);
                                            }}
                                        >Add to cart</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
