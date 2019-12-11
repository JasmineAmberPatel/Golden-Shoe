import React from 'react'
import '../Img/Golden-Shoe-Logo.png'


class Footer extends React.Component {
    constructor() {
        super()
        this.state = {
            email: ''
        }
    }
    changeHandler = event => {
        this.setState({
            email: event.target.value
        });
    }

    render() {


        return (
            <div className="Footer">
                <div className="footerList">
                    <div className="Help-Information "> HELP &#38; INFORMATION
                <div className="lorem">
                            <p className="Lorem-ipsum-dolor-si">Returns</p>
                            <p className="Lorem-ipsum-dolor-si">Support</p>
                            <p className="Lorem-ipsum-dolor-si">Shipping Information</p>
                        </div>
                    </div>
                    <div className="About-GS"> ABOUT GOLDEN SHOE
                <div className="lorem">
                            <p className="Lorem-ipsum-dolor-si">Our Story</p>
                            <p className="Lorem-ipsum-dolor-si">Contact Us</p>
                            <p className="Lorem-ipsum-dolor-si">Find Your Nearest Store</p>
                        </div>
                    </div>

                    <div className="Subscribe"> SUBSCRIBE
                <div className="lorem">
                            <p className="Lorem-ipsum-dolor">Subcribe to our newsletter for the latest offers and stock updates.</p>
                            <form>
                                <input className="sub-e-mail"
                                    type="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.changeHandler}
                                />
                            </form>
                        </div>
                        <div className="Social">
                            <img className="facebook" src={require('../Img/Facebook_Dark.png')} alt="facebook logo"></img>
                            <img className="instagram" src={require('../Img/Instagram_Dark.png')} alt="instagram logo"></img>
                            <img className="twitter" src={require('../Img/Twitter_Dark.png')} alt="twitter logo"></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Footer