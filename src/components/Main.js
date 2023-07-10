import React, { Component } from "react";
import Form from "./Form";
import Tarefas from "./Tarefas";
import "./Main.css";

export default class Main extends Component {
  state = {
    novaTarefa: "",
    tarefas: [],
    index: -1,
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem("tarefas"));
    if (!tarefas) return;

    this.setState({ tarefas });
  }
  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if (tarefas === prevState.tarefas) return;
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim(); //trim elimina espaços adicionais

    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];

    if (this.state.index === -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: "",
      });
    } else {
      novasTarefas[this.state.index] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
      });
    }
  };
  validaInput = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };
  handleEdit = (e, index) => {
    const { tarefas } = this.state; //valor do input
    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  };
  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        <h4>Sua Lista de Anotações</h4>
        <span className="gato"></span>
        <Form
          handleSubmit={this.handleSubmit}
          validaInput={this.validaInput}
          novaTarefa={novaTarefa}
        />
        <Tarefas
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          tarefas={tarefas}
        />
      </div>
    );
  }
}
