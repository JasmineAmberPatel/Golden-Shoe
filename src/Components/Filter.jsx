import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-md-4">{this.props.count} products found.</div>
            <div className="col-md-4">
                <label>
                    Order by
                    <select className="form-control" value={this.props.sort}
                    onChange={this.props.handleChangeSort}>
                    <option value="">Golden Shoe Favourites</option>
                    <option value="lowest">Lowest to Highest Price</option>
                    <option value="highest">Highest to Lowest Price</option>
                    </select>
                </label>
            
            </div>
            <div className="col-md-4">
            <label>
                    Filter by size
                    <select className="form-control" value={this.props.size}
                    onChange={this.props.handleChangeSize}>
                    <option value="">ALL</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    </select>
                </label>
            </div>
            </div>
        )
    }
}