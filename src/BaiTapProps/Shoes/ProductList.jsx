import React, { Component } from 'react'
import { arrProduct } from '../../../src/assets/data/data'
import ProductItem from './ProductItem'
import ProductDetail from './ProductDetail'

export default class ProductList extends Component {

    state = {
        spChiTiet: {
            "id": 1,
            "name": "Adidas Prophere",
            "alias": "adidas-prophere",
            "price": 350,
            "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            "quantity": 995,
            "image": "https://svcy3.myclass.vn/images/adidas-prophere.png"
        },
    }


    renderProduct = () => {
        return arrProduct.map((item) => {
            return <div className="col-8 col-md-6 col-lg-4 mt-3 prodlist" key={item.id}>
                <ProductItem prodInfo={item} renderModel={this.renderModel} />
            </div>
        });
    }

    renderModel = (prodDetail) => {
        this.setState({
            spChiTiet: prodDetail,
        })
    }


    render() {
        return (
            <div className='container'>
                <h1 className='text-center'>Shoes shop</h1>
                <div className="row justify-content-center my-auto">
                    {this.renderProduct()}
                </div>
                <ProductDetail changeState={this.state.spChiTiet} />
            </div>
        )
    }
}






