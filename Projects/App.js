import React from "react";
import "./App.css";
import Table from "./Todo/table";
import Form from "./Todo/form";

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  handleSubmit = dataValue => {
    this.setState({
      data: [...this.state.data, dataValue]
    });
  };
  removeCharacter = index => {
    const { data } = this.state;
    this.setState({
      data: data.filter((character, i) => {
        return i !== index;
      })
    });
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <Table characterData={data} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
