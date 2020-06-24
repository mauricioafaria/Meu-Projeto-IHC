import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Principal from "./Paginas/Principal";
import Login from "./Paginas/Login";
import Cadastro from "./Paginas/Cadastro";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Principal} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Cadastro" component={Cadastro} />
      </Switch>
    </BrowserRouter>
  );
}
