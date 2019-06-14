import * as React from 'react'
import './style.scss'
import Header from './header/index'
import Item from './item/index'
import { aGet } from './../../api/api'
import apis from './../../api/api'
type IState = {
    location:any
}
class Playlist extends React.Component<IState>{
    state = {
        history:'',
        url:'',
        list:[]
    }
    componentDidMount(){
        aGet(apis.playlist,{id:this.props.location.state.playCount}).then((res:any) => {
            this.setState({
                list:res.playlist.tracks
            })
        });
    }
    render(){
        
        const { name, picurl } = this.props.location.state;
        return(
            <div className='playlist_wraper'>
                <Header bgImgUrl={this.state.url} history={this.state.history} imgurl={picurl}></Header>
                <div className="backgray">
                    <div className='top_wraper'>
                        
                        <div className='menu_wraper'>
                            <div className="img_wraper">
                                <img src={picurl} alt=""/>
                            </div>
                            <div className='des_wraper'>
                                {name}
                            </div>
                        </div>
                        <div className='item_wraper'>
                            <div className='list_title'>
                                <i className='iconfont-ncm'>&#xe641;</i>
                                播放全部共（22）首
                            </div>
                            <div className='list_item'>
                                {
                                    this.state.list.map((item:any,index) => {
                                        let itemer = item;
                                        let temp:any = [];
                                        itemer.ar.forEach((item:any) => {
                                            temp.push(item.name)
                                        });
                                        let author = temp.join(',')
                                        return(
                                            <Item key={index+1}  indexs={index+1} name={itemer.name} author = {author}></Item>
                                        )
                                    })
                                }
                                
                            </div>
                        </div>
                    </div>
                    
                    <div className='img_background' style={{backgroundImage:`url(${picurl})`}}>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Playlist