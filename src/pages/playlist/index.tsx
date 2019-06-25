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
    getPlayCount(num:number,point:any):any{
        let numStr = num.toString()
            // 十万以内直接返回 
            if (numStr.length < 6) {
                return numStr;
            }
            //大于8位数是亿
            else if (numStr.length > 8) {
                let decimal = numStr.substring(numStr.length - 8, numStr.length - 8 + point);
                return parseFloat(parseInt((num/100000000).toString()) + '.' + decimal) + '亿';
            }
            //大于6位数是十万 (以10W分割 10W以下全部显示)
            else if (numStr.length > 5) {
                let decimal = numStr.substring(numStr.length - 4, numStr.length - 4 + point)
                return parseFloat(parseInt((num/10000).toString()) + '.' + decimal) + '万';
            }

    }
    render(){
        
        const { name, picurl,playCount } = this.props.location.state;
        return(
            <div className='playlist_wraper'>
                <Header bgImgUrl={this.state.url} history={this.state.history} imgurl={picurl}></Header>
                <div className="backgray">
                    <div className='top_wraper'>
                        
                        <div className='menu_wraper'>
                            <div className="img_wraper">
                                <img src={picurl} alt=""/>
                                <i>{this.getPlayCount(playCount,1)}</i>
                            </div>
                            <div className='des_wraper'>
                                {name}
                            </div>
                        </div>
                        <div className='item_wraper'>
                            <div className='list_title'>
                                <i className='iconfont-ncm'>&#xe641;</i>
                                播放全部共（{this.state.list.length}）首
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
                                            <Item key={index+1}  indexs={index+1} name={itemer.name} author = {author} id={item.id} playing_img={item.al.picUrl}></Item>
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