import React, {useEffect, useState} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import './styles/styles.css'
import Navbar from "./components/UI/navbar/Navbar";
import {privateRoutes, publicRoutes} from "./router";
import {AuthContext} from "./context";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    useEffect(()=>{
        if (localStorage.getItem('auth')) setIsAuth(true)

    },[])
    return (
       <AuthContext.Provider value={{
           isAuth,
           setIsAuth
       }}>
           <BrowserRouter>
               <Navbar/>
               {isAuth
                   ? <Switch>
                       {privateRoutes.map(route =>
                           <Route
                               component={route.component}
                               path={route.path}
                               exact={route.exact}
                               key={route.path}
                           />
                       )}

                       <Redirect to="/posts"/>
                   </Switch>
                   :
                   <Switch>
                       {publicRoutes.map(route =>
                           <Route
                               component={route.component}
                               path={route.path}
                               exact={route.exact}
                               key={route.path}
                           />
                       )}
                       <Redirect to="/login"/>
                   </Switch>
               }
           </BrowserRouter>
       </AuthContext.Provider>
    );
}

export default App;

