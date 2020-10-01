import React, {Component} from 'react';
import './LifeCycleComp.css'

class LifeCycleComponent extends Component {
    constructor (props) {
        super(props)
        this.state = {
            count: 1
        }
    }

    static getDerivedStateFromProps (props, state) {

    }

    componentDidMount () {
        
    }

    render() {
        return(
            // console.log("coba")
            <button className="btn">Component Button</button>
        )
    }
}

export default LifeCycleComponent;