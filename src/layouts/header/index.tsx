import * as React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <Link className='icon_header' to="/playing">
                    <i className={'iconfont-ncm'}>&#xe6cf;</i>
                </Link>
                <input type="text" placeholder='Music on. World off'/>
            </div>
        )
    }
}
export default Header