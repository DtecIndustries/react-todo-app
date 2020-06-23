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
    const { id, title} = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" defaultChecked={this.props.todo.completed} onChange={this.props.toggleComplete.bind(this, id)} /> {' '}
          { title }
          </p>
      </div>
    )
  }
}

// propTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
