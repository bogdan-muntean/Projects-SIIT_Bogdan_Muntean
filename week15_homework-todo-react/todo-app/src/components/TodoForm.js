import React from 'react';

class TodoForm extends React.Component{

    render(){    
        return(
            <form>
                <input type="text" placeholder='Add todo'></input>
                <button type="submit" value="Submit">Add todo</button>
            </form>
        )}   
}

export default TodoForm;