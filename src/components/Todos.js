import React, { Component } from 'react';
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

class Todos extends Component {
  render(){
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} toggleComplete={this.props.toggleComplete} deleteTodo={this.props.deleteTodo} />
    ));
  }
}

// propTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;