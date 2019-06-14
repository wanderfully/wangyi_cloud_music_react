import * as React from 'react'
import './style.scss'


interface IProps{
    name:any
    indexs:any
    author:any
}
class Item extends React.Component<IProps>{
    render(){
        const {name, indexs, author } = this.props;
        return(
            <div className='songItem'>
                <div className='song_num'>{indexs}</div>
                <div className='song_info'>
                    <div className='song_name'>{name}</div>
                    <div className='song_author'> {author}</div>
                </div>
            </div>
        )
    }
}
export default Item