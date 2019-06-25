import * as React from 'react'
import './style.scss'
import {Link} from 'react-router-dom'



interface IProps{
    name:any
    indexs:any
    author:any
    id:any
    playing_img:any
}
class Item extends React.Component<IProps>{
    render(){
        const {name, indexs, author,id,playing_img } = this.props;
        return(
            <div className='songItem'>
                <div className='song_num'>{indexs}</div>
                <Link to={{
                    pathname:'playing',
                    state:{
                        id: id,
                        name: name,
                        author: author,
                        background_img:playing_img
                    }
                }}>
                    <div className='song_info'>
                        <div className='song_name'>{name}</div>
                        <div className='song_author'> {author}</div>
                    </div>
                </Link>
            </div>
        )
    }
}
export default Item