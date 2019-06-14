import * as React from 'react'



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

  render() {
    return (
      <div>
        <h1>🍻 acount page</h1>
      </div>
    )
  }
}

export default App
