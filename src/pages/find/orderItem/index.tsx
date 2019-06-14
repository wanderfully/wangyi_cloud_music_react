import * as React from 'react'
import './index.scss'
import { aGet } from './../../../api/api'
import apis from './../../../api/api'
import {Link} from 'react-router-dom'

type IProps = {
    idx:number,
}
class OrderItem extends React.Component<IProps>{
    state = {
        res:{
            coverImgUrl:'',
            tracks:[],
            id:'',
            name:'',
        },
        isloading:true,
    }
    componentDidMount(){
        this.getOrderItem(this.props.idx)
    }
    getOrderItem(idx:any){
        aGet(apis.list,{
            idx:idx
        }).then((res:any) => {
            this.setState({
                res:res.playlist,
                isloading:false,
            }) 
        });
    }
    shouldComponentUpdate(nextProps:any,nextState:any){
        if(nextState.isloading){
            return false
        }else{
            return true
        }
    }
    render(){
        let coverImgUrl = this.state.res.coverImgUrl;
        let playlist = this.state.res.tracks.slice(0);
        let id = this.state.res.id;
        let name = this.state.res.name;
        return(
            <Link to={{
                pathname:'playlist',
                state:{
                    picurl:coverImgUrl,
                    name:name,
                    playCount:id
                }
            }}>
                <div className="order_item_wraper"> 
                    <div className="img_cover">
                        <img src={coverImgUrl} alt=""/>
                    </div>
                    <div className="item_name">
                    {
                        playlist.splice(0,4).map((item:any,index)=>{
                            return <div key={index}>{index+1}、{item.name}</div>
                        })
                    }
                        
                    </div>
                </div>
            </Link>
        )
    }
}

export default OrderItem;