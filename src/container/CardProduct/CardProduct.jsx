import React, { Component } from 'react';

class CardProduct extends Component {
    // add state
    // state jika nilainya berubah maka otomatis akan merender ulang view
    state = {
        order: 4
    }

    //
    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue)
    }

    // handle plus button
    handlePlus = () => {
        // setState untuk mengubah objek state
        this.setState({
            order: this.state.order + 1
        }, () => {
            /*  dipanggil ketika state sudah berubah
                kemudian kirimkan parameter ke handleCounterChange() dengan nilai
                state yang baru this.state.order
            */ 
            this.handleCounterChange(this.state.order);
        })

    }

    handleMinus = () => {
        if(this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order)
            })
        }
    }


    render() {
        return(
            <div className="card">
                <div className="img-thumb-product">
                    <img src="https://murahgrosir.com/wp-content/uploads/2017/03/31sa65d4as56gf1sd2g1sd.jpg" alt="product-img"/>
                </div>

                <p className="product-title">Sepatu Adidas</p>
                <p className="product-price">Rp 500.000</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input className="text-count" type="text" value={this.state.order}/>
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </div>
        )
    }
}

export default CardProduct;