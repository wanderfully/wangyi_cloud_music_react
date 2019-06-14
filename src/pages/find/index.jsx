import * as React from 'react'
import Commonheader from '../../layouts/header/index'
import Findheader from './nav'
import Custom from './custom'




class App extends React.Component{
  // count: number
  state = {
    count: 0
  }

  componentWillUnmount() {
    console.log('=== Friends will unmount  =====')
  }

  componentDidMount() {
   
  }
  onHandTab(tab){
    this.setState({
      tab:tab
    })
  }
  render() {
    return (
      <div>
        <div className='headerWraper'>
          <Commonheader></Commonheader>
          <Findheader onTab={this.onHandTab.bind(this)}></Findheader>
        </div>
        
        <Custom tab={this.state.tab}></Custom>
      </div>
    )
  }
}

export default App
