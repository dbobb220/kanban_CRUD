import React, {Component} from 'react';
import state from './state';
import './App.css';
import 'material-icons'
import Board from './components/Board';
import NewTask from './components/NewTask';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: state.tasks,
      asideActive: true,
      asideContainer: <NewTask />,
      };
    this.menuToggle = this.menuToggle.bind(this);
    }

  menuToggle() {
    this.state.asideActive 
      ? this.setState({asideActive: false})
      : this.setState({asideActive: true});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Simple Kanban CRUD App</h1>
          <nav>
            <span className="material-icons" onClick={this.menuToggle}>playlist_add</span>
          </nav>
        </header>
        <main>
          <Board 
            tasks={this.state.tasks}    
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
