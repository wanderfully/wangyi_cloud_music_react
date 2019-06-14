import * as React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import ReactSVG from 'react-svg'
import phSVG from './../../../assets/placeholder.svg'

interface IProps{
    des:string
    num:number
    src:string
    playCount:number
}
type IState = {
    isloading:Boolean,
}

class App extends React.Component<IProps,IState>{
    constructor(props:any){
        super(props)
        this.state = {
            isloading:true,
        }
    }
    
    componentDidMount(){
        let that = this;
        // 这里有问题 不知道怎么解决暂时这样，因为这个方法只执行一次 而第一次并没有图片 所以loading一直是true，图片不会出来，但是放在render里面会造成死循环
        setTimeout(function(){
            const loadImg = new Image()
            loadImg.onload = () => {
                that.setState({
                    isloading:false
                })
            }
            if (that.props.src) {
                loadImg.src = that.props.src
            }
        },1000)
        
    }
    componentWillUpdate(prop:any,state:any){
        
    }
    render(){
        const { src, des, num, playCount } = this.props;
        return(
            <Link to={{
                pathname:'playlist',
                state:{
                    picurl:src,
                    name:des,
                    playCount:playCount
                }
            }}>
                {
                    (this.state.isloading || src =='') ? 
                    <div>
                        <ReactSVG src={phSVG}></ReactSVG>
                    </div>
                    :
                    <div>
                        <img src={src}/>
                        <p>{des}</p>
                        <div className='play_num'>
                            <i className='iconfont iconmayi-erji-jianbian'></i>
                            <span>{num}</span>
                        </div>
                    </div>
                }
                
            </Link>
        )
    }
}
export default App;