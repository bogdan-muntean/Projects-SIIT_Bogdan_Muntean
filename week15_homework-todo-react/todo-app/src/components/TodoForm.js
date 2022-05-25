import React from 'react';

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {todoInput: ""};
    }

    handleChange = event => {
        this.setState({todoInput: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTodo(this.state.todoInput);
        // alert(`A todo was added: ${this.state.todoInput}`);
    }

    render(){    
        return(
            <form onSubmit={event => this.handleSubmit(event)}>
                <input type="text" placeholder='Add todo'
                value={this.state.todoInput}   
                onChange={event => this.handleChange(event)}></input>
                <button type="submit" value="Submit">Add todo</button>
            </form>
        )}   
}

export default TodoForm;