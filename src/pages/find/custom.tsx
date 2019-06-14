import * as React from 'react';
// import Musiclist from './musicList/index'
import './style.scss'
import { aGet } from './../../api/api'
import apis from './../../api/api'
import Musicitem from './musicList/index'
import Banner from './banner/index'
import OrderItem from './orderItem/index'


type IProps = {
    tab:String
}
class App extends React.Component<IProps>{
    state = {
        musicLoading:false,
        musicList:[],
        newList:[],
        newLoading:false,
        banners:[]
    }
    componentDidMount(){
        aGet(apis.musicList).then((res:any) => {
            this.setState({
                musicList:res.result,
                musicLoading:true,
            })
        });
        aGet(apis.recommendSong).then((res:any) => {
            this.setState({
                newList:res.result,
                newLoading:true,
            })
        });
    }
    getOrderItem(idx:any){
        aGet(apis.list,{
            idx:idx
        }).then((res:any) => {
            return res
        });
    }
    componentWillUnmount(){
    }
    shouldComponentUpdate(nextProps:any,nextState:any):any{
        if(nextState.musicLoading && nextState.newLoading){
            return true
        }else{
            return false
        }
    }
   
    render(){
        let musicList = this.state.musicLoading ? this.state.musicList.slice(0) : Array(6).fill({id:"",name:"",trackCount:"",picUrl:"",key:""});
        let newList = this.state.newLoading ? this.state.newList.slice(0) : Array(6).fill({id:"",name:"",trackCount:"",song:{album:{blurPicUrl:""}}})
        return(
            <div className={'wraperContent '+ (this.props.tab == '0'? 'trans_right':'trans_left')}>
                <div className="custom_wraper">
                    <Banner></Banner>
                    <div className='music_list'>
                        <h3 className="music_list_title">推荐歌单</h3>
                        <ul>
                            {   
                                
                                musicList.splice(0,3).map((item:any,index) => {
                                    
                                    return  <li key={index}>
                                                <Musicitem des={item.name} num = {item.trackCount} src = {item.picUrl} playCount = {item.id}></Musicitem>
                                            </li>
                                })
                                
                            }
                        </ul>
                        <ul>
                            {
                                musicList.splice(0,3).map((item:any,index) => {
                                    return  <li key={index}>
                                                <Musicitem des={item.name} num = {item.trackCount} src = {item.picUrl} playCount = {item.id}></Musicitem>
                                            </li>
                                })
                            }
                        </ul>
                        <h3 className="music_list_title">最新歌单</h3>
                        <ul>
                            {   
                                newList.splice(0,3).map((item:any,index) => {
                                    let pic_url = item.song.album.blurPicUrl; 
                                    return  <li key={index}>
                                                <Musicitem des={item.name} num = {item.trackCount} src = {pic_url} playCount = {item.id}></Musicitem>
                                            </li>
                                })
                                
                            }
                        </ul>
                        <ul>
                            {   
                                newList.splice(0,3).map((item:any,index) => {
                                    let pic_url = item.song.album.blurPicUrl; 
                                    return  <li key={index}>
                                                <Musicitem des={item.name} num = {item.trackCount} src = {pic_url} playCount = {item.id}></Musicitem>
                                            </li>
                                })
                            }
                        </ul>
                        
                    </div>
                </div>
                <div className="custom_wraper">
                    
                    <div className='music_list'>
                        <h3 className="music_list_title">推荐歌单</h3>
                            <ul>
                                {
                                    Array(22).fill(1).map((item,index) => {
                                        return(
                                            <li key={index}>
                                                <OrderItem idx={index}></OrderItem>
                                            </li>
                                        )
                                        
                                    })
                                }   
                            </ul>
                             
                    </div>
                </div>
            </div>
            
        )
    }
}
export default App;
