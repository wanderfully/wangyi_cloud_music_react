import * as React from 'react'
import './index.scss'
import { aGet } from './../../../api/api'
import apis from './../../../api/api'

type IProps = {
    idx:number,
}
class OrderItem extends React.Component<IProps>{

    componentDidMount(){
        this.getOrderItem(this.props.idx)
    }
    getOrderItem(idx:any){
        aGet(apis.list,{
            idx:idx
        }).then((res:any) => {
            this.setState({
                res:res
            }) 
        });
    }
    render(){
        return(
            <div>
                
            </div>
        )
    }
}
export default OrderItem;