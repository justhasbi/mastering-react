import './Product.css'
import React, {Component, Fragment } from 'react';
import CardProduct from '../CardProduct/CardProduct';

class Product extends Component {
    // add state
    // state jika nilainya berubah maka otomatis akan merender ulang view
    state = {
        order: 4
    }

    // sediakan method untuk mengupdate state.order
    // newValue diterima dari onCounterChange props dari card product
    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render(props) {
        return(
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://www.flaticon.com/svg/static/icons/svg/544/544299.svg" alt="logo"/>
                        <p>Online Store</p>
                    </div>
                    
                    <div className="troley">
                        <img src="https://www.flaticon.com/svg/static/icons/svg/1170/1170678.svg" alt="cart"/>
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                {/* onCounterChange boleh bebas dan merupakan props*/}
                < CardProduct onCounterChange={ (value) => this.handleCounterChange (value) }/>
            </Fragment>
        )
    }
}

export default Product;