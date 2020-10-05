import React, {Component} from 'react';
import './LifeCycleComp.css'

class LifeCycleComponent extends Component {
    // default dari es6
    // lifeCycle method
    constructor (props) {
        super(props)
        this.state = {
            count: 1
        }
        console.log("constructor")
    }

    static getDerivedStateFromProps (props, state) {
        console.log("getDerivedStateFromProps")
        return null
    }

    componentDidMount () {
        console.log("componentDidMount")
        // setTimeout(() => {
        //     this.setState({
        //         count: 2
        //     })
        // }, 3000)
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        console.log("render")
        return(
            // console.log("coba")
            <button className="btn" onClick={this.changeCount}>Component Button {this.state.count}</button>
        )
    }
}

export default LifeCycleComponent;