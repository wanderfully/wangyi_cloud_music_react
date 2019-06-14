import * as React from 'react'
import './style.scss'

type IProps = {
    onTab:Function
}
type Istate = {
    tab:string
}
class Header extends React.Component<IProps,Istate>{
    state = {
        tab:'1'
    }
    changePage = (index:string) => {
       this.props.onTab(index)
       this.setState({
           tab:index
       })
    }
    render(){
        return(
            <div className="nav_find">
                <a className='icon_header' onClick={() => {
                    this.changePage('1')
                }}>
                    <div className={'iconfont-ncm'}>个性推荐</div>
                    <div className={"tab_selected "+(this.state.tab == '0' ? 'tab_right' : '')}></div>
                </a>
                <a className='icon_header' onClick={() => {
                    this.changePage('0')
                }}>
                    <div className={'iconfont-ncm'}>排行榜</div>
                </a>
                
            </div>
        )
    }
}
export default Header