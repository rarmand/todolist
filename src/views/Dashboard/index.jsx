import React, { Component } from "react";
import Column from "../../components/Column";
import Header from "../../components/Header";
// wyswietlanie tablicy z dwoma kolumnami
// I kolumna: zadania do wykonania
// II kolumna: zadania wykonane
// zadania w kształcie etykietki z oczekiwaniem na wykonanie

// główna strona bez menu itd
export default class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <h2>Jestem ambitna, więc przerabiam kurs uhaaa!</h2>
            <Column />
            <Column />
          </div>
        </div>
      </div>
    );
  }
}
