import React, { Component } from 'react';
import util from '../util'

class Basket extends Component {
    render() {
        const { cartItems } = this.props;

        return (
            <div className="alert alert-secondary">
                {cartItems.length === 0
                    ? "Basket is empty" :
                    <div>You have {cartItems.length} items in the basket. <hr /></div>
                }
                {cartItems.length > 0 &&
                    <div>
                        <ul style={{ marginLeft: +10 }}>
                            {cartItems.map(item => (
                                <li key={item.id}>
                                    <b>{item.title}</b>
                                    <button style={{ float: 'right' }} className="btn btn-danger btn-xs"
                                        onClick={(e) => this.props.handleRemoveFromCart(e, item)}>X</button>
                                    <br />
                                    {item.count} X {util.formatCurrency(item.price)}
                                </li>))
                            }
                        </ul>

                        <b>Sum: {util.formatCurrency(cartItems.reduce((a, c) => (a + c.price * c.count), 0))}
                        </b>
                        <button onClick={() => alert('Checkout page coming soon!')} className="btn btn-dark">checkout</button>
                    </div>
                }
            </div>
        )
    }
}

export default Basket;