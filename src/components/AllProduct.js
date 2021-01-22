import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductsConsumer } from '../Main';

import styled from 'styled-components';

import '../Custom.css';

export default class Product extends Component {
    render() {

        const { id, vendor, name, image_src, price } = this.props.product;

        return (
            <ProoductWrapper className="col-9 col-md-6 col-lg-3 my-3">
                <div className="card border-0">
                    <ProductsConsumer>
                        {(value) => (
                            <div onClick={() =>
                                value.handleDetails(id)
                            }>
                                <Link to="/details">
                                    <img src={image_src} alt="product image" className="card-img-top" />
                                </Link>

                                <p className="align-self-center font-weight-bold mb-0 mt-1 ml-2">
                                    {vendor}
                                </p>
                                <p className="align-self-center mb-0 ml-2">
                                    <small className="text-secondary">{name}</small>
                                </p>
                                <p className="align-self-center font-weight-bold mb-0 ml-2">
                                    <span>$</span>{price}
                                </p>
                                {/* <button className="cart-btn" onClick={() => { console.log("added to the cart") }}></button> */}
                            </div>
                        )}

                    </ProductsConsumer>
                </div>
            </ProoductWrapper>
        )
    }
}

// tried some styled component features
const ProoductWrapper = styled.div`
.card{
    transation: all 1s linear;
}
&:hover{
    .card{
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .img-container{
        position:relative;
        overflow:hidden;
    }
}
`