import React, { Component } from 'react'
import { arrProduct } from '../../src/assets/data/data'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

    renderProduct = () => {
        return arrProduct.map((item) => {
            return <div className="col-8 col-md-6 col-lg-4 mt-3 prodlist" key={item.id}>
                <ProductItem prodInfo={item} />
            </div> 
        });
    }


    render() {
        return (
            <div className='container'>
                <h1 className='text-center'>Shoes shop</h1>
                <div className="row justify-content-center my-auto">
                    {this.renderProduct()}
                </div>
            </div>
        )
    }
}






