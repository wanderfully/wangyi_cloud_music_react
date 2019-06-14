import * as React from 'react'
import ReactSwiper from 'reactjs-swiper'
import Back from './../back'
import { aGet } from './../../../api/api'
import apis from './../../../api/api'
import './style.scss'

const swiperOptions = {
    preloadImages: true,
    autoplay: 4000,
    autoplayDisableOnInteraction: false
  };
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            banners:[]
        }
    }
    componentDidMount(){
       // banner图
       aGet(apis.banner).then((res) => {
            let banners = []; 
            res.banners.forEach((item,index) => {
                let temp = {
                    image:item.imageUrl,
                    title:item.typeTitle,
                    link:''
                };
                banners.push(temp)
            })
            this.setState({
                banners:banners
            })
        })
    }
    componentDidUpdate(){

    }
    render(){
        return(
            <div className='banner'>
                <Back></Back>
                <ReactSwiper swiperOptions={swiperOptions} showPagination items={this.state.banners}
                    className="swiper-example" />    
            </div>
        )
    }
}
export default App