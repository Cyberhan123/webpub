// import React from "react";
// import {Route} from "react-router-dom";
const { Route, Redirect, IndexRoute } = ReactRouterDOM
/**
 * 接受router 对象 对 对象进行映射
 * @param {Object} route 
 */
export default function RouteWithSubRoutes(route) {
//   console.log(route)
//  if(route.hasOwnProperty('index')&&
//    route['index']===true){
//    return (
//      <IndexRoute  component={route.component}></IndexRoute>
//    )
//  }else{
  return (
    <Route
      path={route.path}
      render={props => {
        // pass the sub-routes down to keep nesting
        return (<route.component {...props} routes={route.routes} />)
      }}
    />
  );
 //}
 
}