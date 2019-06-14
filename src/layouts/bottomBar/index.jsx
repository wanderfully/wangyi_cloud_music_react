import * as React from 'react'
import * as style from './style.scss'
import { Link, withRouter } from 'react-router-dom'
import cs from 'classnames'

class App extends React.Component{
    render(){
        const linkData = [
            {
                router:'find',
                name:'发现',
                icon:'\ue67c',
                styleName:'netease'
            },
            {
                router: 'video',
                name: '视频',
                icon: '\ue61c'
            },
            {
                router: 'mine',
                name: '我的',
                icon: '\ue680'
            },
            {
                router: 'friends',
                name: '朋友',
                icon: '\ue60b'
            },
            {
                router: 'account',
                name: '账号',
                icon: '\ue63b'
            }
        ]
        return(
            <ul className="bottomBar">
                {
                    linkData.map((item,index) => {
                        let navName = { 'iconfont-ncm': true, [style.icon]: true }
                        if(typeof item.styleName == 'string'){
                            navName = { ...navName, [style[item.styleName]]: true }
                        }
                        return (
                            <li key={index} style={{}}>
                                <Link to={`/${item.router}`}>
                                    <i className={cs(navName)}>{item.icon}</i>
                                    <div className={style.title}>{item.name}</div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
export default withRouter(App);