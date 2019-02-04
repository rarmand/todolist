import React, { Component } from "react";
import Task from "../Task";

// kolumna na zbieranie zadań
// zadania zapisane jako etykietki

const styles = {
  backgroundColor: "powderblue",
  width: "25%",
  padding: "10px",
  border: "1px solid black",
  position: "inline",
  float: "left",
};

export default class Column extends Component {
  render() {
    return (
      <div style={styles}>
        <Task title="Task no.2" />
      </div>
    );
  }
}
