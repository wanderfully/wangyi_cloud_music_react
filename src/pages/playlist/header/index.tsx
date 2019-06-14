import * as React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

interface IProps {
    history: any
    bgImgUrl: any
    imgurl:any
}
class Header extends React.Component<IProps>{
    constructor(props:any){
        super(props)
    }
    goBack: React.MouseEventHandler = e => {
        this.props.history.goBack();
    }
    
    render(){
        const {imgurl } = this.props;
        return(
            
            <React.Fragment>
                <div className="headerplay_wraper">
                    <div className="headerplay" >
                        <Link className='icon_header' to="/playing">
                            <i className={'iconfont-ncm'}>&#xe6cf;</i>
                        </Link>
                        <Link className='icon_cancle' to="/">
                            <i className={'iconfont-ncm'}>&#xe6fb;</i>
                        </Link>    
                    </div>
                    <div className='header_background' style={{backgroundImage:`url(${imgurl}`}}></div>
                </div>
                
            </React.Fragment>
            
        )
    }
}
export default Header