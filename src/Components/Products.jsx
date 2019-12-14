import React, { Component } from 'react';
import util from '../util'

class Products extends Component {

    render() {
        const productItems = this.props.products.map(product => (
            <div className="col-md-4" key={product.id}>
                <div className="thumbnail text-center">
                        <img className="product-image" src={`/products/${product.sku}_2.png`} alt={product.title} />
                        <hr />
                        <p className="product-info" >{product.title}</p>
                    <b className="product-info">{util.formatCurrency(product.price)}</b>
                    <hr />
                    <button className="btn btn-dark" onClick={(e)=>this.props.handleAddToCart(e, product)}>Add to cart</button>
                </div>
            </div>
        ));

        return (
            <div className="row">
                {productItems}
            </div>
        )
    }
}

export default Products;