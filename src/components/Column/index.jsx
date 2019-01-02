import React, { Component } from "react";

// kolumna na zbieranie zadań
// zadania napisane jako etykietkami

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
    return <div style={styles} />;
  }
}
