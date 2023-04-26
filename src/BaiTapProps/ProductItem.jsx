import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {

        let {prodInfo} = this.props;

        return (
            <div className="card mx-auto">
                <img src={prodInfo.image} alt="..." />
                <div className="card-body">
                    <h3>{prodInfo.name}</h3>
                    <p>{prodInfo.price} $</p>
                    <button className='btn btn-dark me-3'>
                        Add to cart <i className='fa fa-cart-plus'></i>
                    </button>
                    <button className='btn btn-success'>
                        View detail
                    </button>
                </div>
            </div>
        )
    }
}
