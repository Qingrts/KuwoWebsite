import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";

import Index from "./components/index";
import Down from "./components/down";
import Listen from "./components/listen";

import Header from "./components/comComponent/header";
import Footer from "./components/comComponent/footer";


export default class App extends React.Component{
  constructor(props)　{
    super(props);

    this.state = {};
  }

  render() {
    return <HashRouter>
      <Header/>
      <Switch>
        <Route path="/down" component={Down}/>
        <Route path="/listen" component={Listen}/>
        <Route path="" component={Index}/>
      </Switch>
      <Footer/>
    </HashRouter>
  }
}
