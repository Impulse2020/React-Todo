import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

let tasks = [{
  task: 'Do the thing',
  id: '11',
  iscomplete: false
},{
  task: 'Do the next thing',
  id: '12',
  iscomplete: false
},  
{
  task: 'Do the other thing',
  id: '31',
  iscomplete: false
},];



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: tasks
    }
  }


  addTask = (taskName) => {
   // e.preventDefault();
   if(taskName === ""){
     console.log('error cant be empty');
   }
   else{
    const newTask = {
      task: taskName,
      id: new Date(),
      iscomplete: false


    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }
  };
  toggleTask = taskId => {
    
    // map over array
    // when we find the item we clicked, toggle the purchased field
    // otherwise return the item untouched
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (taskId === task.id) {
          return {
            ...task,
            iscomplete: !task.iscomplete
          };
        }
        return task;
      })
    });
  };
  
  clearTasks = () =>{
    this.setState({
      tasks: []
    })
    
  }
  clearComplete = () =>{
    this.setState({
      ...tasks,
      tasks:this.state.tasks.filter(task => task.iscomplete == false)
    })
   
  }


  render() {
    
    return (
      <div className="App">
        <div className="header">
          <h1>What you must do:</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        
        <TodoList

          toggleTask={this.toggleTask}
          clearTasks={this.clearTasks}
          clearComplete={this.clearComplete}
          tasks={this.state.tasks}
        />
      </div>
    );
  }
}

export default App;
