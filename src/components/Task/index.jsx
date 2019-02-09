import React, { Component } from "react";

// temat taska
// opis taska
// data taska - do kiedy ukończyć
// data utworzenia taska

export default class Task extends Component {
  render() {
    return (
      <div>
        <div class="task-creation-date">Data utworzenia taska</div>
        <div class="task-title">{this.props.title}</div>
        <div class="task-description">Opis zadania do pobrania z bazy</div>
        <div class="task-finish-date">Data ukończenia zadania</div>
      </div>
    );
  }
}
