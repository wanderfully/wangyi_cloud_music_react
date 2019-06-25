import * as React from 'react'
import './style.scss'
import { aGet } from './../../../api/api'
import apis from './../../../api/api'
import {Link} from 'react-router-dom'

type IState = {
    location:any
}
class Playing extends React.Component<IState>{
    componentWillMount(){
        console.log(this.props)
        let id = (this.props.location.state.id).toString(); 
        this.getMp3(id);
    }
    getMp3(id:number){
        aGet(apis.songUrls,{
            id:id
        }).then((res:any) => {
            
        })
    }
    render(){
        let {background_img,name,author }  = this.props.location.state
        return(
            <React.Fragment>
                <div className="playing_wraper">
                    <div className="headerplaying_wraper">
                        <div className="headerplay" >
                            <Link className='icon_cancle' to="/playlist">
                                <i className={'iconfont-ncm'}>&#xe6fb;</i>
                            </Link>   
                            <div>
                                <div className="playing_name">{name}</div>
                                <div>{author}</div>
                            </div> 
                        </div>
                        <div className="playing_content">
                            <div className="playing_rotate">
                                <div className="right_top rotating" style={{'backgroundImage':`url(${background_img})`}}></div>
                                <div className="disk_rotate rotating" style={{'backgroundImage':`url(${background_img})`}}>

                                </div>
                            </div>
                            <div className="playing_oper">
                                <div>

                                </div>
                            </div>
                        </div>
                        <div className='header_background'></div>
                    </div>
                </div>
                <div className="playing_background" style={{backgroundImage:`url(${background_img})`}}></div>
            </React.Fragment>
            
        )
    }
}
export default Playing;