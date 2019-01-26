import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import * as TodoActions from '../redux/Todo/actions';

class AddTodo extends React.Component {
  render() {
    return (
      <div style={{ padding: '40px 0px' }}>
        <Button
          color="primary"
          variant="contained"
          style={{ margin: '50px' }}
          onClick={() => this.props.addTodo('todo a thing')}
        >
          Add a todo
        </Button>
        <div>Todo count: {this.props.todoCount}</div>
      </div>
    );
  }
}

export default connect(
  state => ({
    todoCount: state.todos.length
  }),
  {
    addTodo: TodoActions.addTodo
  }
)(AddTodo);
