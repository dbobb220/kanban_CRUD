import React, {Component} from 'react';
import './App.css';
import 'material-icons'
import Board from './components/Board';
import NewTask from './components/NewTask';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      asideActive: false,
      asideContainer: [],
      };
    this.menuToggle = this.menuToggle.bind(this);
    this.loadTasks = this.loadTasks.bind(this);
  }

  menuToggle() {
    this.state.asideActive
      ? this.setState({asideActive: false})
      : this.setState({asideActive: true})
  }

  componentDidMount() {
    this.loadTasks();
  }

  loadTasks() {
    fetch('/tasks') 
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      this.setState({tasks: data});
    })
      .catch(err=>console.log(err))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Simple Kanban CRUD App</h1>
          <nav>
    <span className="material-icons" onClick={()=>{this.menuToggle(); this.setState({asideContainer:<NewTask loadTasks={this.loadTasks}/>})}} title="New Task">playlist_add</span>
          </nav>
        </header>
        <main>
          <Board 
            tasks={this.state.tasks}
            loadTasks={this.loadTasks}   
          />
        </main>
        {!this.state.asideActive
          ? <aside className="aside">
              <span className="menuclose">&times;</span>   
              {this.state.asideContainer}
            </aside>
          : <aside className="aside active">
              <span className="menuclose" onClick={this.menuToggle}>&times;</span>  
              {this.state.asideContainer}
            </aside>
          }
      </div>
    );
  }
}

export default App;
