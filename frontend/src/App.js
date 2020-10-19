import React from "react"
import MainPage from './pages/MainPage.js'
import { Switch, Route } from "react-router-dom";
function App(){

    return (
        <div id="app">
            <Switch>
                <Route exact path="/" component={MainPage} />                
            </Switch>
        </div>
    )
}
//<Route path="/another" render={(props) => <AnotherPage {...props}/>} />
export default App