import React from 'react';

import '../../Custom.css';

export default function CartItem({ item, value }) {
    const { id, name, image_src, price, total, count } = item;
    const { incrementedValue, decrementedValue, deleteItem } = value;

    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={image_src} style={{ width: '5rem', height: '5rem' }} className="img-fluid" alt="product" />

            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Product : </span>
                {name}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Price : </span>
                ${price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={() => decrementedValue(id)}> --</span>
                        <span className="btn btn-black mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={() => incrementedValue(id)}>+</span>
                    </div>
                </div>
            </div>
            {/* end of increment button div */}
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={() => deleteItem(id)}>
                    <i class="fas fa-trash-alt"></i>
                </div>
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <strong>Item Total : $  {total}</strong>
            </div>
        </div>
    )
}
