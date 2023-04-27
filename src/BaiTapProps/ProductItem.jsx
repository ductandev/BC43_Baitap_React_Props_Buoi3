import React, { Component } from 'react'
import ProductDetail from './ProductDetail';

export default class ProductItem extends Component {
    render() {
        let { prodInfo, renderModel } = this.props;

        return (
            <div className="card">
                <img src={prodInfo.image} alt="..." />
                <div className="card-body">
                    <h3 className='fs-5'>{prodInfo.name}</h3>
                    <p className='text-danger fw-semibold'>{prodInfo.price} $</p>
                    <div className='d-flex'>
                        <button className='btn btn-dark me-3'>
                            Add to cart <i className='fa fa-cart-plus'></i>
                        </button>
                        <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {
                            renderModel(prodInfo)
                        }}>
                            View detail
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
