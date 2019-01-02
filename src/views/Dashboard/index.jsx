import React, { Component } from "react";
import Column from "../../components/Column";

// wyswietlanie tablicy z dwoma kolumnami
// I kolumna: zadania do wykonania
// II kolumna: zadania wykonane
// zadania w kształcie etykietki z oczekiwaniem na wykonanie

// główna strona bez menu itd
export default class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <Column />
        <Column />
      </React.Fragment>
    );
  }
}
