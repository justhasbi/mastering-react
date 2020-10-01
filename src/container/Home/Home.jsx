import React, {Component} from 'react';
// import YoutubeComponent from '../../component/YoutubeComponent/YoutubeComponent';
import LifeCycleComponent from '../LifeCycleComponent/LifeCycleComp';
// import Product from '../Product/Product'

// setState dapat menerima callback

class Home extends Component {
    render() {
        return (
            // call YoutubeComponent
            /*  komponen hanya dapat memanggil satu parent
                untuk mengatasi hal tersebut maka dapat dibungkus menggunakan <div>
            */
            <div>
                
                <p>Youtube Component</p>
                <hr/>
                {/* send data to component 
                < YoutubeComponent 
                    time="6.50" 
                    title="Learn MERN Stack"
                    img="https://i.ytimg.com/vi/7CqJlxBYj-M/maxresdefault.jpg" 
                    desc="8k ditonton 1 jam yang lalu"/>
                < YoutubeComponent 
                    time="7.20" 
                    title="Learn Frontend Development"
                    img="https://2.bp.blogspot.com/-X9cMDyuEOkQ/Wx1RBJfEwJI/AAAAAAAABAQ/cVztV_IKZbMYPKL1O63DAP937fKSuQkUwCLcBGAs/s1600/front%2Bend%2Bdev.jpg" 
                    desc="30k ditonton 2 hari yang lalu"/>
                < YoutubeComponent 
                    time="14.05"
                    title="Learn Backend Laravel"
                    img="https://www.techfor.id/wp-content/uploads/2019/12/Picture3.png" 
                    desc="230k ditonton 5 menit yang lalu"/>
                < YoutubeComponent 
                    time="6.10" 
                    title="Learn Learn Fullstack Javascript"
                    img="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190626123927/untitlsssssed.png" 
                    desc="43k ditonton 3 hari yang lalu"/>
                < YoutubeComponent />
                <p>Counter</p>
                < Product />
                */}
                <LifeCycleComponent />
            </div>
        )
    }
}

export default Home;