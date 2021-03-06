import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    //destructuring
    const { id, title, completed} = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" defaultChecked={completed} onChange={this.props.toggleComplete.bind(this, id)} /> {' '}
          { title }
          <button style={btnStyle} onClick={this.props.deleteTodo.bind(this, id)} >x</button>
        </p>
      </div>
    )
  }
}

// propTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

//style button
const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem
