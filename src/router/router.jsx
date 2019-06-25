import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LiveRoute from 'react-live-route'
import * as style from './style.scss'
import Bottombar from './../layouts/bottomBar/index';
import findPage from '../pages/find/index';
import videoPage from '../pages/vedio/index';
import minePage from '../pages/mine/index';
import frendsPage from '../pages/frends/index';
import acountPage from '../pages/acount/index';
import playlist from '../pages/playlist/index';
import playing from '../pages/playlist/playing/index';
import noBottom from './../layouts/bottomBar/noBottom'

class App extends React.Component{
    render(){
        return(
                 <BrowserRouter>
                    <div className={style.routeWrapper}>
                        <Route path={`/`} exact component={findPage} alwaysLive={true} />
                        <Route path={`/find`} component={findPage} alwaysLive={true} />
                        <Route path={`/video`} component={videoPage} alwaysLive={true} />
                        <Route path={`/mine`} component={minePage} alwaysLive={true} />
                        <Route path={`/friends`} component={frendsPage} alwaysLive={true} />
                        <Route path={`/account`} component={acountPage} alwaysLive={true} />
                        <Route path={`/playlist`} component={playlist} alwaysLive={true} />
                        <Route path={`/playing`} component={playing} alwaysLive={true} />
                    </div>
               
                    <Switch>
                        <Route path={`/find`} component={Bottombar}></Route> 
                        <Route path={`/video`} component={Bottombar}></Route> 
                        <Route path={`/mine`} component={Bottombar}></Route> 
                        <Route path={`/frends`} component={Bottombar}></Route> 
                        <Route path={`/account`} component={Bottombar}></Route> 
                        <Route path={`/playing`} component={noBottom}></Route>
                        <Route path={`/`} component={Bottombar}></Route> 
                    </Switch>
                </BrowserRouter>
            
        )
    }
}
export default App;
