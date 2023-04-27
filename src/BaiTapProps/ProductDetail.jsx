import React, { Component } from 'react'

export default class ProductDetail extends Component {
    render() {
        let { changeState } = this.props;

        return (
            <div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-2" id="exampleModalLabel">Product Detail</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                                <div className="card">
                                    <img src={changeState.image} className='mx-auto' width={304} height={325} alt="" />
                                    <div className="card-body py-0">
                                        <h3 className='fs-5'>{changeState.name}</h3>
                                        <p className='text-danger fw-semibold mb-1'>{changeState.price} $</p>
                                        <p>{changeState.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary btn_BuyNow">Buy Now</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
